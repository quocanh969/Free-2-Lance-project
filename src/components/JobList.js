import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { readLocation } from '../actions/ReadLocation';
import reducer from '../reducers/reducer'

import '../assets/css/style.css';
import '../assets/css/colors/blue.css';
import MapContainer from './map_JobsList';

import CompanyLogo1 from '../assets/images/company-logo-01.png';
import CompanyLogo2 from '../assets/images/company-logo-02.png';
import CompanyLogo3 from '../assets/images/company-logo-03.png';
import CompanyLogo4 from '../assets/images/company-logo-04.png';
import CompanyLogo5 from '../assets/images/company-logo-05.png';
import CompanyLogo6 from '../assets/images/company-logo-06.png';

// Image, khi mà vào project cần dùng ảnh của mình thì phải xóa mấy cái này

import { S_Selector } from '../ultis/SHelper/S_Help_Input';

class JobListComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isGridMode: false,
            jobList: [
                {
                    id: 1,
                    logo: CompanyLogo1,
                    company: 'Hexagon',
                    title: 'Bilingual Event Support Specialist',
                    isVerified: false,
                    location: ' San Francisco',
                    workingTime: ' Full Time',
                    salary: ' $35000-$38000',
                    postDay: ' 2 days ago',
                    description: 'Sự thật là danh tính nhân vật làm việc tại AT&T đã ủng hộ Zack cũng như chiến dịch Snyder Cut suốt thời gian qua vẫn còn là một ẩn số. Cũng rất may là trong các admin của page có một ad hiện đang sinh sống tại Mỹ. Và admin đó sẽ giúp đỡ page tìm thêm thông tin về nhân vật này.',
                    description: 'Sự thật là danh tính nhân vật làm việc tại AT&T đã ủng hộ Zack cũng như chiến dịch Snyder Cut suốt thời gian qua vẫn còn là một ẩn số. Cũng rất may là trong các admin của page có một ad hiện đang sinh sống tại Mỹ. Và admin đó sẽ giúp đỡ page tìm thêm thông tin về nhân vật này.',
                },
                {
                    id: 2,
                    logo: CompanyLogo5,
                    company: 'Laxo',
                    title: 'Competition Law Officer',
                    isVerified: false,
                    location: ' San Francisco',
                    workingTime: ' Full Time',
                    salary: ' $35000-$38000',
                    postDay: ' 2 days ago',
                    description: 'Sự thật là danh tính nhân vật làm việc tại AT&T đã ủng hộ Zack cũng như chiến dịch Snyder Cut suốt thời gian qua vẫn còn là một ẩn số. Cũng rất may là trong các admin của page có một ad hiện đang sinh sống tại Mỹ. Và admin đó sẽ giúp đỡ page tìm thêm thông tin về nhân vật này.',
                },
                {
                    id: 3,
                    logo: CompanyLogo2,
                    company: 'Coffee',
                    title: 'Barista and Cashier',
                    isVerified: false,
                    location: ' San Francisco',
                    workingTime: ' Full Time',
                    salary: ' $35000-$38000',
                    postDay: ' 2 days ago',
                    description: 'Sự thật là danh tính nhân vật làm việc tại AT&T đã ủng hộ Zack cũng như chiến dịch Snyder Cut suốt thời gian qua vẫn còn là một ẩn số. Cũng rất may là trong các admin của page có một ad hiện đang sinh sống tại Mỹ. Và admin đó sẽ giúp đỡ page tìm thêm thông tin về nhân vật này.',
                },
                {
                    id: 4,
                    logo: CompanyLogo3,
                    company: 'King',
                    title: 'Restaurant General Manager',
                    isVerified: true,
                    location: ' San Francisco',
                    workingTime: ' Full Time',
                    salary: ' $35000-$38000',
                    postDay: ' 2 days ago',
                    description: 'Sự thật là danh tính nhân vật làm việc tại AT&T đã ủng hộ Zack cũng như chiến dịch Snyder Cut suốt thời gian qua vẫn còn là một ẩn số. Cũng rất may là trong các admin của page có một ad hiện đang sinh sống tại Mỹ. Và admin đó sẽ giúp đỡ page tìm thêm thông tin về nhân vật này.',
                },
                {
                    id: 5,
                    logo: CompanyLogo5,
                    company: 'Skyist',
                    title: 'International Marketing Coordinator',
                    isVerified: false,
                    location: ' San Francisco',
                    workingTime: ' Full Time',
                    salary: ' $35000-$38000',
                    postDay: ' 2 days ago',
                    description: 'Sự thật là danh tính nhân vật làm việc tại AT&T đã ủng hộ Zack cũng như chiến dịch Snyder Cut suốt thời gian qua vẫn còn là một ẩn số. Cũng rất may là trong các admin của page có một ad hiện đang sinh sống tại Mỹ. Và admin đó sẽ giúp đỡ page tìm thêm thông tin về nhân vật này.',
                },
                {
                    id: 6,
                    logo: CompanyLogo5,
                    company: 'Podous',
                    title: 'Construction Labourers',
                    isVerified: false,
                    location: ' San Francisco',
                    workingTime: ' Full Time',
                    salary: ' $35000-$38000',
                    postDay: ' 2 days ago',
                    description: 'Sự thật là danh tính nhân vật làm việc tại AT&T đã ủng hộ Zack cũng như chiến dịch Snyder Cut suốt thời gian qua vẫn còn là một ẩn số. Cũng rất may là trong các admin của page có một ad hiện đang sinh sống tại Mỹ. Và admin đó sẽ giúp đỡ page tìm thêm thông tin về nhân vật này.',
                },
                {
                    id: 7,
                    logo: CompanyLogo4,
                    company: 'Mates',
                    title: 'Administrative Assistant',
                    isVerified: false,
                    location: ' San Francisco',
                    workingTime: ' Full Time',
                    salary: ' $35000-$38000',
                    postDay: ' 2 days ago',
                    description: 'Sự thật là danh tính nhân vật làm việc tại AT&T đã ủng hộ Zack cũng như chiến dịch Snyder Cut suốt thời gian qua vẫn còn là một ẩn số. Cũng rất may là trong các admin của page có một ad hiện đang sinh sống tại Mỹ. Và admin đó sẽ giúp đỡ page tìm thêm thông tin về nhân vật này.',
                },
                {
                    id: 8,
                    logo: CompanyLogo6,
                    company: 'Trideo',
                    title: 'Human Resources Consultant',
                    isVerified: false,
                    location: ' San Francisco',
                    workingTime: ' Full Time',
                    salary: ' $35000-$38000',
                    postDay: ' 2 days ago',
                    description: 'Sự thật là danh tính nhân vật làm việc tại AT&T đã ủng hộ Zack cũng như chiến dịch Snyder Cut suốt thời gian qua vẫn còn là một ẩn số. Cũng rất may là trong các admin của page có một ad hiện đang sinh sống tại Mỹ. Và admin đó sẽ giúp đỡ page tìm thêm thông tin về nhân vật này.',
                },
                {
                    id: 9,
                    logo: CompanyLogo6,
                    company: 'Trideo',
                    title: 'International Marketing Specialist',
                    isVerified: false,
                    location: ' San Francisco',
                    workingTime: ' Full Time',
                    salary: ' $35000-$38000',
                    postDay: ' 2 days ago',
                    description: 'Sự thật là danh tính nhân vật làm việc tại AT&T đã ủng hộ Zack cũng như chiến dịch Snyder Cut suốt thời gian qua vẫn còn là một ẩn số. Cũng rất may là trong các admin của page có một ad hiện đang sinh sống tại Mỹ. Và admin đó sẽ giúp đỡ page tìm thêm thông tin về nhân vật này.',
                },
                {
                    id: 10,
                    logo: CompanyLogo2,
                    company: 'Coffee',
                    title: 'Terrain Cafe Barista',
                    isVerified: false,
                    location: ' San Francisco',
                    workingTime: ' Full Time',
                    salary: ' $35000-$38000',
                    postDay: ' 2 days ago',
                    description: 'Sự thật là danh tính nhân vật làm việc tại AT&T đã ủng hộ Zack cũng như chiến dịch Snyder Cut suốt thời gian qua vẫn còn là một ẩn số. Cũng rất may là trong các admin của page có một ad hiện đang sinh sống tại Mỹ. Và admin đó sẽ giúp đỡ page tìm thêm thông tin về nhân vật này.',
                },
                {
                    id: 11,
                    logo: CompanyLogo5,
                    company: 'Kinte',
                    title: 'Skilled Labourer',
                    isVerified: false,
                    location: ' San Francisco',
                    workingTime: ' Full Time',
                    salary: ' $35000-$38000',
                    postDay: ' 2 days ago',
                    description: 'Sự thật là danh tính nhân vật làm việc tại AT&T đã ủng hộ Zack cũng như chiến dịch Snyder Cut suốt thời gian qua vẫn còn là một ẩn số. Cũng rất may là trong các admin của page có một ad hiện đang sinh sống tại Mỹ. Và admin đó sẽ giúp đỡ page tìm thêm thông tin về nhân vật này.',
                },
                {
                    id: 12,
                    logo: CompanyLogo5,
                    company: 'Alilia',
                    title: 'Healthcare Claims Advisor',
                    isVerified: false,
                    location: ' San Francisco',
                    workingTime: ' Full Time',
                    salary: ' $35000-$38000',
                    postDay: ' 2 days ago',
                    description: 'Sự thật là danh tính nhân vật làm việc tại AT&T đã ủng hộ Zack cũng như chiến dịch Snyder Cut suốt thời gian qua vẫn còn là một ẩn số. Cũng rất may là trong các admin của page có một ad hiện đang sinh sống tại Mỹ. Và admin đó sẽ giúp đỡ page tìm thêm thông tin về nhân vật này.',
                },
            ]
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    // readLocationOnMap = () => {
    //     console.log(this.props);
    //     let {onSend} = this.props;
    // }

    // noticeRequest = () => {
    //     let {message} = this.props.readLocation
    // }

    calculateAvgCoord = () => {
        var sumLat = 0;
        var sumLng = 0;
        this.props.ReadLocationReducer.places.map(place => {
            sumLat += place.position.lat;
            sumLng += place.position.lng;
        });
        var avgLat = sumLat / this.props.ReadLocationReducer.places.length;
        var avgLng = sumLng / this.props.ReadLocationReducer.places.length;
        console.log("Lat: " + avgLat);
        console.log("Lng: " + avgLng);

        return { avgLat, avgLng };
    }

    generateJobListGridMode() {
        let content = [], count = 0;
        console.log(this.props);
        for (let e of this.state.jobList) {
            content.push(
                <a href="#" className="job-listing" key={count}>
                    {/* Job Listing Details */}
                    <div className="job-listing-details">
                        {/* Logo */}
                        <div className="job-listing-company-logo">
                            <img src={e.logo} alt="" />
                        </div>
                        {/* Details */}
                        <div className="job-listing-description">
                            <h4 className="job-listing-company">{e.company} <span className="verified-badge" title="Verified Employer" data-tippy-placement="top" /></h4>
                            <h3 className="job-listing-title">{e.title}</h3>
                        </div>
                    </div>
                    {/* Job Listing Footer */}
                    <div className="job-listing-footer">
                        <span className="bookmark-icon" />
                        <ul>
                            <li><i className="icon-material-outline-location-on" /> {e.location}</li>
                            <li><i className="icon-material-outline-business-center" /> {e.workingTime}</li>
                            <li><i className="icon-material-outline-account-balance-wallet" /> {e.salary}</li>
                            <li><i className="icon-material-outline-access-time" /> {e.postDay}</li>
                        </ul>
                    </div>
                </a>
            );
            count++;
        }
        return content;
    }

    generateJobListListMode() {
        let content = [], count = 0;
        console.log(this.props);
        for (let e of this.state.jobList) {
            content.push(
                <a href="#" className="job-listing" key={count}>
                    {/* Job Listing Details */}
                    <div className="job-listing-details">
                        {/* Logo */}
                        <div className="job-listing-company-logo">
                            <img src={e.logo} alt="" />
                        </div>
                        {/* Details */}
                        <div className="job-listing-description">
                            <h4 className="job-listing-company">{e.company} <span className="verified-badge" title="Verified Employer" data-tippy-placement="top" /></h4>
                            <h3 className="job-listing-title">{e.title}</h3>
                            <p className="d-inline-block text-truncate" style={{maxWidth: "100vh"}}>{e.description}</p>
                        </div>
                        {/* Bookmark */}
                        <span className="bookmark-icon" />
                    </div>
                    {/* Job Listing Footer */}
                    <div className="job-listing-footer">
                        <ul>
                            <li><i className="icon-material-outline-location-on" /> {e.location}</li>
                            <li><i className="icon-material-outline-business-center" /> {e.workingTime}</li>
                            <li><i className="icon-material-outline-account-balance-wallet" /> {e.salary}</li>
                            <li><i className="icon-material-outline-access-time" /> {e.postDay}</li>
                        </ul>
                    </div>
                </a>
            );
            count++;
        }
        return content;
    }

    render() {
        let areas = [{id:1, name:'TPHCM'}, {id:2, name:'Hà Nội'}, {id:3, name:'Hải Phòng'}, {id:4, name:'Nam Định'}, {id:5, name:'Nghệ An'}];
        let categories = [{id:1, name:'lau nhà'},{id:2, name:'rửa chén'},{id:3, name:'nấu cơm'},{id:4, name:'giặc quần áo'},{id:5, name:'quét bụi'},];        
        let sortType = [{type: 1, text: 'Mới nhất'}, {type: 2, text: 'Đã đăng lâu nhất'}];

        return (
            <div>
                <div className="margin-top-90"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4">
                            <div className="sidebar-container">

                                {/* Từ khóa */}
                                <div className="sidebar-widget">
                                    <h3>Keywords</h3>
                                    <div className="keywords-container">
                                        <div className="keyword-input-container">
                                            <input type="text" className="keyword-input" placeholder="e.g. job title" />
                                            <button className="keyword-input-button ripple-effect"><i className="icon-material-outline-add" /></button>
                                        </div>
                                        <div className="keywords-list">{/* keywords go here */}</div>
                                        <div className="clearfix" />
                                    </div>
                                </div>

                                {/* Khu vực */}
                                <div className="sidebar-widget">
                                    <h3>Khu vực</h3>
                                    <div className="input-with-icon">
                                        <S_Selector className='with-border' id='select-area' placeholder='Khu vực' data={areas} value_tag='id' text_tag='name'></S_Selector>
                                    </div>
                                </div>

                                {/* Category */}
                                <div className="sidebar-widget">
                                    <h3>Chủ đề</h3>
                                    <S_Selector className='with-border' id='select-category' placeholder='Loại công việc' data={categories} value_tag='id' text_tag='name'></S_Selector>
                                </div>
                                {/* Job Types */}
                                <div className="sidebar-widget">
                                    <h3>Job Type</h3>
                                    <div className="switches-list">
                                        <div className="switch-container">
                                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Freelance</label>
                                        </div>
                                        <div className="switch-container">
                                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Full Time</label>
                                        </div>
                                        <div className="switch-container">
                                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Part Time</label>
                                        </div>
                                        <div className="switch-container">
                                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Internship</label>
                                        </div>
                                        <div className="switch-container">
                                            <label className="switch"><input type="checkbox" /><span className="switch-button" /> Temporary</label>
                                        </div>
                                    </div>
                                </div>
                                {/* Salary */}
                                <div className="sidebar-widget">
                                    <h3>Salary</h3>
                                    <div className="margin-top-55" />
                                    {/* Range Slider */}
                                    <input className="range-slider" type="text" defaultValue data-slider-currency="$" data-slider-min={1500} data-slider-max={15000} data-slider-step={100} data-slider-value="[1500,15000]" />
                                </div>
                                {/* Tags */}
                                <div className="sidebar-widget">
                                    <h3>Tags</h3>
                                    <div className="tags-container">
                                        <div className="tag">
                                            <input type="checkbox" id="tag1" />
                                            <label htmlFor="tag1">front-end dev</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag2" />
                                            <label htmlFor="tag2">angular</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag3" />
                                            <label htmlFor="tag3">react</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag4" />
                                            <label htmlFor="tag4">vue js</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag5" />
                                            <label htmlFor="tag5">web apps</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag6" />
                                            <label htmlFor="tag6">design</label>
                                        </div>
                                        <div className="tag">
                                            <input type="checkbox" id="tag7" />
                                            <label htmlFor="tag7">wordpress</label>
                                        </div>
                                    </div>
                                    <div className="clearfix" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-8 content-left-offset">

                            <h3 className="page-title">Danh sách công việc</h3>

                            <div className="notify-box margin-top-15 container">
                                <div className='row py-auto'>
                                    <div className='col-6 my-auto'>
                                        <span className={'text-white pt-2 pb-1 px-1 rounded mr-1 cursor-pointer ' + (this.state.isGridMode ? 'bg-293FE4' : 'bg-secondary')}
                                            onClick={() => { this.setState({ isGridMode: true }) }}>
                                            <i className='icon-feather-grid p-1 my-auto'></i>
                                        </span>
                                        <span className={'text-white pt-2 pb-1 px-1 rounded mr-1 cursor-pointer ' + (!this.state.isGridMode ? 'bg-293FE4' : 'bg-secondary')}
                                            onClick={() => { this.setState({ isGridMode: false }) }}>
                                            <i className='icon-feather-list p-1 my-auto'></i>
                                        </span>
                                    </div>
                                    <div className="col-6 row">
                                        <div className='col-3 my-auto'>Sort by:</div>
                                        <S_Selector id='select-sort-type' flex='col-9' placeholder='Mới nhất' data={sortType} value_tag='type' text_tag='text'></S_Selector>
                                    </div>
                                </div>
                            </div>

                            <div className={"listings-container margin-top-35 " + (this.state.isGridMode ? 'grid-layout' : 'compact-list-layout')}>
                                {(
                                    this.state.isGridMode
                                        ?
                                        this.generateJobListGridMode()
                                        :
                                        this.generateJobListListMode()
                                )}


                            </div>
                            {/* Pagination */}
                            <div className="clearfix" />
                            <div className="row">
                                <div className="col-md-12">
                                    {/* Pagination */}
                                    <div className="pagination-container margin-top-30 margin-bottom-60">
                                        <nav className="pagination">
                                            <ul>
                                                <li className="pagination-arrow"><a href="#"><i className="icon-material-outline-keyboard-arrow-left" /></a></li>
                                                <li><a href="#">1</a></li>
                                                <li><a href="#" className="current-page">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                                <li className="pagination-arrow"><a href="#"><i className="icon-material-outline-keyboard-arrow-right" /></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            {/* Pagination / End */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onSend: () => {
            dispatch(readLocation());
        }
    }
}

const JobList = withRouter(connect(mapStateToProps, mapDispatchToProps)(JobListComponent));
export default JobList;
