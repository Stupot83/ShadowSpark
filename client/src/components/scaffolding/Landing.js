import React from "react";
import "../../Landing.scss";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Logo from "../../../src/logo.png";

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
        <div className={classes.root}>
            <Container className="Landing_container">
                <Grid container spacing={3}>
                    <Grid className={classes.titleGrid} item xs={12}>
                        <h1>ShadowSpark UI</h1>
                    </Grid>
                    <Grid className={classes.subTitleGrid} item xs={12}>
                        <h4>Keeping Work Simples...</h4>
                    </Grid>
                    <Grid className={classes.imageGrid} item xs={12}>
                        <img className="Logo" src={Logo} alt="Logo" />
                    </Grid>
                    <Grid className={classes.buttonGrid} item xs={6}>
                        <Box className="Button_box" variant="outlined" xs={6}>
                            <Link className="Button_link" to="/register">
                                Register
                            </Link>
                        </Box>
                    </Grid>
                    <Grid className={classes.buttonGrid} item xs={6}>
                        <Box className="Button_box" variant="outlined" xs={6}>
                            <Link className="Button_link" to="/login">
                                Login
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
