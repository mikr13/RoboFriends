import React, {Component} from 'react';

import '../component-styles/MainComponentStyle.css';

import Search from './SearchComponent';
import Card from './CardComponent';

import {robots} from '../shared/robots';

class Main extends Component {

    constructor() {
        super();
        this.state = {
            title: "Welcome to RoboFriends",
            search: "",
            robots: robots
        };
    }

    onSearchChange = (event) => {
        this.setState({search: event.target.value});
    }

    render() {
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.search.toLowerCase());
        });

        return (
            <div className="pa3">
                <h1 className="tc f-subheadline lh-copy">{this.state.title}</h1>
                <Search searchChange={this.onSearchChange} />
                <Card robots={filterRobots} />
            </div>
        );
    }

}

export default Main;