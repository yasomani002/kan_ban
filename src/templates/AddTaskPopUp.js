import React, { useState } from 'react'
// import { makeStyles } from '@mui/styles';
import axios from 'axios';
import CustomTextFiled from '../components/CustomTextFiled';
import CustomDialog from '../components/CustomDialog';

// const useStyles = makeStyles({})

function AddTaskPopUp() {
    // const classes = useStyles()
    const [formData, setFormData] = useState({ column: 'todo' });
    const [openDialog, setOpenDialog] = useState(true)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post(`https://64c1fab4fa35860baea1054d.mockapi.io/roles/add-task`, formData)
            .then((response) => {
                setOpenDialog(false)
                // window.location.reload();
            })
            .catch((error) => {
                console.log(error)
            });
    };

    const handleCancelButtonClick = (e) => {
        e.preventDefault();
        setOpenDialog(false)
    };
    const title = `Add New Task ... `

    return (
        <>
            <CustomDialog
                title={title}
                openDialog={openDialog}
                handleCloseDialog={handleCancelButtonClick}
                handleOnSubmit={handleSubmit}
                buttonText="Add"
            >
                <form>
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
                </form>
            </CustomDialog>
        </>
    )
}

export default AddTaskPopUp;
