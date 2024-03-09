import React, { useState } from 'react'
import { Dialog } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Button from './Button';
import CustomForm from './CustomForm';


const useStyles = makeStyles({
    root: {
        minHeight: '400px',
        height: 'auto',
        width: '500px',
        padding: '10px'
    },
    dialog__header: {
        height: '10%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dialog__body: {
        height: '75%',
        width: '100%',
    },
    dialog__footer: {
        height: '15%',
        width: 'inherit',
        maxHeight: '100px',
        position: 'absolute',
        bottom: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

function CustomDialog() {
    const classes = useStyles()
    const [openDialog, setOpenDialog] = useState(true)
    const [formData, setFormData] = useState({});
    const handleClose = () => {
        setOpenDialog(false)
    }
    const handleSubmitButtonClick = () => {
        // Call the submitForm function from CustomForm
        customFormRef.current.submitForm();
    };

    const handleFormSubmit = (data) => {
        console.log('Form data received in parent:', data);
        setFormData(data);
    };

    const customFormRef = React.createRef();

    const idData = { foName: '', LoName: '', eOMail: '', pNumber: '' }
    const fieldData = [
        {
            id: 'foName',
            label: 'First Name:',
        },
        {
            id: 'LoName',
            label: 'Last Name:',
        },
        {
            id: 'eOMail',
            label: 'Email:',
        },
        {
            id: 'pNumber',
            label: 'phone number:',
        },
    ];
    return (
        <Dialog open={true}>
            <div className={classes.root}>
                <div className={classes.dialog__header}>
                    <h2>Add Task Form</h2>
                </div>
                <div className={classes.dialog__body}>
                    <CustomForm
                        ref={customFormRef}
                        onSubmit={handleFormSubmit}
                        fieldData={fieldData}
                        idData={idData}
                    />
                </div>
                <div className={classes.dialog__footer}>
                    <Button
                        onClick={handleClose}
                    >Close</Button>
                    <Button
                        onClick={handleSubmitButtonClick}
                    >Save</Button>
                </div>
            </div>
        </Dialog>
    )
}

export default CustomDialog