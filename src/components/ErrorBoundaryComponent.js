import React, { Component } from 'react';

class ErrorBoundary extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasErr: false
        }
    }

    componentDidCatch(error, info) {
        // console.log(`error here ${error}`);
        // console.log(`info here ${info}`);
        this.setState({ hasErr: true });
    }

    render() {
        if(this.state.hasErr) {
            return (
                <div>
                    <h1 className="tc f1 lh-copy">Ooops. That didn't work.</h1>
                </div>
            )
        }
        return this.props.children;
    }

}

export default ErrorBoundary;