import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutDev } from "../../actions/authenticationActions";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "../../Navbar.scss";

class Navbar extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();

        this.setState({ showMenu: true }, () => {
            document.addEventListener("click", this.closeMenu);
        });
    }

    closeMenu(event) {
        if (!this.dropdownMenu.contains(event.target)) {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener("click", this.closeMenu);
            });
        }
    }

    onLogoutClick = (e) => {
        e.preventDefault();
        this.props.logoutDev(this.props.history);
        window.location.href = "/";
    };

    render() {
        const { email } = this.props.auth.dev;

        return (
            <AppBar
                position="static"
                className="Navbar"
                ref={(node) => (this.node = node)}
            >
                <Toolbar className="Toolbar">
                    <Grid item xs={2}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    </Grid>
                    <Grid item xs={5}>
                        <Link className="Navbar_title" to="/">
                            <Typography variant="h6">ShadowSpark UI</Typography>{" "}
                        </Link>
                    </Grid>
                    <Grid className="Profile"item xs={5}>
                    <Typography className="Profile_email">{email}</Typography>{" "}
                    <Button onClick={this.showMenu}>
                        <AccountCircle className="AccountCircle" fontSize="large" />
                    </Button>
                    {this.state.showMenu ? (
                        <div
                            className="dropdown"
                            ref={(element) => {
                                this.dropdownMenu = element;
                            }}
                        >
                            <Button className="dropdown_button" variant="outlined" color="primary">
                                {" "}
                                <Link to="/home">Home</Link>{" "}
                            </Button>
                            <Button className="dropdown_button" variant="outlined" color="primary" onClick={this.onLogoutClick}>
                                Sign-Out
                            </Button>
                        </div>
                    ) : null}
                    </Grid>
                </Toolbar>
            </AppBar>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
});

export default connect(mapStateToProps, { logoutDev })(withRouter(Navbar));
