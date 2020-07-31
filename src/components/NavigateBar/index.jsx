import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavigateBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <ul className="nav nav-tabs">
                    <li role="presentation"><Link to="/">Home</Link></li>
                    <li role="presentation"><Link to="/">Login</Link></li>
                    <li role="presentation"><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>
        );
    }
}

export default NavigateBar;