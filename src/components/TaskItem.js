// TaskItem.js
import React from 'react';
import { makeStyles } from '@mui/styles';
import Typo from './Typo';
import Button from './Butto';

const useStyles = makeStyles({
    root: {
        width: 'auto',
        height: '200px',
        backgroundColor: '#5F5D9C',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        padding: '15px',
        cursor: 'pointer', 
        marginBottom: '5px',
        borderRadius: '10px'
    }
});

const TaskItem = ({ task, handleDelete, handleDragStart }) => {
    const classes = useStyles();

    return (
        <div className={classes.root} draggable="true" onDragStart={(e) => handleDragStart(e, task.id)}>
            <Typo variant="os01">{task.text}</Typo>
            <p>{task.description}</p>
            <Button onClick={() => handleDelete(task.id)}>Delete</Button>
        </div>
    );
};

export default TaskItem;
