import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSearchField, requestRobots } from '../redux/actions';

import '../component-styles/MainComponentStyle.css';

import ErrorBoundary from './ErrorBoundaryComponent';
import Search from './functional-components/SearchComponent';
import Card from './functional-components/CardComponent';
import Scroll from './functional-components/ScrollComponent';

const mapStateToProps = state => {
    return {
        search: state.searchARobot.search,
        robots: state.requestRobotsReducer.robots,
        isPending: state.requestRobotsReducer.isPending,
        error: state.requestRobotsReducer.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    };
};

class Main extends Component {

    constructor() {
        super();
        this.state = {
            title: "Welcome to RoboFriends",
            loading: "Waiting for all the cool robots to come here...."
        };
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(json => this.setState({ robots: json }));
        this.props.onRequestRobots();
    }

    // onSearchChange = (event) => {
    //     this.setState({search: event.target.value});
    // }

    render() {

        // Making this.state constants so that we don't have to right this.state again and again
        const { loading, title } = this.state;
        // Now removing every this.state

        const { robots, search, onSearchChange, isPending } = this.props;

        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(search.toLowerCase());
        });

        if(isPending) {
            return (
                <div className="pa2">
                    <h1 className="tc f-subheadline lh-copy">{title}</h1>
                    <h1 className="tc f3 mt6 pa4">{loading}</h1>
                </div>
            )
        } else {
            return (
                <div className="pa2">
                    <h1 className="tc f2 lh-copy">{title}</h1>
                    <ErrorBoundary>
                        <Search searchChange={onSearchChange} />
                        <Scroll>
                            <Card robots={filterRobots} />
                        </Scroll>
                    </ErrorBoundary>
                </div>
            );
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Main);