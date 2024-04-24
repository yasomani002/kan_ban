import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import Button from './Button';
import Dialog from '@mui/material/Dialog';
import axios from 'axios';
import CustomTextFiled from './CustomTextFiled';

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
    const [formData, setFormData] = useState({ column: 'todo' });
    const [openDialog, setOpenDialog] = useState(true)

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value, 'val')
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
                window.location.reload();
            })
            .catch((error) => {

            });

    };
    return (
        <Dialog open={openDialog}>
            <div className={classes.root}>
                <form onSubmit={handleSubmit}>

                    <CustomTextFiled
                        label="Text"
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
                            {value : 'on_hold' , label: 'ON HOLD'},
                            {value : 'todo' , label: 'TO DO'},
                            {value : 'in_progress' , label: 'IN PROGRESS'},
                            {value : 'done' , label: 'DONE'},
                        ]}
                    />

                    <CustomTextFiled
                        label="Description :"
                        type="text"
                        name={"description"}
                        value={formData.description}
                        defaultValue={formData.description}
                        onChange={handleChange}
                    />


                    <div className={classes.dialog__footer}>
                        <Button
                            onClick={handleClose}
                        >Close</Button>
                        <Button
                            onClick={handleSubmit}
                        >Save</Button>
                    </div>
                </form>
            </div>
        </Dialog>
    )
}

export default CustomDialog