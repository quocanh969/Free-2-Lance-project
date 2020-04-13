import React, { Component } from 'react';

import '../assets/css/style.css';
import '../assets/css/colors/blue.css';
import MapContainer from './map_JobsList';

// Image, khi mà vào project cần dùng ảnh của mình thì phải xóa mấy cái này
import Logo from '../assets/images/logo.png';
import CompanyLogo1 from '../assets/images/company-logo-01.png';
import CompanyLogo2 from '../assets/images/company-logo-02.png';
import CompanyLogo3 from '../assets/images/company-logo-03.png';
import CompanyLogo4 from '../assets/images/company-logo-04.png';
import CompanyLogo5 from '../assets/images/company-logo-05.png';
import CompanyLogo6 from '../assets/images/company-logo-06.png';

import UserAvatarSmall1 from '../assets/images/user-avatar-small-01.jpg';
import UserAvatarSmall2 from '../assets/images/user-avatar-small-02.jpg';
import UserAvatarSmall3 from '../assets/images/user-avatar-small-03.jpg';
import UserAvatarPlaceholder from '../assets/images/user-avatar-placeholder.png';
import MiniFooter from './Help/MiniFooter';

export default class JobList extends Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "./assets/maps.js";
        script.async = true;
        document.body.appendChild(script);
    }

    state = {
        places: [
            {
                name: "Sydney",
                title: "Sydney",
                position: { lat: -33.847927, lng: 150.6517938 }
            },
            {
                name: "Melbourne",
                title: "Melbourne",
                position: { lat: -37.9722342, lng: 144.7729561 }
            },
            {
                name: "Perth",
                title: "Perth",
                position: { lat: -31.9546904, lng: 115.8350292 }
            }
        ],
        jobList: [
            {
                id: 1,
                logo: CompanyLogo1,
                company:'Hexagon',
                title:'Bilingual Event Support Specialist',
                isVerified: false,
                location: ' San Francisco',
                workingTime: ' Full Time',
                salary: ' $35000-$38000',
                postDay: ' 2 days ago',
            },
            {
                id: 2,
                logo: CompanyLogo5,
                company:'Laxo',
                title:'Competition Law Officer',
                isVerified: false,
                location: ' San Francisco',
                workingTime: ' Full Time',
                salary: ' $35000-$38000',
                postDay: ' 2 days ago',
            },
            {
                id: 3,
                logo: CompanyLogo2,
                company:'Coffee',
                title:'Barista and Cashier',
                isVerified: false,
                location: ' San Francisco',
                workingTime: ' Full Time',
                salary: ' $35000-$38000',
                postDay: ' 2 days ago',
            },
            {
                id: 4,
                logo: CompanyLogo3,
                company:'King',
                title:'Restaurant General Manager',
                isVerified: true,
                location: ' San Francisco',
                workingTime: ' Full Time',
                salary: ' $35000-$38000',
                postDay: ' 2 days ago',
            },
            {
                id: 5,
                logo: CompanyLogo5,
                company:'Skyist',
                title:'International Marketing Coordinator',
                isVerified: false,
                location: ' San Francisco',
                workingTime: ' Full Time',
                salary: ' $35000-$38000',
                postDay: ' 2 days ago',
            },
            {
                id: 6,
                logo: CompanyLogo5,
                company:'Podous',
                title:'Construction Labourers',
                isVerified: false,
                location: ' San Francisco',
                workingTime: ' Full Time',
                salary: ' $35000-$38000',
                postDay: ' 2 days ago',
            },
            {
                id: 7,
                logo: CompanyLogo4,
                company:'Mates',
                title:'Administrative Assistant',
                isVerified: false,
                location: ' San Francisco',
                workingTime: ' Full Time',
                salary: ' $35000-$38000',
                postDay: ' 2 days ago',
            },
            {
                id: 8,
                logo: CompanyLogo6,
                company:'Trideo',
                title:'Human Resources Consultant',
                isVerified: false,
                location: ' San Francisco',
                workingTime: ' Full Time',
                salary: ' $35000-$38000',
                postDay: ' 2 days ago',
            },
            {
                id: 9,
                logo: CompanyLogo6,
                company:'Trideo',
                title:'International Marketing Specialist',
                isVerified: false,
                location: ' San Francisco',
                workingTime: ' Full Time',
                salary: ' $35000-$38000',
                postDay: ' 2 days ago',
            },
            {
                id: 10,
                logo: CompanyLogo2,
                company:'Coffee',
                title:'Terrain Cafe Barista',
                isVerified: false,
                location: ' San Francisco',
                workingTime: ' Full Time',
                salary: ' $35000-$38000',
                postDay: ' 2 days ago',
            },
            {
                id: 11,
                logo: CompanyLogo5,
                company:'Kinte',
                title:'Skilled Labourer',
                isVerified: false,
                location: ' San Francisco',
                workingTime: ' Full Time',
                salary: ' $35000-$38000',
                postDay: ' 2 days ago',
            },
            {
                id: 12,
                logo: CompanyLogo5,
                company:'Alilia',
                title:'Healthcare Claims Advisor',
                isVerified: false,
                location: ' San Francisco',
                workingTime: ' Full Time',
                salary: ' $35000-$38000',
                postDay: ' 2 days ago',
            },
        ]
    }

    calculateAvgCoord = () => {
        var sumLat = 0;
        var sumLng = 0;
        this.state.places.map(place => {
            sumLat += place.position.lat;
            sumLng += place.position.lng;
        });
        var avgLat = sumLat/this.state.places.length;
        var avgLng = sumLng/this.state.places.length;
        console.log("Lat: " + avgLat);
        console.log("Lng: " + avgLng);

        return {avgLat, avgLng};
    }

    generateJobList() {
        let content = [];
        for(let e of this.state.jobList)
        {            
            content.push(
                <a href="single-job-page.html" className="job-listing" key={e.id}>
                    {/* Job Listing Details */}
                    <div className="job-listing-details">
                        {/* Logo */}
                        <div className="job-listing-company-logo">
                            <img src={e.logo} alt="" />
                        </div>
                        {/* Details */}
                        <div className="job-listing-description">
                            <h4 className="job-listing-company">{e.company} {e.isVerified ? <span className="verified-badge" title="Verified Employer" data-tippy-placement="top"/>:''}</h4>
                            <h3 className="job-listing-title">{e.title}</h3>
                        </div>
                    </div>
                    {/* Job Listing Footer */}
                    <div className="job-listing-footer">
                        <span className="bookmark-icon" />
                        <ul>
                            <li><i className="icon-material-outline-location-on" />{e.location}</li>
                            <li><i className="icon-material-outline-business-center" />{e.workingTime}</li>
                            <li><i className="icon-material-outline-account-balance-wallet" />{e.salary}</li>
                            <li><i className="icon-material-outline-access-time" />{e.postDay}</li>
                        </ul>
                    </div>
                </a>                            
            )
        }
        return content;
    }

    render() {
        return (
            <div className="full-page-container with-map">
                <div className="full-page-sidebar hidden-sidebar">
                    <div className="full-page-sidebar-inner" data-simplebar>
                        <div className="sidebar-container">
                            {/* Keywords */}
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
                            {/* Category */}
                            <div className="sidebar-widget">
                                <h3>Category</h3>
                                <select className="selectpicker default" multiple data-selected-text-format="count" data-size={7} title="All Categories">
                                    <option value={1}>Admin Support</option>
                                    <option value={2}>Customer Service</option>
                                    <option value={3}>Data Analytics</option>
                                    <option value={4}>Design &amp; Creative</option>
                                    <option value={5}>Legal</option>
                                    <option value={6}>Software Developing</option>
                                    <option value={7}>IT &amp; Networking</option>
                                    <option value={8}>Writing</option>
                                    <option value={9}>Translation</option>
                                    <option value={10}>Sales &amp; Marketing</option>
                                </select>
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
                        {/* Sidebar Container / End */}
                        {/* Search Button */}
                        <div className="sidebar-search-button-container">
                            <button className="button ripple-effect">Search</button>
                        </div>
                        {/* Search Button / End*/}
                    </div>
                </div>
                {/* Full Page Sidebar / End */}
                {/* Full Page Content */}
                <div className="full-page-content-container" data-simplebar>
                    <div className="full-page-content-inner">
                        <h3 className="page-title">Search Results</h3>
                        <div className="notify-box margin-top-15">
                            <div className="switch-container">
                                <label className="switch"><input type="checkbox" /><span className="switch-button" /><span className="switch-text">Turn on email alerts for this search</span></label>
                            </div>
                            <div className="sort-by">
                                <span>Sort by:</span>
                                <select className="selectpicker hide-tick">
                                    <option value={1}>Relevance</option>
                                    <option value={2}>Newest</option>
                                    <option value={3}>Oldest</option>
                                    <option value={4}>Random</option>
                                </select>
                            </div>
                        </div>
                        <div className="listings-container compact-list-layout margin-top-35 margin-bottom-25">
                            {this.generateJobList()}
                        </div>
                        {/* Pagination */}
                        <div className="clearfix" />
                        <div className="pagination-container margin-top-20 margin-bottom-20">
                            <nav className="pagination">
                                <ul>
                                    <li className="pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left" /></a></li>
                                    <li><a href="#" className="ripple-effect">1</a></li>
                                    <li><a href="#" className="ripple-effect current-page">2</a></li>
                                    <li><a href="#" className="ripple-effect">3</a></li>
                                    <li><a href="#" className="ripple-effect">4</a></li>
                                    <li className="pagination-arrow"><a href="#" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right" /></a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="clearfix" />
                        {/* Pagination / End */}
                        <MiniFooter></MiniFooter>    
                    </div>
                    {/* Full Page Content / End */}    
                                
                </div>

                
                {/* Full Page Map */}
                <div className="full-page-map-container">
                    {/* Enable Filters Button */}
                    <div className="filter-button-container">
                        <button className="enable-filters-button">
                            <i className="enable-filters-button-icon" />
                            <span className="show-text">Show Filters</span>
                            <span className="hide-text">Hide Filters</span>
                        </button>
                        <div className="filter-button-tooltip">Click to expand sidebar with filters!</div>
                    </div>
                    {/* Map */}
                    {/* <div id="map" data-map-zoom={12} data-map-scroll="true">
                        <MapContainer></MapContainer>
                    </div> */}
                    {/* <div>
                        <MapContainer places={this.state.places} />
                    </div> */}
                    <div id="map" data-map-zoom={12} data-map-scroll="true"></div>
                </div>
                {/* Map */}

            </div >
        )
    }
}
