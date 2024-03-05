// TaskItem.js
import React from 'react';
import { makeStyles } from '@mui/styles';
import Typo from './Typo';

const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '200px',
        backgroundColor: '#5F5D9C',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
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
            <br />
            <p>{task.description}</p>
            <br />
            <button onClick={() => handleDelete(task.id)}>delete</button>
        </div>
    );
};

export default TaskItem;
