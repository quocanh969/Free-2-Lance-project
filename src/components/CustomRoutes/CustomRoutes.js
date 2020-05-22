import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../Help/Header';
import Footer from '../Help/Footer';
import axios from '../../ultis/axios/axios.default';
import { verify } from '../../services/account.services';

export const SRoute = ({ component: Component, ...rest }) => {

    return (
        <Route {...rest} render={
            (props) => {
                if (window.location.href.endsWith('/home')) {
                    return (
                        <div id="wrapper" className="wrapper-with-transparent-header">
                            <header id="header-container" className='fullwidth transparent-header'>
                                <Header></Header>
                            </header>
                            <div className="clearfix" />

                            <div className='content'>
                                <Component {...props}></Component>
                            </div>

                            <Footer></Footer>
                        </div>
                    )
                }
                else if (window.location.href.includes('job-list')) {
                    return (
                        <div id="wrapper">
                            <header id="header-container" className='fullwidth'>
                                <Header></Header>
                            </header>
                            <div className="clearfix" />

                            <div className='content'>
                                <Component {...props}></Component>
                            </div>
                        </div>
                    )
                }
                else {
                    return (
                        <div id="wrapper">
                            <header id="header-container" className='fullwidth'>
                                <Header></Header>
                            </header>
                            <div className="clearfix" />

                            <div className='content'>
                                <Component {...props}></Component>
                            </div>

                            <Footer></Footer>
                        </div>
                    )
                }
            }
        }
        ></Route>
    );
}

export const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={
            (props) => {
                verify().then(result => {
                    console.log(result);
                    return (

                        <div id="wrapper">
                            <header id="header-container" className='fullwidth'>
                                <Header></Header>
                            </header>
                            <div className="clearfix" />

                            <div className='content'>
                                <Component {...props}></Component>
                            </div>

                            <Footer></Footer>
                        </div>
                    )
                }).catch(err => {
                    console.log(err);
                })
            }
        }
        ></Route >
    );
}