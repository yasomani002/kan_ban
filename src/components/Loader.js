import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    spinner: {
        width: '11.2px',
        height: '11.2px',
        borderRadius: '11.2px',
        boxShadow: '28px 0px 0 0 rgba(71,75,255,0.2), 22.7px 16.5px 0 0 rgba(71,75,255,0.4), 8.68px 26.6px 0 0 rgba(71,75,255,0.6), -8.68px 26.6px 0 0 rgba(71,75,255,0.8), -22.7px 16.5px 0 0 #474bff',
        animation: '$spinnerAnimation 1s infinite linear',

        position: 'absolute',
        top: '50%',
        right: '50%'
    },
    '@keyframes spinnerAnimation': {
        to: {
            transform: 'rotate(360deg)',
        },
    },
});

const Spinner = () => {
    const classes = useStyles();
    return <div className={classes.spinner}></div>;
};

export default Spinner;