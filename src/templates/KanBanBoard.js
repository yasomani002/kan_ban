import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Column from './Column';

import { makeStyles } from '@mui/styles';
import useDataFetch from '../custom-hooks/useDataFetch';
import Loader from '../components/Loader';
const useStyles = makeStyles({
    mainRoot: {
        width: '100vw',
        height: '100vh'
    },
    root: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(0, 1fr))",
        gap: "10px",
        marginTop: '1rem'
    },
    '@media (max-width: 1200px)': {
        root: {
            gridTemplateColumns: "1fr 1fr 1fr",
        }
    },
    '@media (max-width: 900px)': {
        root: {
            gridTemplateColumns: "1fr 1fr",
        }
    },
    '@media (max-width: 600px)': {
        root: {
            gridTemplateColumns: "1fr",
        }
    }
})
const KanBanBoard = () => {
    const classes = useStyles();

    const [tasks, setTasks] = useState([]);
    const { data, loading } = useDataFetch('https://64c1fab4fa35860baea1054d.mockapi.io/roles/add-task')
    useEffect(() => {
        if (data) {
            setTasks(data.data)
        }
    }, [data])
    const handleDelete = (taskId) => {
        axios.delete(`https://64c1fab4fa35860baea1054d.mockapi.io/roles/add-task/${taskId}`)
            .then(response => {
                setTasks(tasks.filter(task => task.id !== taskId));
            })
            .catch(error => {
                console.log(error.response?.data?.detail);
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
            console.log(error.response?.data?.detail);
        }
    };


    return (
        <>
            {loading ?
                <Loader />
                :
                <div className={classes.root}>
                    <Column
                        columnName="ON HOLD"
                        columnKey="on_hold"
                        tasks={tasks.filter(task => task.column === 'on_hold')}
                        handleDelete={handleDelete}
                        handleDragStart={handleDragStart}
                        handleDragOver={handleDragOver}
                        handleDrop={handleDrop}
                    />
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
                        columnKey="in_progress"
                        tasks={tasks.filter(task => task.column === 'in_progress')}
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
            }
        </>
    );
};

export default KanBanBoard;
