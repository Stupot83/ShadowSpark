import React from "react";
import "../../Landing.scss";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Logo from "../../../src/logo.png";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    titleGrid: {
        minHeight: "10vh",
        maxHeight: "10vh",
        textAlign: "center",
    },
    subTitleGrid: {
        minHeight: "10vh",
        maxHeight: "10vh",
        textAlign: "center",
    },
    imageGrid: {
        minHeight: "50vh",
        maxHeight: "50vh",
    },
    buttonGrid: {
        minHeight: "30vh",
        maxHeight: "30vh",
    },
}));

export default function Landing() {
    
    const classes = useStyles();

    return (
        <div className={classes.root, "root"}>
            <Container className="Landing_container">
                <Grid container spacing={3}>
                    <Grid className={classes.titleGrid} item xs={12}>
                        <h1 id="header">ShadowSpark UI</h1>
                    </Grid>
                    <Grid className={classes.subTitleGrid} item xs={12}>
                        <h4 id="subHeader">Keeping Work Simples...</h4>
                    </Grid>
                    <Grid className={classes.imageGrid} item xs={12}>
                        <img id="logo" className="Logo" src={Logo} alt="Logo" />
                    </Grid>
                    <Grid className={classes.buttonGrid} item xs={3}>
                        <Box className="Button_box" variant="outlined">
                        </Box>
                    </Grid>
                    <Grid className={classes.buttonGrid} item xs={3}>
                        <Box className="Button_box" variant="outlined">
                            <Button component={Link} id="register" className="Landing_button" variant="contained" size="large" color="secondary" to="/register">Register</Button>
                        </Box>
                    </Grid>
                    <Grid className={classes.buttonGrid} item xs={3}>
                        <Box className="Button_box" variant="outlined">
                            <Button component={Link} id="login" className="Landing_button" variant="contained" size="large" color="primary" to="/login">Login</Button>
                        </Box>
                    </Grid>
                    <Grid className={classes.buttonGrid} item xs={3}>
                        <Box className="Button_box" variant="outlined">
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
