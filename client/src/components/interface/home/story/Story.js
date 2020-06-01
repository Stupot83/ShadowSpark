import React, { Component } from "react";
import { connect } from "react-redux";
import { getStory } from "../../../../actions/storiesActions";
import Loading from "../loading/Loading";
import Popup from "../popup/Popup";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import "../../../../../src/sass/Display.scss";
import "../../../../../src/sass/Story.scss";

class Story extends Component {
  state = {
    popup: false,
    edit: false,
    name: "",
    members: [],
    id: "",
    owner: {}
  };

  toggleModal = e => {
    this.setState({
      popup: !this.state.popup,
      edit: false
    });
  };

  toggleEditModal = (name, members, id, owner, e) => {
    this.setState({
      popup: !this.state.popup,
      edit: !this.state.edit,
      name: name,
      members: members,
      id: id,
      owner: owner
    });
  };

  componentDidMount() {
    this.props.getStory(this.props.match.params.story);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.story !== prevProps.match.params.story) {
      this.props.getStory(this.props.match.params.story);
    }
  }

  render() {
    if (
      this.props.story &&
      this.props.story.teamMembers &&
      !this.props.story.storyLoading
    ) {
      const { story } = this.props;

      return (
        <Card className="Story_content_container">
          <h1 className="Story_content_header">{story.name}</h1>
          <Grid item xs={12} className="Edit_story_button_container">
          <Button
            variant="contained"
            color="secondary"
            className="Edit_story_button"
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
        </Card>
      );
    }

    return (
      <div className="Loading_container">
        <Loading />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  story: state.stories.story,
  stories: state.stories
});

export default connect(mapStateToProps, { getStory })(Story);
