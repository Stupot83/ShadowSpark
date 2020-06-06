import React, { Component } from "react";
import { connect } from "react-redux";
import Popup from "../popup/Popup";
import Button from "@material-ui/core/Button";
import "../../../../sass/Display.scss";

class Todos extends Component {
  state = {
    popup: false
  };

  togglePopup = e => {
    this.setState({ popup: !this.state.popup });
  };

  render() {
    const { stories } = this.props.stories;

    return (
      <div className="Display_container">
        <h1 className="Display_header">Your Todos</h1>
        <div className="Stories_container">
          <div className="No_stories_container">
            <h1 className="No_stories_header">No current Todos</h1>
            {stories.length > 0 ? (
              <p>Visit a story to create Todos</p>
            ) : (
                <Button variant="contained" color="primary" onClick={this.togglePopup}>
                  Create Story
                </Button>
              )}
            <Popup onClose={this.togglePopup} popup={this.state.popup} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  stories: state.stories
});

export default connect(
  mapStateToProps,
  {}
)(Todos);