import React from "react";

import "./App.css";
import SignIn from "./pages/SignIn";
import {Routes, Route, Link as RouterLink} from 'react-router-dom';
import Main from "./pages/Main";
import Button from "@material-ui/core/Button";
import {Block} from "@material-ui/icons";

import "./fonts/EuclidCircularA/stylesheet.css"
import {AppBar, Toolbar} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import classes from "prop-types/prop-types";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles";
import Navbar from "./Components/MainNavbar";
import LineBarAreaComposedChart from "./Components/Chart";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));
function App() {
    const classes = useStyles();
    return (
        <div className='App'>

            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                    </Typography>
                    <Button color="inherit" component={RouterLink} to='/singIn'>Login</Button>
                </Toolbar>
            </AppBar>


            <Routes>
                <Route path="/chart" element={<LineBarAreaComposedChart/>}/>
                <Route path="/clicks" element={<Main/>}/>
                <Route path="/singIn" element={<SignIn/>}/>

            </Routes>
        </div>
    )
}

export default App;
