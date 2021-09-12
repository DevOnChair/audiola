import React from "react";
import { IconButton, Input, InputBase, makeStyles, Paper, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Divider from '@material-ui/core/Divider';
import PublishIcon from '@material-ui/icons/Publish';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const Homepage = () => {
    const classes = useStyles();
    return <div style={{ display: 'flex', flexDirection: 'column', width: '100vw', height: '100vh', alignItems: 'center' }}>
        <div style={{ height: '12rem' }}></div>
        <h1 style={{ fontFamily: "'Noto Sans JP', sans-serif", fontWeight: 'bold' }}>Audiola</h1>
        <Paper component="form" className={classes.root}>

            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Search Audiola"

            />

            <Divider className={classes.divider} orientation="vertical" />
            <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                <PublishIcon />
            </IconButton>
        </Paper>

    </div >;
}

export default Homepage;