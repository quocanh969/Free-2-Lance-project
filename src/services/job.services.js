import axios from "../ultis/axios/axios.default";

function postJob(header) {
  // return axios.post('/jobs/addJob', {
  //     headers: {
  //         "Authorization": "Bearer " + JSON.parse(localStorage.getItem("token")),
  //     },
  //     employer: header.employer,
  //     title: header.title,
  //     salary: header.salary,
  //     job_topic: header.job_topic,
  //     address: header.address,
  //     area_province: header.province,
  //     area_district: header.area_district,
  //     lat: header.lat,
  //     lng: header.lng,
  //     description: header.description,
  //     expire_date: header.expire_date,
  //     dealable: header.dealable,
  //     job_type: header.job_type,
  //     vancancy: header.vacancy,
  //     isOnline: header.isOnline,
  //     isCompany: header.isCompany,
  //     requirement: header.requirement,
  //     tag: header.tag,
  //     images: header.relatedImg,
  // });
  return axios({
    method: "post",
    url: "/jobs/addJob",
    data: {
      employer: header.employer,
      title: header.title,
      salary: header.salary,
      job_topic: header.job_topic,
      address: header.address,
      area_province: header.area_province,
      area_district: header.area_district,
      lat: header.lat,
      lng: header.lng,
      description: header.description,
      expire_date: header.expire_date,
      dealable: header.dealable,
      job_type: header.job_type,
      vacancy: header.vacancy,
      isOnline: header.isOnline,
      isCompany: header.isCompany,
      requirement: header.requirement,
      tags: header.tag,
      images: header.images,
      start_date: header.start_date,
      end_date: header.end_date,
      benefit: header.benefit,
    },
    headers: {
      Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
    },
  });
}

function getAllTopics() {
  return axios.get("/allJobsTopics");
}

function getJobsList(page, take, isASC, query) {
  return axios.post("/getJobsList", {
    page,
    take,
    isASC,
    query,
  });
}

function getJobsForEmployer(page, take, isASC, status) {
  return axios.post("/jobs/getJobsByEmployerId", {
    page,
    take,
    isASC,
    status,
  });
}

function getJobsForApplicant(page, take, isASC, status) {
  return axios.post("/jobs/getJobsByApplicantId", {
    page,
    take,
    isASC,
    status,
  });
}

function getTags() {
  return axios.get("/getAllTags");
}
//#region Job detail
function getJobsDetail(id) {
  return axios.get("/getJobById/" + id);
}

function getSimilarJobs(jobTopic) {
  let page = 1,
    take = 4,
    isASC = 2;
  let query = { job_topic: jobTopic };
  return axios.post("/getJobsList", {
    page,
    take,
    isASC,
    query,
  });
}

function getEmployerDetail(id) {
  return axios.get("/getUserInfoNotPrivate/" + id);
}

function doApplyJob(id_user, id_job, proposed_price, attachment) {
  return axios.post("/applicants/addApplicant", {
    id_user,
    id_job,
    proposed_price,
    attachment,
  });
}
//#endregion Job detail

//#region dashboard job for employer
function doCancelRecruit(id_job) {
  return axios.post("/jobs/cancelRecruit", {
    id_job,
  });
}

function getApplicantsByJobId(id, page, take, id_status) {
  return axios.post("/applicants/getByJobId", {
    id,
    page,
    take,
    id_status,
  });
}

function doSendAcceptApplicant(id_job, id_user, email, job_title) {
  return axios.post("/jobs/acceptApplicant", {
    id_job,
    id_user,
    email,
    job_title,
  });
}

function doSendRejectApplicant(id_job, id_user, email, job_title) {
  return axios.post("/jobs/rejectApplicant", {
    id_job,
    id_user,
    email,
    job_title,
  });
}

function doEndJob(id_job, job_title) {
  return axios.post("/jobs/finishJob", {
    id_job,
    job_title,
  });
}

function doReportUser(content, reporterId, yourRole) {
  return axios.post("/users/addReport", {
    content,
    reporterId,
    yourRole,
  });
}

//#endregion dashboard job for employer

export {
  postJob,
  getAllTopics,
  getJobsList,
  getJobsForEmployer,
  getJobsForApplicant,
  getJobsDetail,
  doApplyJob,
  getTags,
  getEmployerDetail,
  getSimilarJobs,
  doCancelRecruit,
  getApplicantsByJobId,
  doSendAcceptApplicant,
  doSendRejectApplicant,
  doEndJob,
  doReportUser,
};
