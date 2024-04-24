// Column.js
import React from 'react';
import { makeStyles } from '@mui/styles';
import TaskItem from './TaskItem';
import Typo from '../components/Typo';

const useStyles = makeStyles({
    root: {
        border: '2px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        marginRight: '10px',
        height: '90vh'
    },
    columnHeader: {
        width: '100%',
        height: '4%',
        margin: '10px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    taskList: {
        height: '92%',
        overflowY: 'scroll' 
    }
});

const Column = ({ columnName, columnKey, tasks, handleDelete, handleDrop, handleDragStart, handleDragOver }) => {
    const classes = useStyles();
    return (
        <div className={classes.root} onDrop={(e) => handleDrop(e, columnKey)} onDragOver={handleDragOver}>
            <Typo variant='ka01' className={classes.columnHeader}>{columnName}</Typo>
            <div className={classes.taskList}>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    handleDelete={handleDelete}
                    handleDragStart={handleDragStart}
                />
            ))}
            </div>
        </div>
    );
};

export default Column;
