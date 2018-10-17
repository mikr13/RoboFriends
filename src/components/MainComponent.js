import React, {Component} from 'react';

import '../component-styles/MainComponentStyle.css';

import Search from './SearchComponent';
import Card from './CardComponent';
import Scroll from './ScrollComponent';

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
        const filterRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.search.toLowerCase());
        });

        if(this.state.robots.length === 0) {
            return (
                <div className="pa3">
                    <h1 className="tc f-subheadline lh-copy">{this.state.title}</h1>
                    <h1 className="tc f3 mt6 pa4">{this.state.loading}</h1>
                </div>
            )
        } else {
            return (
                <div className="pa3">
                    <h1 className="tc f2 lh-copy">{this.state.title}</h1>
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