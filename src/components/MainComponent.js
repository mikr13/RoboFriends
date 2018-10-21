import React, {Component} from 'react';

import '../component-styles/MainComponentStyle.css';

import Search from './functional-components/SearchComponent';
import Card from './functional-components/CardComponent';
import Scroll from './functional-components/ScrollComponent';

class Main extends Component {

    constructor() {
        super();
        this.state = {
            title: "Welcome to RoboFriends",
            search: "",
            robots: [],
            loading: "Waiting for all the cool robots to come here...."
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => this.setState({ robots: json }));
    }

    onSearchChange = (event) => {
        this.setState({search: event.target.value});
    }

    render() {

        // Making this.state constants so that we don't have to right this.state again and again
        const { robots, loading, search, title } = this.state;
        // Now removing every this.state

        const filterRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(search.toLowerCase());
        });

        if(!robots.length) {
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
                    <Search searchChange={this.onSearchChange} />
                    <Scroll>
                        <Card robots={filterRobots} />
                    </Scroll>
                </div>
            );
        }
    }

}

export default Main;