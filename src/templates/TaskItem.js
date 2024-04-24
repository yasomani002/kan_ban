import React from 'react';
import { makeStyles } from '@mui/styles';
import Typo from '../components/Typo';
import Button from '../components/Button';

const useStyles = makeStyles({
    root: {
        width: 'auto',
        height: '200px',
        backgroundColor: '#84b6ff',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        padding: '15px',
        cursor: 'pointer',
        marginBottom: '5px',
        borderRadius: '10px',
        position: 'relative'
    },
    on_hold: {
        backgroundColor: '#d4eaff',
    },
    in_progress: {
        backgroundColor: '#5489ff',
    },
    done: {
        backgroundColor: '#2d5cff',
    },
    deleteButton: {
        // marginTop: 'auto', // Push the button to the bottom
        // position: 'absolute', // Add this for absolute positioning
        // bottom: '15px', // Adjust as needed
        // left: '15px', // Adjust as needed,
        justifyItems: 'end'
    },
});

const TaskItem = ({ task, handleDelete, handleDragStart }) => {
    const classes = useStyles();
    return (
        <div className={`${classes.root} ${classes[task.column]}`} draggable="true" onDragStart={(e) => handleDragStart(e, task.id)}>
            <Typo variant="lb01">{task.text}</Typo>
            <Typo variant="lb02">{task.description}</Typo>
            <Button className={classes.deleteButton} onClick={() => handleDelete(task.id)}>Delete</Button>
        </div>
    );
};

export default TaskItem;
