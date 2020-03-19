import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

export const SRoute = ({ component: Component, ...rest }) => {    
    
    return (
        <Route {...rest} render={
            (props) => {
                if(window.location.href.endsWith('/home'))
                {
                    return (
                        <div id="wrapper" className="wrapper-with-transparent-header">
                            <header id="header-container" className='fullwidth transparent-header'>
                                <Header></Header>
                            </header>
                            <div className="clearfix" />                            
                            <Component {...props}></Component>
                            <Footer></Footer>
                        </div>                        
                    )
                }
                else
                {
                    return (
                        <div id="wrapper">
                            <header id="header-container" className='fullwidth'>
                                <Header></Header>
                            </header>
                            <div className="clearfix" /> 
                            <Component {...props}></Component>
                            <Footer></Footer>
                        </div> 
                    )
                }                
            }
        }
        ></Route>
    );
}
