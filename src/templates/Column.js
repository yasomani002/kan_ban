// Column.js
import React from 'react';
import { makeStyles } from '@mui/styles';
import TaskItem from './TaskItem';

const useStyles = makeStyles({
    root: {
        border: '5px solid #ccc',
        borderRadius: '5px',
        padding: '10px',
        marginRight: '10px',
        minHeight: "90vh",
    },
    columnHeader: {
        marginBottom: '10px',
        textAlign: 'center'
    }
});

const Column = ({ columnName, columnKey, tasks, handleDelete, handleDrop, handleDragStart, handleDragOver }) => {
    const classes = useStyles();
    return (
        <div className={classes.root} onDrop={(e) => handleDrop(e, columnKey)} onDragOver={handleDragOver}>
            <h2 className={classes.columnHeader}>{columnName}</h2>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    handleDelete={handleDelete}
                    handleDragStart={handleDragStart}
                />
            ))}
        </div>
    );
};

export default Column;
