import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/authenticationActions";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import SettingsBrightnessIcon from "@material-ui/icons/SettingsBrightness";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import Logo from "../../../../src/images/logo-menu.png";
import "../../../../src/sass/HamburgerMenu.scss";

const drawerWidth = "400px";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  Toolbar: {
    marginTop: "-64px"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  dividerColor: {
    height: "10px"
  }
}));

const HamburgerMenu = props => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
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

  const { stories } = props.stories;

  let storyData = stories.sort().map(story => (
    <List className="Hamburger_stories_list" key={story._id}>
      <Link to={`/stories/${story._id}`}>{story.name}</Link>
    </List>
  ));

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Toolbar className={classes.Toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          id="hamburger"
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon className="Hamburger_icon" fontSize="large" />
        </IconButton>
      </Toolbar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <img className="Logo_menu" id="logoMenu" src={Logo} alt="Logo" />
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon fontSize="large" className="Chevron_icon" id="chevron" />
          </IconButton>
        </div>
        <Divider classes={{ root: classes.dividerColor }} />
        <List>
          <ListItem button onClick={redirectToHome}>
            <ListItemIcon>
              <HomeIcon className="Hamburger_list_icon" id="homeIcon" fontSize="large" />
            </ListItemIcon>
            <ListItemText className="Hamburger_list_text" id="homeHeader" primary="Home" />
          </ListItem>
          <ListItem button onClick={onLogoutClick}>
            <ListItemIcon>
              <ExitToAppIcon className="Hamburger_list_icon" id="signOutIcon" fontSize="large" />
            </ListItemIcon>
            <ListItemText className="Hamburger_list_text" id="signOutHeader" primary="Sign-out" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsBrightnessIcon className="Hamburger_list_icon" id="settingsIcon" fontSize="large" />
            </ListItemIcon>
            <ListItemText className="Hamburger_list_text" id="settingsHeader" primary="Dark Mode" />
          </ListItem>
          <Divider classes={{ root: classes.dividerColor }} />
          <ListItem>
            <ListItemIcon>
              <AccountTreeIcon className="Hamburger_list_icon" id="storiesIcon" fontSize="large" />
            </ListItemIcon>
            <ListItemText className="Hamburger_list_text" id="storiesHeader" primary="Stories" />
          </ListItem>
          <ListItem>
            <ListItemText>{storyData}</ListItemText>
          </ListItem>
        </List>
        <Divider classes={{ root: classes.dividerColor }} />
      </Drawer>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  stories: state.stories
});

export default withRouter(
  connect(mapStateToProps, { logoutUser })(withRouter(HamburgerMenu))
);
