import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

import { setSearchField, requestRobots } from "../redux/actions";

import "../component-styles/MainComponentStyle.css";

import ErrorBoundary from "./ErrorBoundaryComponent";
import Search from "./functional-components/SearchComponent";
import Card from "./functional-components/CardComponent";
import Scroll from "./functional-components/ScrollComponent";
import Header from "./functional-components/HeaderComponent";
import CardDetail from "./functional-components/CardDetailComponent";

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
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class Main extends Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome to RoboFriends",
      loading: "Waiting for all the cool robots to come here....",
      number: Math.floor(Math.random() * 3) + 1
    };
  }

  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() {
    const { loading, title } = this.state;

    const { robots, search, onSearchChange, isPending, error } = this.props;

    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(search.toLowerCase());
    });

    if (isPending) {
      return (
        <div className="pa2">
          <Header isPending={isPending} title={title} />
          <h1 className="tc f3 mt6 pa4">{loading}</h1>
        </div>
      );
    } else if (error) {
      return (
        <div className="pa2">
          <Header isPending={isPending} title={title} />
          <Search style={{ pointerEvent: "none", opacity: "0.5" }} />
          <h1 className="tc f3 mt6 pa6">
            There's no fun in being offline, come online and make some
            RoboFriends!
          </h1>
        </div>
      );
    } else {
      return (
        <div className="pa2">
          <ErrorBoundary>
            <Header isPending={isPending} title={title} />
            <Search searchChange={onSearchChange} />
            <Scroll>
              <Router>
                <Route exact path="/" render={props => <Card {...props} robots={filterRobots} number={this.state.number} />} />
                <Route exact path="/Robot/:robotID" render={props => <CardDetail {...props} robots={filterRobots} number={this.state.number}/>} />
                <Router render={() => <Redirect to="/" />}/>
              </Router>
            </Scroll>
          </ErrorBoundary>
        </div>
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
