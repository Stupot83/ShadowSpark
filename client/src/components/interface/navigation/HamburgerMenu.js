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

const drawerWidth = "500px";

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

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Toolbar className={classes.Toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
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
          <img className="Logo_menu" src={Logo} alt="Logo" />
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon fontSize="large" />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button component={Link} to="/display">
            <ListItemIcon>
              <HomeIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={onLogoutClick}>
            <ListItemIcon>
              <ExitToAppIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Sign-out" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <SettingsBrightnessIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="Dark Mode" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <AccountTreeIcon fontSize="large" />
            </ListItemIcon>
            <ListItemText primary="TODO" />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(
  connect(mapStateToProps, { logoutUser })(withRouter(HamburgerMenu))
);
