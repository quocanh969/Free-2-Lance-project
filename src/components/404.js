import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

export default class NotFoundComponent extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <section id="not-found" className="center margin-top-50 margin-bottom-25">
                            <h2>404 <i className="icon-line-awesome-question-circle" /></h2>
                            <p>Trang web bạn đang tìm không tồn tại !!</p>
                        </section>
                        <div className="row">
                            <div className="col-xl-8 offset-xl-2">
                                <div className="margin-bottom-50 text-center h4">
                                    {/* Search Field */}
                                    Quay lại &nbsp;
                                    <NavLink to='/'>Trang chủ</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
