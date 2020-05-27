import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutDev } from "../../actions/authenticationActions";
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
import "../../Navbar.scss";

const StyledMenu = withStyles({
    paper: {
        border: "1px solid #d3d4d5",
        marginTop: "8px",
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center",
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        "&:hover": {
            backgroundColor: theme.palette.action.hover,
            "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
                color: theme.palette.text.secondary,
            },
        },
    },
}))(MenuItem);

const Navbar = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const onLogoutClick = (e) => {
        e.preventDefault();
        props.logoutDev(props.history);
        window.location.href = "/";
    };

    const { email } = props.auth.dev;

    return (
        <AppBar position="static" className="Navbar">
            <Toolbar className="Toolbar">
                <Grid item xs={2}></Grid>
                <Grid className="Navbar_title_grid" item xs={5}>
                    <Typography variant="h6" className="Navbar_title" to="/" button component={Link} to="/home">ShadowSpark UI</Typography>{" "}
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
                        <StyledMenuItem button component={Link} to="/home">
                            <ListItemIcon>
                                <HomeIcon fontSize="large" />
                            </ListItemIcon>
                            <ListItemText
                                primary="Home"
                            />
                        </StyledMenuItem>
                        <StyledMenuItem>
                            <ListItemIcon>
                                <ExitToAppIcon fontSize="large" />
                            </ListItemIcon>
                            <ListItemText
                                primary="Sign-Out"
                                onClick={onLogoutClick}
                            />
                        </StyledMenuItem>
                    </StyledMenu>
                    <Typography className="Profile_email">{email}</Typography>{" "}
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logoutDev })(withRouter(Navbar));
