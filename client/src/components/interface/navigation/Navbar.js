import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authenticationActions";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "../../../../src/sass/Navbar.scss";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    marginTop: "8px"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    color: theme.palette.primary.dark,
    "& .MuiListItemIcon-root": {
      color: theme.palette.primary.dark
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.secondary.dark
      }
    }
  }
}))(MenuItem);

const Navbar = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogoutClick = e => {
    e.preventDefault();
    props.logoutUser(props.history);
    window.location.href = "/";
  };

  const redirectToHome = e => {
    if (props.auth.isAuthenticated) {
      props.history.push("/display");
      window.location.href = "/display";
    }
  };

  const { email } = props.auth.user;

  return (
    <AppBar position="static" className="Navbar">
      <Toolbar className="Toolbar">
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid className="Navbar_title_grid" item xs={5}>
            <Typography
              variant="h6"
              className="Navbar_title"
              button="true"
              onClick={redirectToHome}
            >
              ShadowSpark UI
            </Typography>{" "}
          </Grid>
          <Grid className="Profile" item xs={5}>
            <Button onClick={handleClick}>
              <AccountCircle
                className="AccountCircle"
                aria-controls="customized-menu"
                aria-haspopup="true"
                fontSize="large"
              />
            </Button>
            <StyledMenu
              id="customized-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem button onClick={redirectToHome}>
                <ListItemIcon>
                  <HomeIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </StyledMenuItem>
              <StyledMenuItem onClick={onLogoutClick}>
                <ListItemIcon>
                  <ExitToAppIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText primary="Sign-Out" />
              </StyledMenuItem>
            </StyledMenu>
            <Typography className="Profile_email">{email}</Typography>{" "}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));
