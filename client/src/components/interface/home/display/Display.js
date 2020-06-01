import React, { Component } from "react";
import { connect } from "react-redux";
import Popup from "../popup/Popup";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Logo from "../../../../../src/images/logo-holiday.png";
import "../../../../../src/sass/Display.scss";

class Display extends Component {
  state = {
    popup: false,
    edit: false,
    name: "",
    members: [],
    id: "",
    owner: {}
  };

  toggleModal = e => {
    this.setState({ popup: !this.state.popup, edit: false });
  };

  toggleEditModal = (name, members, id, owner, e) => {
    e.stopPropagation();

    this.setState({
      popup: !this.state.popup,
      edit: !this.state.edit,
      name: name,
      members: members,
      id: id,
      owner: owner
    });
  };

  render() {
    const { stories } = this.props.stories;

    let content;

    let storyData = stories.sort().map(story => (
      <Card key={story._id} className="Story_card">
        <Grid item xs={12}>
          <Typography className="Story_name">{story.name}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="secondary"
            className="Story_option_button"
            onClick={this.toggleEditModal.bind(
              this,
              story.name,
              story.teamMembers,
              story._id,
              story.owner
            )}
          >
            Edit Story
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            className="Story_option_button"
            onClick={() => this.props.history.push(`/stories/${story._id}`)}
          >
            View Story
          </Button>
        </Grid>
      </Card>
    ));

    if (stories.length > 0) {
      // When there is one Story or more
      content = (
        <>
          <Grid item xs={12} className="Create_story_button_container">
            <Button
              variant="contained"
              color="primary"
              size="large"
              className="Create_story_button"
              onClick={this.toggleModal}
            >
              Create Story
            </Button>
          </Grid>
          <div className="Popup_area">
            <Popup
              onClose={this.toggleModal}
              popup={this.state.popup}
              edit={this.state.edit}
              name={this.state.name}
              members={this.state.members}
              id={this.state.id}
              owner={this.state.owner}
            />
          </div>
          <Grid
            container
            alignItems="center"
            justify="center"
            className="Stories_container"
          >
            {storyData}
          </Grid>
        </>
      );
    } else {
      // No Stories
      content = (
        <>
          <Grid
            container
            alignItems="center"
            justify="center"
            className="No_stories_container"
          >
            <Grid item xs={12} className="No_stories_header">
              <h2>No current stories - are you on holibobs?</h2>
            </Grid>
            <Grid item xs={12}>
              <img className="Logo_holiday" src={Logo} alt="Loading" />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className="Create_story_button"
                onClick={this.toggleModal}
              >
                Create Story
              </Button>
            </Grid>
            <div className="Popup_area">
              <Popup onClose={this.toggleModal} popup={this.state.popup} />
            </div>
          </Grid>
        </>
      );
    }

    return (
      <Card className="Display_container">
        <h1 className="Display_header">Current Stories</h1>
        {content}
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  stories: state.stories
});

export default connect(mapStateToProps, {})(Display);
