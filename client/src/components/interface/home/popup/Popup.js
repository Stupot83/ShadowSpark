import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStory, updateStory, deleteStory } from "../../../../actions/storiesActions";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import "../../../../../src/sass/Popup.scss";

class Popup extends Component {
  state = {
    storyName: "",
    members: [{ name: "", email: "" }]
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.edit) {
      this.setState({
        storyName: nextProps.name,
        members: nextProps.members
      });
    }
  }

  onChange = e => {
    if (["name", "email"].includes(e.target.name)) {
      let members = [...this.state.members];
      members[e.target.dataset.id][e.target.name] = e.target.value;
      this.setState({ members });
    } else {
      this.setState({ [e.target.id]: e.target.value });
    }
  };

  addMember = e => {
    this.setState(prevState => ({
      members: [...prevState.members, { name: "", email: "" }]
    }));
  };

  deleteMember = index => {
    let array = [...this.state.members];
    array.splice(index, 1);
    this.setState({ members: array });
  };

  createStory = () => {
    let story = {
      storyName: this.state.storyName,
      members: this.state.members
    };

    this.props.createStory(story);
    this.onClose();
  };

  updateStory = async id => {
    let story = {
      id: this.props.id,
      storyName: this.state.storyName,
      members: this.state.members
    };

    await this.props.updateStory(story);

    this.onClose();
    window.location.reload();
  };

  deleteStory = id => {
    this.props.deleteStory(id, this.props.history);
    this.onClose();
  };

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
    this.setState({
      storyName: "",
      members: [{ name: "", email: "" }]
    });
  };

  render() {
    if (!this.props.popup) {
      return null;
    }

    document.onkeyup = e => {
      if (e.keyCode === 27 && this.props.popup) {
        this.onClose();
      }
    };

    let { members } = this.state;

    // Edit Story popup
    if (this.props.edit) {
      return (
        <Grid
          container
          alignItems="center"
          justify="center"
          className="Popup_container"
        >
          <Grid item xs={12} className="Popup_header_container">
            <CloseIcon
              className="Popup_icon"
              fontSize="large"
              onClick={this.onClose}
            ></CloseIcon>
            <Typography variant="h4" className="Popup_header">
              Edit Story
            </Typography>
          </Grid>
          <Grid item xs={12} className="Popup_story_creator">
            <Typography>
              Created by {this.props.owner.name} ({this.props.owner.email})
            </Typography>
          </Grid>
          <Grid item xs={12} className="Popup_name_container">
            <label>
              <div className="Popup_form_label">Story Name</div>
              <input
                onChange={this.onChange}
                value={this.state.storyName}
                id="storyName"
                type="text"
                placeholder="Story Name"
                className="Popup_form_input"
              />
            </label>
          </Grid>
          <Grid item xs={12} className="Popup_form_label">
            <Button
              variant="outlined"
              color="primary"
              className="Popup_form_mateymabobs_button"
              onClick={this.addMember}
            >
              Add Mateymabobs
            </Button>
          </Grid>
          <Grid item xs={12} className="Popup_form_mateymabobs_container">
            {members.map((val, id) => {
              let memberId = `member-${id}`,
                emailId = `email-${id}`;
              return (
                <Grid
                  item
                  xs={12}
                  className="Popup_form_mateymabobs_details"
                  key={id}
                >
                  <label
                    className="Popup_form_mateymabobs_label"
                    htmlFor={memberId}
                  >
                    Name
                    <input
                      type="text"
                      name="name"
                      data-id={id}
                      id={memberId}
                      value={members[id].name}
                      className="Popup_form_mateymabobs_input"
                      onChange={this.onChange}
                    />
                  </label>
                  <label
                    className="Popup_form_mateymabobs_label split-email"
                    htmlFor={emailId}
                  >
                    Email
                    <input
                      type="text"
                      name="email"
                      data-id={id}
                      id={emailId}
                      value={members[id].email}
                      className="Popup_form_mateymabobs_input"
                      onChange={this.onChange}
                    />
                  </label>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="Popup_form_mateymabobs_remove"
                    onClick={this.deleteMember.bind(this, id)}
                  >
                    Remove
                  </Button>
                </Grid>
              );
            })}
          </Grid>
          <Grid item xs={6} className="Popup_form_button">
            <Button
              variant="contained"
              color="primary"
              onClick={this.updateStory.bind(this, this.props.id)}
            >
              Update Story
            </Button>
          </Grid>
          <Grid item xs={6} className="Popup_form_button">
            {this.props.owner.id === this.props.auth.user.id ? (
              <Button
                variant="contained"
                color="secondary"
                onClick={this.deleteStory.bind(this, this.props.id)}
              >
                Delete Story
              </Button>
            ) : null}
          </Grid>
        </Grid>
      );
    }

    // Create Story popup
    else
      return (
        <Grid
          container
          alignItems="center"
          justify="center"
          className="Popup_container"
        >
          <Grid item xs={12} className="Popup_header_container">
            <CloseIcon
              className="Popup_icon"
              fontSize="large"
              onClick={this.onClose}
            ></CloseIcon>
            <Typography variant="h4" className="Popup_header">
              Create Story
            </Typography>
          </Grid>
          <Grid item xs={12} className="Popup_name_container">
            <label>
              <div className="Popup_form_label">Story Name</div>
              <input
                onChange={this.onChange}
                value={this.state.storyName}
                id="storyName"
                type="text"
                placeholder="Story Name"
                className="Popup_form_input"
              />
            </label>
          </Grid>
          <Grid item xs={12} className="Popup_form_label">
            <Button
              variant="outlined"
              color="primary"
              className="Popup_form_mateys_button"
              onClick={this.addMember}
            >
              Add Mateymabobs
            </Button>
          </Grid>
          <Grid item xs={12} className="Popup_form_mateymabobs_container">
            {members.map((val, id) => {
              let memberId = `member-${id}`,
                emailId = `email-${id}`;
              return (
                <Grid
                  item
                  xs={12}
                  className="Popup_form_mateymabobs_details"
                  key={id}
                >
                  <label
                    className="Popup_form_mateymabobs_label"
                    htmlFor={memberId}
                  >
                    Name
                    <input
                      type="text"
                      name="name"
                      data-id={id}
                      id={memberId}
                      value={members[id].name}
                      className="Popup_form_mateymabobs_input"
                      onChange={this.onChange}
                    />
                  </label>
                  <label
                    className="Popup_form_mateymabobs_label split-email"
                    htmlFor={emailId}
                  >
                    Email
                    <input
                      type="text"
                      name="email"
                      data-id={id}
                      id={emailId}
                      value={members[id].email}
                      className="Popup_form_mateymabobs_input"
                      onChange={this.onChange}
                    />
                  </label>
                  <Button
                    variant="outlined"
                    color="secondary"
                    className="Popup_form_mateymabobs_remove"
                    onClick={this.deleteMember.bind(this, id)}
                  >
                    Remove
                  </Button>
                </Grid>
              );
            })}
          </Grid>
          <Grid item xs={12} className="Popup_form_button">
            <Button
              variant="contained"
              color="primary"
              onClick={this.createStory}
            >
              Create Story
            </Button>
          </Grid>
        </Grid>
      );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  stories: state.stories
});

export default connect(mapStateToProps, {
  createStory,
  updateStory,
  deleteStory
})(withRouter(Popup));
