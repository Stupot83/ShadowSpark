import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getStories } from "../../../actions/storiesActions";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Loading from "./loading/Loading";
import Display from "./display/Display";
import Story from "./story/Story";
import Todos from "./todo/Todos";
import Navbar from "../navigation/Navbar";
import HamburgerMenu from "../navigation/HamburgerMenu";
import "../../../../src/sass/Home.scss";

class Home extends Component {
  componentDidMount() {
    this.props.getStories();
  }

  render() {
    const { stories, storiesLoading } = this.props.stories;

    let displayContent;

    if (stories === null || storiesLoading) {
      displayContent = <Loading />;
    } else if (stories.length > 0) {
      displayContent = (
        <div className="Home_content_container">
          <Switch>
            <Route
              exact
              path="/display"
              stories={stories}
              component={Display}
            />
            <Route
              exact
              path="/todos"
              stories={stories}
              component={Todos}
            />
            <Route exact path="/stories/:story" component={Story} />
          </Switch>
        </div>
      );
    } else {
      displayContent = (
        <div className="Home_content_container">
          <Switch>
            <Route exact path="/display"
              stories={[]}
              component={Display} />
            <Route exact path="/todos" component={Todos} />
          </Switch>
        </div>
      );
    }

    return (
      <Router>
        <Navbar />
        <HamburgerMenu />
        <div className="Home_container">{displayContent}</div>
      </Router>
    );
  }
}

Home.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  stories: state.stories
});

export default withRouter(connect(mapStateToProps, { getStories })(Home));