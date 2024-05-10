import React from 'react'
import { makeStyles } from '@mui/styles';
import { Dialog, Slide } from '@mui/material';
import Typo from './Typo';
import Button from './Button';

const useStyles = makeStyles({
    delete__popup__root: {
        minHeight: '250px',
        height: 'auto',
        width: '500px',
        padding: '20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column'
    },
    dialog__footer: {
        marginTop: 'auto', // Pushes the footer to the bottom
        display: 'flex',
        justifyContent: 'space-between', // Aligns buttons to the start and end of the footer
        gap: '10px' // Adds some space between the buttons
    }
});

function CustomDialog({
    title,
    openDialog,
    handleCloseDialog,
    handleOnSubmit,
    children,
    buttonText
}) {
    const classes = useStyles()
    return (
        <Dialog TransitionComponent={Slide} open={openDialog}>
            <div className={classes.delete__popup__root}>
                <Typo variant='ka01'>{title}</Typo>
                {children}
                <br />
                <div className={classes.dialog__footer}>
                    <Button onClick={handleCloseDialog}>Close</Button>
                    <Button onClick={handleOnSubmit}>{buttonText}</Button>
                </div>
            </div>
        </Dialog>
    )
}

export default CustomDialog