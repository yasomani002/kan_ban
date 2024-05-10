import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import Typo from '../components/Typo';
import Button from '../components/Button';
import DeletePopUp from './DeletePopUp';

const useStyles = makeStyles({
    root: {
        width: 'auto',
        height: '200px',
        backgroundColor: '#84b6ff',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        padding: '15px',
        cursor: 'pointer',
        marginBottom: '5px',
        borderRadius: '10px',
    },
    on_hold: {
        backgroundColor: '#d4eaff',
        color: '#000000'
    },
    in_progress: {
        backgroundColor: '#5489ff',
    },
    done: {
        backgroundColor: '#2d5cff',
    },
    deleteButton: {
        width: '100% !important'
    }
});

const TaskItem = ({ task, handleDelete, handleDragStart }) => {
    const classes = useStyles();
    const [openDeletePopUp, setOpenDeletePopUp] = useState(false)
    const handleDeleteTask = () => {
        setOpenDeletePopUp(!openDeletePopUp)
    }
    return (
        <>
            <div className={`${classes.root} ${classes[task.column]}`} draggable="true" onDragStart={(e) => handleDragStart(e, task.id)}>
                <div>
                    <Typo variant="lb01">{task.text}</Typo>
                </div>
                <div>
                    <Typo variant="lb02">{task.description}</Typo>
                </div>
                <div>
                    <Typo variant="lb02">Estimated hours : {task.hour}</Typo>
                </div>
                <div>
                    <Button className={classes.deleteButton} onClick={handleDeleteTask}>Delete</Button>
                </div>
            </div >
            {openDeletePopUp &&
                <DeletePopUp
                    task={task}
                    handleDelete={handleDelete}
                />
            }
        </>
    );
};

export default TaskItem;
