import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStory, updateStory, deleteStory } from "../../../../actions/storiesActions";
import { createTodo, deleteTodo, updateTodo } from "../../../../actions/todoActions";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import "../../../../../src/sass/Popup.scss";

class Popup extends Component {
  state = {
    storyName: "",
    members: [{ name: "", email: "" }],
    todoName: "",
    todoId: "",
    assignee: ""
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.edit) {
      this.setState({
        storyName: nextProps.name,
        members: nextProps.members
      });
    } else if (nextProps.editTodo) {
      this.setState({
        todoName: nextProps.todoName
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

  createTodo = e => {
    e.preventDefault();

    const data = {
      story: this.props.stories.story._id,
      todoName: this.state.todoName,
      assignee: this.state.assignee
    };

    this.props.createTodo(data);

    this.onClose();
  };

  updateTodo = id => {
    let todo = {
      id: id,
      todoName: this.state.todoName,
      assignee: this.state.assignee || this.props.assignee
    };

    this.props.updateTodo(todo);

    this.onClose();
  };

  deleteTodo = id => {
    this.props.deleteTodo(id);
    this.onClose();
  };

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
    this.setState({
      storyName: "",
      todoName: "",
      assignee: "",
      members: [{ name: "", email: "" }]
    });
  };

  onSelectChange = e => {
    this.setState({ [e.target.id]: e.target.value });
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

    // Create Todo Popup
    if (this.props.todo) {
      const { teamMembers } = this.props.stories.story;
      const { name, email } = this.props.auth.user;

      // Assignee dropdown in Popup
      let membersOptions = teamMembers.map((member, index) => (
        <option key={index} value={member.email}>
          {member.name}
        </option>
      ));

      return (
        <Grid
          container
          alignItems="center"
          justify="center"
          className="Todopopup_container"
        >
          <Grid item xs={12} className="Todopopup_header_container">
            <CloseIcon
              className="Todopopup_icon"
              fontSize="large"
              onClick={this.onClose}
            ></CloseIcon>
            <Typography variant="h4" className="Todopopup_header">
              Create Todo
            </Typography>
          </Grid>
          <form class="Todo_form_container" onSubmit={this.createTodo}>
            <Grid item xs={12} className="Todopopup_name_container">
              <label>
                <div className="Todopopup_form_label">Todo Description</div>
                <input
                  onChange={this.onChange}
                  value={this.state.todoName}
                  id="todoName"
                  type="text"
                  placeholder="Things and Stuff"
                  className="Todopopup_form_input"
                />
              </label>
            </Grid>
            <label>
              <Grid item xs={12} className="Todopopup_form_label">Assignee</Grid>
              <Grid item xs={12}>
                <select className="Todopopup_form_select"
                  onChange={this.onSelectChange}
                  value={this.state.assignee}
                  id="assignee"
                  type="text"
                >
                  <option disabled value="">
                    Assign to
                  </option>
                  <option value={email}>{name + " (You)"}</option>
                  {membersOptions}
                </select>
              </Grid>
            </label>
            <Grid item xs={12} className="Todopopup_form_button">
              <Button variant="contained"
                color="primary" type="submit">
                Create Todo
            </Button>
            </Grid>
          </form>
        </Grid>
      );
    }

    // Edit Todo Popup
    else if (this.props.editTodo) {
      const { teamMembers } = this.props.stories.story;
      const { name, email } = this.props.auth.user;

      const { assignee, todoId } = this.props;
      let assigneeName;

      // Find name from email
      teamMembers.forEach(member => {
        if (member.email === assignee) {
          assigneeName = member.name;
        } else if (assignee) {
          assigneeName = name + " (You)";
        }
      });

      // Assignee dropdown in Popup
      let membersOptions = teamMembers.map((member, index) => {
        if (member.name !== assigneeName) {
          return (
            <option key={member._id} value={member.email}>
              {member.name}
            </option>
          );
        }
        return null;
      });

      return (
        <Grid
          container
          alignItems="center"
          justify="center"
          className="Todopopup_container"
        >
          <Grid item xs={12} className="Todopopup_header_container">
            <CloseIcon
              className="Todopopup_icon"
              fontSize="large"
              onClick={this.onClose}
            ></CloseIcon>
            <Typography variant="h4" className="Todopopup_header">
              Edit Todo
        </Typography>
          </Grid>
          <form className="Todo_form_container">
            <Grid item xs={12} className="Todopopup_name_container">
              <label>
                <div className="Todopopup_form_label">Todo Description</div>
                <input
                  onChange={this.onChange}
                  value={this.state.todoName}
                  id="todoName"
                  type="text"
                  placeholder="Things and Stuff"
                  className="Todopopup_form_input"
                />
              </label>
            </Grid>
            <label>
              <Grid item xs={12} className="Todopopup_form_label">Assignee</Grid>
              <Grid item xs={12}>
                <select className="Todopopup_form_select"
                  onChange={this.onSelectChange}
                  value={this.state.assignee}
                  id="assignee"
                  type="text"
                >
                  <option disabled value="">
                    Assign to
                  </option>
                  <option value={email}>{name + " (You)"}</option>
                  {membersOptions}
                </select>
              </Grid>
            </label>
            <Grid item xs={12} className="Todopopup_button_container">
              <Grid item xs={6} className="Todopopup_form_button">
                <Button variant="contained"
                  color="primary" type="button" onClick={this.updateTodo.bind(this, todoId)}>
                  Edit Todo
            </Button>
              </Grid>
              <Grid item xs={6} className="Todopopup_form_button">
                <Button variant="contained"
                  color="secondary" type="button" onClick={this.deleteTodo.bind(this, todoId)}>
                  Delete Todo
            </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      );
    }


    // Edit Story Popup
    else if (this.props.edit) {
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

    // Create Story Popup
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
  stories: state.stories,
  todos: state.todos
});

export default connect(mapStateToProps, {
  createStory,
  updateStory,
  deleteStory,
  createTodo,
  deleteTodo,
  updateTodo
})(withRouter(Popup));
