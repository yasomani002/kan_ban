import React, { useState } from 'react'
// import { makeStyles } from '@mui/styles';
import Typo from '../components/Typo';
import CustomDialog from '../components/CustomDialog';

// const useStyles = makeStyles({ });
function DeletePopUp({ task, handleDelete }) {
    // const classes = useStyles()
    const [openDialog, setOpenDialog] = useState(true)

    const handleCancelButtonClick = (e) => {
        e.preventDefault();
        setOpenDialog(false)
    }

    const handleDeleteTask = () => {
        handleDelete(task.id)
        setOpenDialog(false)
    }
    const title = `Delete Task ...`
    return (
        <>
            <CustomDialog
                title={title}
                openDialog={openDialog}
                handleCloseDialog={handleCancelButtonClick}
                handleOnSubmit={handleDeleteTask}
                buttonText={'Delete'}
            >
                <Typo variant='lb01'>Are you sure you want to delete {task.text} ?</Typo>
            </CustomDialog>
        </>
    )
}

export default DeletePopUp