import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getImageSrc } from "../../../ultis/SHelper/helperFunctions";
import UserAvatarPlaceholder from "../../../assets/images/portrait_placeholder.png";
import Tooltip from "@material-ui/core/Tooltip";
import moment from 'moment';
const firebase = require("firebase");

class MessagesComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedChat: null,
            newChatFormVisible: false,
            email: localStorage.getItem("email"),
            selectedIndex: 0,
            chatChoosen: null,
            emailReciver: '',
            chatText: '',
            friends: [],
            chats: []
        };
        this.messagesEndRef = React.createRef()

    }
    buildDocKey = () => [this.state.email, this.state.emailReciver].sort().join(':');
    componentDidUpdate() {
        // this.scrollToBottom()
        const container = document.getElementById('message-content-inner');
        console.log('container:', container);
        if (container)
            container.scrollTo(0, container.scrollHeight);
    }
    componentDidMount = async () => {
        const { email } = this.state;
        console.log('email:', email)
        window.scrollTo(0, 0);
        if (email) {
            await firebase
                .firestore()
                .collection('chats')
                .where('users', 'array-contains', email)
                .onSnapshot(async res => {
                    const chats = res.docs.map(_doc => _doc.data()).reverse();
                    console.log('chats:', chats)
                    if(chats.length>0)
                    {
                        await this.setState({
                            email: email,
                            chats: chats,
                            chatChoosen: chats[0],
                            emailReciver: chats[0].img.filter(el => el.email !== email)[0].email,
                            friends: []
                        });
                    }
                 
                })
        }

        const container = document.getElementById('message-content-inner');
        console.log('container:', container);

        if (container)
            container.scrollTo(0, container.scrollHeight);
    }
    submitMessage = async (e) => {
        e.target.value = "";
        const { emailReciver, email, chatText } = this.state;
        let docKey = this.buildDocKey();
        console.log('con chim:', chatText)
        if (email && chatText) {
            await firebase
                .firestore()
                .collection('chats')
                .doc(docKey)
                .update({
                    messages: firebase.firestore.FieldValue.arrayUnion({
                        sender: email,
                        message: chatText,
                        timestamp: Date.now()
                    }),
                    receiverHasRead: false
                });
        }


    }
    sendReadMessage = async () => {
        let docKey = this.buildDocKey();
        console.log('sendReadMessage:', docKey)
        if (docKey) {
            await firebase
                .firestore()
                .collection('chats')
                .doc(docKey)
                .update({
                    receiverHasRead: true
                });
        }

    }
    selectChat(chat, index) {
        this.setState({
            selectedIndex: index,
            chatChoosen: chat,
            emailReciver: chat.img.filter(el => el.email !== this.state.email)[0].email
        });
    }
    userTyping = (e) => {
        // e.preventDefault(); 
        let value = e.target.value;
        console.log('value:', value);
        e.key === "Enter" ? this.submitMessage(e) : this.setState({ chatText: e.target.value });
    }
    scrollToBottom = () => {
        this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
    render() {
        const { chats, email, selectedIndex, chatChoosen, chatText } = this.state;
        const styleUnseen = { fontWeight: 'bold', color: 'black' };
        return (
            <div className="dashboard-content-inner">
                {/* Dashboard Headline */}
                <div className="dashboard-headline">
                    <h3>Tin nhắn</h3>
                </div>
                <div className="messages-container margin-top-0">
                    <div className="messages-container-inner">
                        {/* Messages */}
                        <div className="messages-inbox" ref={this.messagesEndRef} >
                            <div className="messages-headline">
                                {/* <div className="input-with-icon">
                                    <input id="autocomplete-input" type="text" placeholder="Search" />
                                    <i className="icon-material-outline-search" />
                                </div> */}
                                Danh sách người dùng
                            </div>
                            <ul>
                                {
                                    chats.map((chat, index) => {
                                        let chatArray = chat.img.filter(el => el.email !== email);
                                        if(chatArray.length > 0) {
                                            return (
                                                <li onClick={() => { this.selectChat(chat, index) }} className={index == selectedIndex ? 'active-message' : ''} key={index}>
                                                    <div className='cursor-pointer messages-cell'>
                                                        <div className="message-avatar"><i className="status-icon status-online" /><img src={getImageSrc(chatArray[0].img, UserAvatarPlaceholder)} alt="" /></div>
                                                        <div className="message-by">
                                                            <div className="message-by-headline">
                                                                <h5>{chatArray[0].fullname}</h5>
                                                                {/* <span>4 hours ago</span> */}
                                                            </div>
                                                            {
                                                                chat.messages.length>0 && (<p style={chat.messages[chat.messages.length - 1].sender !== email && !chat.receiverHasRead ? styleUnseen : {}}>{chat.messages[chat.messages.length - 1].message.substring(0, 30) + ' ...'}</p>)
                                                            } 
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        }
                                        else {
                                            return '';
                                        }
                                    })
                                }


                            </ul>
                        </div>
                        {/* Messages / End */}
                        {/* Message Content */}
                        {chatChoosen &&
                            <div className="message-content" ref={this.messagesEndRef}>
                                <div className="messages-headline">
                                    <h4>{chatChoosen.img.filter(el => el.email !== email)[0].fullname}</h4>
                                    {/* <a href="#" className="message-action"><i className="icon-feather-trash-2" /> Delete Conversation</a> */}
                                </div>
                                {/* Message Content Inner */}
                                <div className="message-content-inner" id="message-content-inner">
                                    {
                                        chatChoosen.messages.map((el, index) => {
                                            return (<div key={index} className={el.sender == email ? "message-bubble me" : "message-bubble "}>
                                                <div className="message-bubble-inner">
                                                    <div className="message-avatar"><img src={el.sender == email ? getImageSrc(chatChoosen.img.filter(el =>
                                                        el.email === email)[0].img, UserAvatarPlaceholder) : getImageSrc(chatChoosen.img.filter(el =>
                                                            el.email !== email)[0].img, UserAvatarPlaceholder)} alt="" /></div>
                                                    <div className="message-text">
                                                        <Tooltip title={moment(el.timestamp).format("hh:mm a")}>
                                                            <p>{el.message}</p>
                                                        </Tooltip>
                                                    </div>
                                                </div>
                                                <div className="clearfix" />

                                            </div>)
                                        })
                                    }


                                </div>
                                {/* Message Content Inner / End */}
                                {/* Reply Area */}
                                <div className="message-reply">
                                    <input
                                        onClick={this.sendReadMessage}
                                        placeholder='Nhập tin nhắn ...'
                                        onKeyUp={(e) => this.userTyping(e)}
                                        cols={1} rows={1} data-autoresize defaultValue={""} />
                                    <button className="button ripple-effect" onClick={this.submitMessage} >Gửi</button>
                                </div>
                            </div>
                        }

                    </div>
                </div>
                {/* Messages Container / End */}
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

const Messages = withRouter(connect(mapStateToProps, mapDispatchToProps)(MessagesComponent));
export default Messages;