import React, { Component } from "react";
import { connect } from "react-redux";
import { getStory } from "../../../../actions/storiesActions";
import { getTodos, deleteTodo } from "../../../../actions/todoActions";
import Loading from "../loading/Loading";
import Popup from "../popup/Popup";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import Pomodoro from "../pomodoro/Pomodoro";
import "../../../../../src/sass/Display.scss";
import "../../../../../src/sass/Story.scss";

class Story extends Component {
  state = {
    popup: false,
    edit: false,
    name: "",
    members: [],
    id: "",
    owner: {},
    editTodo: false,
    todo: false,
    todos: [],
    todoName: "",
    todoId: "",
    assignee: "",
    restMinutes: 5,
    workMinutes: 25,
    seconds: 0,
    break: false,
    start: false,
    interval: ""
  };

  togglePopup = (e) => {
    this.setState({
      popup: !this.state.popup,
      edit: false,
      todo: false,
      editTodo: false
    });
  };

  toggleEditPopup = (name, members, id, owner, e) => {
    this.setState({
      popup: !this.state.popup,
      edit: !this.state.edit,
      name: name,
      members: members,
      id: id,
      owner: owner
    });
  };

  toggleTodoPopup = (e) => {
    this.setState({
      popup: !this.state.popup,
      todo: !this.state.todo
    });
  };

  toggleEditTodoPopup = (todoName, assignee, id, e) => {
    this.setState({
      popup: !this.state.popup,
      editTodo: !this.state.editTodo,
      todoName: todoName,
      assignee: assignee,
      todoId: id
    });
  };

  componentDidMount() {
    this.props.getStory(this.props.match.params.story);
    this.props.getTodos(this.props.match.params.story);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.story !== prevProps.match.params.story) {
      this.props.getStory(this.props.match.params.story);
      this.props.getTodos(this.props.match.params.story);
    }
  }

  onChange = async (e) => {
    await this.setState({ todos: this.props.todos.todos });

    let todos = await [...this.state.todos];

    todos[e.target.id].todoName = await e.target.value;

    await this.setState({ todos });
  };

  deleteTodo = (id) => {
    this.props.deleteTodo(id);
  };

  redirectToHome = e => {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/display");
      window.location.href = "/display";
    }
  };

  timer = () => {
    this.setState({
      seconds: this.state.seconds === 0 ? 59 : this.state.seconds - 1
    });

    if (this.state.break) {
      this.setState({
        restMinutes: this.state.seconds === 0 ? this.state.restMinutes - 1
          : this.state.restMinutes === 5 ? 4 : this.state.restMinutes
      });
    }

    if (this.state.restMinutes === -1) {
      this.setState({
        restMinutes: 5, break: false
      });
    }

    else {
      this.setState({
        workMinutes: this.state.seconds === 0 ? this.state.workMinutes - 1
          : this.state.workMinutes === 25 ? 24 : this.state.workMinutes
      });

      if (this.state.workMinutes === - 1) {
        this.setState({
          workMinutes: 25, break: true
        });
      }
    }
  };

  startTimer = () => {
    this.setState({
      interval: setInterval(this.timer, 1000), start: !this.state.start
    });
  };

  pauseTimer = () => {
    this.setState(prevState => {
      return {
        restMinutes: prevState.restMinutes,
        workMinutes: prevState.workMinutes,
        seconds: prevState.seconds,
        break: prevState.break,
        start: false,
        interval: clearInterval(prevState.interval)
      };
    });
  };

  render() {
    const { todos } = this.props.todos;

    let todosList = todos.map((todo, index) => (
      <Grid item xs={12} className="Todo_details" key={todo._id}>
        <Grid item xs={3}>
          <Checkbox className="Todo_checkbox" />
        </Grid>
        <Grid
          item
          xs={6}
          onClick={this.toggleEditTodoPopup.bind(
            this,
            todo.todoName,
            todo.assignee,
            todo._id
          )}
          id={index}
          name="todo"
          className="Todo_description"
        >
          {todo.todoName}
        </Grid>
        <Grid
          item
          xs={3}
          onClick={this.toggleEditTodoPopup.bind(
            this,
            todo.todoName,
            todo.assignee,
            todo._id
          )}
          className="Todo_assignee"
        >
          {todo.assignee === this.props.auth.user.email
            ? "You"
            : todo.assignee || "Unassigned"}
        </Grid>
      </Grid>
    ));

    if (
      this.props.story &&
      this.props.story.teamMembers &&
      !this.props.stories.storyLoading &&
      !this.props.todos.todosLoading
    ) {
      const { story } = this.props;

      return (
        <Card className="Story_content_container">
          <Grid item xs={12} className="Story_content_header_container">
            <Grid item xs={6}>
              <h1 className="Story_content_header" id="todoPageHeader">{story.name}</h1>
            </Grid>
            <Grid item xs={6} className="Story_content_button_container">
              <Button variant="contained"
                color="secondary"
                className="Go_back_button"
                id="goBackButton"
                onClick={this.redirectToHome}
              >
                Go Back
                </Button>
            </Grid>
          </Grid>
          <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center">
            <Popup
              onClose={this.togglePopup}
              popup={this.state.popup}
              edit={this.state.edit}
              name={this.state.name}
              members={this.state.members}
              id={this.state.id}
              owner={this.state.owner}
              todo={this.state.todo}
              editTodo={this.state.editTodo}
              todoName={this.state.todoName}
              todoId={this.state.todoId}
              assignee={this.state.assignee}
            />
          </Grid>
          <Grid container className="Todos_container">
            <Grid item xs={12} className="Create_todo_button_container">
              <Grid item xs={5}>
                <Button
                  variant="contained"
                  color="primary"
                  className="Create_todo_button"
                  id="createTodoButton"
                  onClick={this.toggleTodoPopup}
                >
                  Create Todo
              </Button>
              </Grid>
              <Grid item xs={7} className="Pomodoro_container">
                <Grid item xs={3} className="Pomodoro_header">
                  <h2 id="pomodoroTitle">Pomodoro</h2>
                </Grid>
                <Grid item xs={9}>
                  <Pomodoro
                    timer={this.timer}
                    workMinutes={this.state.workMinutes}
                    restMinutes={this.state.restMinutes}
                    seconds={this.state.seconds}
                    state={this.state.start}
                    break={this.state.break}
                    startTimer={this.startTimer}
                    pauseTimer={this.pauseTimer}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} className="Todoslist_headings_container">
              <Grid item xs={3} className="Todoslist_heading" id="statusHeader">Status</Grid>
              <Grid item xs={6} className="Todoslist_heading" id="descriptionHeader">Description</Grid>
              <Grid item xs={3} className="Todoslist_heading" id="assigneeHeader">Assignee</Grid>
            </Grid>
            <Grid item xs={12} className="Todoslist_container">{todosList}</Grid>
          </Grid>
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
  stories: state.stories,
  todos: state.todos
});

export default connect(mapStateToProps, { getStory, getTodos, deleteTodo })(
  Story
);