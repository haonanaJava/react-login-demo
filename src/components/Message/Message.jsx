import React, { Component } from 'react';
import classnames from 'classnames'

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    handleButtonClick = () => {
        this.props.deleteMessage(this.props.message.id)
    }
    render() {
        const { type, text} = this.props.message
        return (
            <div className={ classnames('alert',{
                'alert-success': type === 'success',
                'alert-danger': type === 'danger'
            })}>
                {text}
                <button onClick={ this.handleButtonClick } className='close' >&times;</button>
            </div>
        );
    }
}

export default Message;