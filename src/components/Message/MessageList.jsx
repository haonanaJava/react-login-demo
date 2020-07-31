import React, { Component } from 'react';
import Message from './Message'
import {connect} from 'react-redux'
import { deleteMessage } from '../../actions/messages'

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const messages = this.props.messages.map(item => {
            return <Message key={item.id} message={ item } deleteMessage= {this.props.deleteMessage} />
        })
        return (
            <div>
                {messages}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps, {deleteMessage})(MessageList);