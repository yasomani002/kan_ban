import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import Button from './Button';
import Dialog from '@mui/material/Dialog';
import axios from 'axios';
import CustomTextFiled from './CustomTextFiled';
import Snackbar from './SnackBar';
import { Slide } from '@mui/material';

const useStyles = makeStyles({
    root: {
        minHeight: '400px',
        height: '500px',
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
        width: '95%',
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
    const [formData, setFormData] = useState({ column: 'todo' });
    const [openDialog, setOpenDialog] = useState(true)
    const [error, setError] = useState(false)
    const [severity, setSeverity] = useState('')
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleClose = () => {
        setOpenDialog(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post(`https://64c1fab4fa35860baea1054d.mockapi.io/roles/add-task`, formData)
            .then((response) => {
                setError(true)
                setSeverity('success')
                window.location.reload();
            })
            .catch((error) => {
                setError(true)
                setSeverity('error')
            });
    };

    const handleCancelButtonClick = (e) => {
        e.preventDefault();
        handleClose();
    };

    return (
        <Dialog TransitionComponent={Slide} open={openDialog}>
            <div className={classes.root}>
                <form onSubmit={handleSubmit}>

                    <CustomTextFiled
                        required
                        label="Title"
                        type="text"
                        name={"text"}
                        value={formData.text}
                        defaultValue={formData.text}
                        onChange={handleChange}
                    />

                    <CustomTextFiled
                        select
                        label="Status :"
                        name={"column"}
                        value={formData?.column}
                        onChange={handleChange}
                        defaultValue={formData.column}
                        variant="outlined"
                        manuItem={[
                            { value: 'on_hold', label: 'ON HOLD' },
                            { value: 'todo', label: 'TO DO' },
                            { value: 'in_progress', label: 'IN PROGRESS' },
                            { value: 'done', label: 'DONE' },
                        ]}
                    />

                    <CustomTextFiled
                        required
                        label="Description :"
                        type="text"
                        name={"description"}
                        value={formData.description}
                        defaultValue={formData.description}
                        onChange={handleChange}
                    />

                    <CustomTextFiled
                        required
                        label="Hour"
                        type="number"
                        name={"hour"}
                        value={formData.hour}
                        defaultValue={formData.hour}
                        onChange={handleChange}
                    />

                    <div className={classes.dialog__footer}>
                        <Button
                            onClick={handleCancelButtonClick}
                        >Close</Button>
                        <Button type="submit">Save</Button>
                    </div>
                </form>
                {error &&
                    <Snackbar
                        message='Sucessfully.'
                        severity={severity}
                    />
                }
            </div>
        </Dialog>
    )
}

export default CustomDialog;
