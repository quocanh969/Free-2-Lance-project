import React, { Component } from 'react';

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import '../assets/css/testimonial.css';
import '../assets/css/style.css';
import '../assets/css/colors/blue.css';

// Image, khi mà vào project cần dùng ảnh của mình thì phải xóa mấy cái này
import Logo2 from '../assets/images/logo2.png';
import UserAvatarSmall1 from '../assets/images/user-avatar-small-01.jpg';
import UserAvatarSmall2 from '../assets/images/user-avatar-small-02.jpg';
import UserAvatarSmall3 from '../assets/images/user-avatar-small-03.jpg';
import UserAvatarPlaceholder from '../assets/images/user-avatar-placeholder.png';

import HomeBackground2 from '../assets/images/home-background-02.jpg';
import JobCategory1 from '../assets/images/job-category-01.jpg';
import JobCategory2 from '../assets/images/job-category-02.jpg';
import JobCategory3 from '../assets/images/job-category-03.jpg';
import JobCategory4 from '../assets/images/job-category-04.jpg';
import JobCategory5 from '../assets/images/job-category-05.jpg';
import JobCategory6 from '../assets/images/job-category-06.jpg';
import JobCategory7 from '../assets/images/job-category-07.jpg';
import JobCategory8 from '../assets/images/job-category-08.jpg';
import { S_Selector } from '../ultis/SHelper/S_Help_Input';
import { loadTop8Topic } from '../actions/Home';

class HomeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            finishedJob: 1586,
            jobPost: 3543,
            member: 1232,
            jobList: [
                {
                    id: 1,
                    title: 'Giao đồ ăn nè',
                    area_province: 'Ho Chi Minh',
                    area_district: 'Quận 6',
                    post_date: '02/10/2020',
                    salary: '$1000',
                    dealable: true,
                    description: 'FFXII là phiên bản FF gốc duy nhất thuộc vũ trụ Ivalice. Vũ trụ rộng lớn nhất trong FF. Vì thuộc 1 vũ trụ rộng như vậy nên cốt truyện ffxii sẽ ko thiên về anh hùng gải cứu thế giới như các game FF khác mà mang yếu tố chính trị rất nhiều nên ae chơi con này phải tập trung đọc từng câu thoại thì ae ms hiểu hết đc cốt truyện của nó. Ngoài ra thì cách xây dựng nhân vật trong tựa game này rất đọc đáo, main char trong bản này ko hề bodoi ngàu lòi lạnh lùng như cloud noctis, không giấu nghề như zidane',
                    tags: [
                        {
                            id: 1,
                            tag: 'Online',
                        },
                        {
                            id: 2,
                            tag: 'Shipping',
                        },
                    ]
                },
                {
                    id: 1,
                    title: 'Giao đồ ăn nè',
                    area_province: 'Ho Chi Minh',
                    area_district: 'Quận 6',
                    post_date: '02/10/2020',
                    salary: '$1000',
                    dealable: false,
                    description: 'FFXII là phiên bản FF gốc duy nhất thuộc vũ trụ Ivalice.',
                    tags: [
                        {
                            id: 1,
                            tag: 'Online',
                        },
                    ]
                },
                {
                    id: 1,
                    title: 'Giao đồ ăn nè',
                    area_province: 'Ho Chi Minh',
                    area_district: 'Quận 6',
                    post_date: '02/10/2020',
                    salary: '$1000',
                    dealable: true,
                    description: '',
                    tags: [
                        {
                            id: 2,
                            tag: 'Shipping',
                        },
                    ]
                },
                {
                    id: 1,
                    title: 'Giao đồ ăn nè',
                    area_province: 'Ho Chi Minh',
                    area_district: 'Quận 6',
                    post_date: '02/10/2020',
                    salary: '$1000',
                    dealable: false,
                    description: 'Không có descript',
                    tags: [
                        {
                            id: 1,
                            tag: 'Online',
                        },
                        {
                            id: 2,
                            tag: 'Shipping',
                        },
                    ]
                },
            ],
            testimonials: [
                {
                    id_user: 1,
                    avatarImg: UserAvatarPlaceholder,
                    fullname: 'Katarina',
                    rate: 4,
                    email: 'hello@gmail.com',
                    dial: '0152684975',
                },
                {
                    id_user: 2,
                    avatarImg: UserAvatarPlaceholder,
                    fullname: 'Garen',
                    rate: 3,
                    email: 'hello@gmail.com',
                    dial: '0152684975',
                },
                {
                    id_user: 3,
                    avatarImg: UserAvatarPlaceholder,
                    fullname: 'Ryze',
                    rate: 5,
                    email: 'hello@gmail.com',
                    dial: '0152684975',
                },
                {
                    id_user: 4,
                    avatarImg: UserAvatarPlaceholder,
                    fullname: 'Sylas',
                    rate: 4.5,
                    email: 'hello@gmail.com',
                    dial: '0152684975',
                },
            ]
        }
    }

    componentWillMount() {
        window.scrollTo(0,0);

        let {onLoadTop8Topics} = this.props;
        onLoadTop8Topics();
    }

    areaSession(areas) {
        let content = [];
        let count = 1;
        for (let i of areas) {
            content.push(
                <option value={count} key={count}>{i}</option>
            )
            count++;
        }

        return content;
    }

    categorySession(categories) {
        let content = [];
        let count = 1;
        for (let i of categories) {
            content.push(
                <option value={count} key={count}>{i}</option>
            )
            count++;
        }

        return content;
    }

    bannerSession() {
        let areas = [{id:1, name:'TPHCM'}, {id:2, name:'Hà Nội'}, {id:3, name:'Hải Phòng'}, {id:4, name:'Nam Định'}, {id:5, name:'Nghệ An'}];
        let categories = [{id:1, name:'lau nhà'},{id:2, name:'rửa chén'},{id:3, name:'nấu cơm'},{id:4, name:'giặc quần áo'},{id:5, name:'quét bụi'},];        

        return (
            <div id='home'>
                {/* Transparent Header Spacer */}
                <div className="transparent-header-spacer" />

                <div className="container margin-top-40">
                    {/* Intro Headline */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="banner-headline">
                                <h3>
                                    <strong className='text-white'>Công việc dành cho các cá nhân có nhu cầu làm việc thêm</strong>
                                    <br />
                                    <span className='text-smoothing-breeze'>Số lượng công việc nhiều, phù hợp với nhu cầu và khả năng của người ứng tuyển.</span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    {/* Search Bar */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="intro-banner-search-form margin-top-95">
                                {/* Search Field */}
                                <div className="intro-search-field">
                                    <label htmlFor="input-title" className="field-title ripple-effect">Bạn cần trợ giúp việc gì?</label>
                                    <input id="input-title" type="text" placeholder="Ví dụ: tạo một website giúp .." />
                                </div>

                                {/* Search Field */}
                                <div className="intro-search-field">
                                    <label htmlFor="select-area" className="field-title ripple-effect">Tại nơi nào?</label>
                                    <S_Selector id='select-area' placeholder='Khu vực' data={areas} value_tag='id' text_tag='name'></S_Selector>
                                </div>
                                {/* Search Field */}
                                <div className="intro-search-field">
                                    <label htmlFor="select-category" className="field-title ripple-effect">Nhóm cộng việc là gì?</label>
                                    <S_Selector id='select-category' placeholder='Loại công việc' data={categories} value_tag='id' text_tag='name'></S_Selector>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Stats */}
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="intro-stats margin-top-45 hide-under-992px">
                                <li>
                                    <strong className="counter text-white">{this.state.jobPost}</strong>
                                    <span className='text-smoothing-breeze'>Công việc</span>
                                </li>
                                <li>
                                    <strong className="counter text-white">{this.state.finishedJob}</strong>
                                    <span className='text-smoothing-breeze'>Công việc hoàn thành</span>
                                </li>
                                <li>
                                    <strong className="counter text-white">{this.state.member}</strong>
                                    <span className='text-smoothing-breeze'>Thành viên</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
    
    topicSession() {
        let {jobTopic} = this.props.GeneralReducer;
        let content = [];
        let count = 0;

        for (let e of jobTopic) {
            content.push(
                <div className="col-xl-3 col-md-6" key={count}>
                    {/* Photo Box */}
                    <NavLink to="/job-list" className="photo-box small topic-box">
                        <img src={'data:image/png;base64,'+e.img}></img>
                        <div className="photo-box-content">
                            <h3>{e.name}</h3>
                            <span>{e.count}</span>
                        </div>
                    </NavLink>
                </div>
            );
            count++;
        }

        return content;
    }

    renderJobsList() {
        let content = [], count = 0;

        for (let e of this.state.jobList) {
            content.push(
                <NavLink to="/job-detail" className="task-listing" key={count}>
                    <div className="task-listing-details">
                        <div className="task-listing-description">
                            <h3 className="task-listing-title">{e.title}</h3>
                            <ul className="task-icons">
                                <li><i className="icon-material-outline-location-on" /> {e.area_province}</li>
                                <li><i className='icon-material-outline-my-location'> {e.area_district}</i></li>
                                <li><i className="icon-material-outline-access-time" /> {e.post_date}</li>
                            </ul>
                            <p className="d-inline-block text-truncate" style={{ maxWidth: "40vh" }}>{e.description}</p>
                            <div className="task-tags margin-top-15">
                                {this.renderTagsOfJob(e)}
                            </div>
                        </div>
                    </div>
                    <div className="task-listing-bid">
                        <div className="task-listing-bid-inner">
                            <div className="task-offers">
                                <strong>{e.salary}</strong>
                                <span>{(e.dealable ? 'Có đấu giá' : 'Giá cố định')}</span>
                            </div>
                            <span className="button button-sliding-icon ripple-effect">Xem thêm <i className="icon-material-outline-arrow-right-alt" /></span>
                        </div>
                    </div>
                </NavLink>
            );
            count++;
        }

        return content;
    }

    renderTagsOfJob(job) {
        let content = [], count = 0;
        for (let e of job.tags) {
            content.push(
                <span key={count}>{e.tag}</span>
            );
            count++;
        }
        return content;
    }

    renderTestimonials() {
        let content = [], count = 0;
        for(let e of this.state.testimonials)
        {
            content.push(
                <div className={"item carousel-item " + (count === 0 && 'active')} key={count}>
                    <div className="img-box"><img src={e.avatarImg} alt="" /></div>
                    <br></br>

                    <p className="overview"><b>{e.fullname}</b></p>
                    <p>Rating: {e.rate} <i className='icon-material-outline-star text-warning'></i></p>
                    <p><i className="icon-feather-mail" /> {e.email}</p>
                    <p><i className="icon-feather-phone" /> {e.dial}</p>
                </div>
            );
            count++;
        }
        return content;
    }

    render() {
        return (
            <div>

                {this.bannerSession()}

                {/* Content ================================================== */}
                {/* Popular Job Categories */}
                <div className="section margin-top-65 margin-bottom-30">
                    <div className="container">
                        <div className="row">
                            {/* Section Headline */}
                            <div className="col-xl-12">
                                <div className="section-headline centered margin-top-0 margin-bottom-45">
                                    <h3>Các chủ đề nổi bật</h3>
                                </div>
                            </div>
                            {this.topicSession()}
                        </div>
                    </div>
                </div>
                {/* Features Cities / End */}

                {/* Features Jobs */}
                <div className="section gray margin-top-45 padding-top-65 padding-bottom-75">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                {/* Section Headline */}
                                <div className="section-headline pl-3 margin-top-0 margin-bottom-35">
                                    <p className='font-weight-bold' style={{fontSize: '18px'}}>Các công việc thời vụ nổi bật gần đây</p>
                                </div>
                                {/* Jobs Container */}
                                <div className="tasks-list-container compact-list margin-top-20">
                                    {this.renderJobsList()}
                                </div>
                                {/* Jobs Container / End */}
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                                {/* Section Headline */}
                                <div className="section-headline pl-3 margin-top-0 margin-bottom-35">
                                    <p className='font-weight-bold' style={{fontSize: '18px'}}>Các công việc theo sản phẩm nổi bật gần đây</p>
                                </div>
                                {/* Jobs Container */}
                                <div className="tasks-list-container compact-list margin-top-20">
                                    {this.renderJobsList()}
                                </div>
                                {/* Jobs Container / End */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* Featured Jobs / End */}

                {/* Testimonials */}
                <div className="section gray padding-top-10 padding-bottom-55">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                {/* Section Headline */}
                                <div className="section-headline centered margin-top-0 margin-bottom-5">
                                    <h3>Những người dùng nổi bật</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="myCarousel" className="carousel slide w-50 task-listing p-5" data-ride="carousel">
                        {/* Wrapper for carousel items */}
                        <div className="carousel-inner">
                            {this.renderTestimonials()}
                        </div>
                        {/* Carousel controls */}
                        <a className="carousel-control left carousel-control-prev ml-4" href="#myCarousel" data-slide="prev">
                            <i className="icon-line-awesome-angle-left" />
                        </a>
                        <a className="carousel-control right carousel-control-next mr-4" href="#myCarousel" data-slide="next">
                            <i className="icon-line-awesome-angle-right" />
                        </a>
                    </div>
                </div>
                {/* Testimonials / End */}

                {/* Counters */}
                <div className="section padding-top-70 padding-bottom-75">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="counters-container">
                                    {/* Counter */}
                                    <div className="single-counter">
                                        <i className="icon-line-awesome-suitcase" />
                                        <div className="counter-inner">
                                            <h3><span className="counter">{this.state.jobPost}</span></h3>
                                            <span className="counter-title">Công việc</span>
                                        </div>
                                    </div>                                    
                                    <div className="single-counter">
                                        <i className="icon-line-awesome-user" />
                                        <div className="counter-inner">
                                            <h3><span className="counter">{this.state.member}</span></h3>
                                            <span className="counter-title">Thành viên</span>
                                        </div>
                                    </div>
                                    {/* Counter */}
                                    <div className="single-counter">
                                        <i className="icon-line-awesome-trophy" />
                                        <div className="counter-inner">
                                            <h3><span className="counter">{this.state.finishedJob}</span></h3>
                                            <span className="counter-title">Công việc hoàn thành</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Counters / End */}
            </div>
        )
    }
}

// === Container

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = dispatch => {
    return {
        onLoadTop8Topics: () => {
            dispatch(loadTop8Topic());
        }
    }
}

const Home = withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeComponent));
export default Home;