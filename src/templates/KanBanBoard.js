import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Column from './Column';

import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(0, 1fr))", /* Equal width columns */
        gap: "10px"
    }
})
const KanBanBoard = () => {
    const classes = useStyles();

    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`https://64c1fab4fa35860baea1054d.mockapi.io/roles/add-task`)
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => {
                setError(error.response?.data?.detail);
            });
    }, []);

    const handleDelete = (taskId) => {
        axios.delete(`https://64c1fab4fa35860baea1054d.mockapi.io/roles/add-task/${taskId}`)
            .then(response => {
                setTasks(tasks.filter(task => task.id !== taskId));
            })
            .catch(error => {
                setError(error.response?.data?.detail);
            });
    };

    const handleDragStart = (event, taskId) => {
        event.dataTransfer.setData('text/plain', taskId);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };
    const handleDrop = async (event, targetColumn) => {
        const draggedTaskId = event.dataTransfer.getData('text/plain');
        const updatedTasks = tasks.map(task => {
            if (task.id === draggedTaskId) {
                return { ...task, column: targetColumn };
            }
            return task;
        });
    
        setTasks(updatedTasks);
    
        // Update task's column on the server
        try {
            await axios.put(`https://64c1fab4fa35860baea1054d.mockapi.io/roles/add-task/${draggedTaskId}`, {
                column: targetColumn
            });
        } catch (error) {
            setError(error.response?.data?.detail);
        }
    };
    

    return (
        <div className={classes.root}>
            <Column
                columnName="TO DO"
                columnKey="todo"
                tasks={tasks.filter(task => task.column === 'todo')}
                handleDelete={handleDelete}
                handleDragStart={handleDragStart}
                handleDragOver={handleDragOver}
                handleDrop={handleDrop}
            />
            <Column
                columnName="IN PROGRESS"
                columnKey="inProgress"
                tasks={tasks.filter(task => task.column === 'inProgress')}
                handleDelete={handleDelete}
                handleDragStart={handleDragStart}
                handleDragOver={handleDragOver}
                handleDrop={handleDrop}
            />
            <Column
                columnName="DONE"
                columnKey="done"
                tasks={tasks.filter(task => task.column === 'done')}
                handleDelete={handleDelete}
                handleDragStart={handleDragStart}
                handleDragOver={handleDragOver}
                handleDrop={handleDrop}
            />
        </div>
    );
};

export default KanBanBoard;
