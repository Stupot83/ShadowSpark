import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import "../../../../sass/Pomodoro.scss";

const Pomodoro = props => {
 return (
  <Grid item xs={12} className="Pomodoro_details_container">
   <Grid item xs={5} className="Pomodoro_clock">
    <h2 id="pomodoroTime">
     {props.break ? props.restMinutes : props.workMinutes} : {props.seconds < 10 ? `0${props.seconds}` : props.seconds}
    </h2>
   </Grid>
   <Grid item xs={7} className="Pomodoro_button_container">
    <Grid item xs={6}>
     <Button
      className="Pomodoro_button"
      variant="outlined"
      color="primary"
      id="startButton"
      onClick={props.startTimer}>Start
   </Button>
    </Grid>
    <Grid item xs={6}>
     <Button
      className="Pomodoro_button"
      variant="outlined"
      color="secondary"
      id="pauseButton"
      onClick={props.pauseTimer}>Pause
   </Button>
    </Grid>
   </Grid>
  </Grid >
 )
};

export default Pomodoro;
