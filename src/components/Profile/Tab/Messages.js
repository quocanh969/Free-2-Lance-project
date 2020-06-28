import React, { Component } from 'react'

import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getImageSrc } from "../../../ultis/SHelper/helperFunctions";
import UserAvatarPlaceholder from "../../../assets/images/user-avatar-placeholder.png";
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
                    const chats = res.docs.map(_doc => _doc.data());
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
        console.log('chats:', chats)
        console.log('chatChoosen:', chatChoosen);
        console.log('chatText:', chatText)
        const styleUnseen = { fontWeight: 'bold', color: 'black' };
        return (
            <div className="dashboard-content-inner">
                {/* Dashboard Headline */}
                <div className="dashboard-headline">
                    <h3>Messages</h3>
                    {/* Breadcrumbs */}
                    <nav id="breadcrumbs" className="dark">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Dashboard</a></li>
                            <li>Messages</li>
                        </ul>
                    </nav>
                </div>
                <div className="messages-container margin-top-0">
                    <div className="messages-container-inner">
                        {/* Messages */}
                        <div className="messages-inbox" ref={this.messagesEndRef} >
                            <div className="messages-headline">
                                <div className="input-with-icon">
                                    <input id="autocomplete-input" type="text" placeholder="Search" />
                                    <i className="icon-material-outline-search" />
                                </div>
                            </div>
                            <ul>
                                {
                                    
                                    chats.map((chat, index) => {
                                        return (
                                            <li onClick={() => { this.selectChat(chat, index) }} className={index == selectedIndex ? 'active-message' : ''} key={index}>
                                                <a href="#">
                                                    <div className="message-avatar"><i className="status-icon status-online" /><img src={getImageSrc(chat.img.filter(el => el.email !== email)[0].img, UserAvatarPlaceholder)} alt="" /></div>
                                                    <div className="message-by">
                                                        <div className="message-by-headline">
                                                            <h5>{chat.img.filter(el => el.email !== email)[0].fullname}</h5>
                                                            {/* <span>4 hours ago</span> */}
                                                        </div>


                                                       {
                                                           chat.messages.length>0 && (<p style={chat.messages[chat.messages.length - 1].sender !== email && !chat.receiverHasRead ? styleUnseen : {}}>{chat.messages[chat.messages.length - 1].message.substring(0, 30) + ' ...'}</p>)
                                                       } 
                                                    </div>
                                                </a>
                                            </li>
                                        )
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
                                    <a href="#" className="message-action"><i className="icon-feather-trash-2" /> Delete Conversation</a>
                                </div>
                                {/* Message Content Inner */}
                                <div className="message-content-inner" id="message-content-inner">
                                    {/* Time Sign */}
                                    <div className="message-time-sign">
                                        <span>28 June, 2018</span>
                                    </div>
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
                                        placeholder='Type your message..'
                                        onKeyUp={(e) => this.userTyping(e)}
                                        cols={1} rows={1} placeholder="Your Message" data-autoresize defaultValue={""} />
                                    <button className="button ripple-effect" onClick={this.submitMessage} >Send</button>
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