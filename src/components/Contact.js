import React, { Component } from 'react';

import Logo from '../assets/images/logo4.png';

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class ContactComponent extends Component {
    componentDidMount() {
        let map = document.getElementById('contact-map');
        let iframe = document.createElement("iframe");
        // <iframe style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        iframe.style.height = "90vh";
        iframe.style.width = '100%';
        iframe.style.border = '0';
        iframe.frameBorder = '0';

        iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.7599664184736!2d106.64911261411635!3d10.752973662568158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e8b42bc3d8b%3A0x5e5f6df12b810cf2!2zMTA1MSDEkC4gTmd1eeG7hW4gVHLDo2ksIFBoxrDhu51uZyAxNCwgUXXhuq1uIDUsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1593623392811!5m2!1sen!2s";
        map.innerHTML = "";
        map.appendChild(iframe);

        window.scrollTo(0, 0);
    }

    render() {

        return (
            <div>
                {/* Titlebar ================================================== */}
                <div id="titlebar" className="gradient">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Liên hệ với chúng tôi</h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content ================================================== */}
                {/* Container */}
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="contact-location-info margin-bottom-50 row">
                                <div className='col-6 pt-5'>
                                    <div className='text-center' style={{fontSize: '70px'}}>
                                        <span className="font-weight-bold">
                                            <span className="text-primary">FREE</span>
                                            <span className="text-danger">2</span>
                                            <span className="text-dark">
                                                LANCE
                                            </span>
                                        </span>
                                    </div>                                        
                                    <div className="contact-address-headline mt-5"></div>
                                    <div>Địa chỉ: 1051 Nguyễn Trãi, Phường 14, Quận 5, TPHCM</div>
                                    <div>Số điện thoại: (036) 563-58729</div>
                                    <div>Email: free2lance2020@gmail.com</div>
                                </div>
                                <div className='col-6'>
                                    {/* <div id="singleListingMap" data-latitude="37.777842" data-longitude="-122.391805" data-map-icon="im im-icon-Hamburger" /> */}
                                    <div id='contact-map'>
                                        <div className="loading w-100 text-center" key={1}>
                                            <div className="spinner-border text-primary" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <a href="#" id="streetView">Street View</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Container / End */}
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

    }
}

const Contact = withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactComponent));
export default Contact;