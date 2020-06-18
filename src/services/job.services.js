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
      tag: header.tag,
      images: header.images,
      start_date: header.start_date,
      end_date: header.end_date,
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

function getTags() {
  return axios.get("/getAllTags");
}

function getJobsDetail(id) {
  return axios.get("/getJobById/" + id);
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
export {
  postJob,
  getAllTopics,
  getJobsList,
  getJobsDetail,
  doApplyJob,
  getTags,
  getEmployerDetail,
};
