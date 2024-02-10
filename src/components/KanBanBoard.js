// import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@mui/styles';
// import axios from 'axios';

// const useStyles = makeStyles({
//     root: {
//         width: '150px',
//         height: '50px',
//         backgroundColor: 'blue',
//         color: '#fff',
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         cursor: 'pointer', // Add cursor pointer for better UX
//         marginBottom: '5px' // Add margin bottom for spacing between tasks
//     }
// });
// const KanBanBoard = () => {
//     const classes = useStyles();
//     const [error, setError] = useState()
//     const [response, setResponse] = useState()
//     const [isLoading, setIsLoading] = useState(true)
//     const [tasks, setTasks] = useState(null);

//     const [newTask, setNewTask] = useState([
//         {
//           "createdAt": "2024-02-08T20:51:50.653Z",
//           "name": "Saul Schowalter",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/658.jpg",
//           "id": "1",
//           "text": "eee"
//         },
//         {
//           "createdAt": "2024-02-08T23:24:16.604Z",
//           "name": "Erik Boyer",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/401.jpg",
//           "id": "2",
//           "text": "eee",
//           "column": "todo"
//         },
//         {
//           "createdAt": "2024-02-08T16:49:48.100Z",
//           "name": "Georgia Murray",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/741.jpg",
//           "id": "3",
//           "text": "eee",
//           "column": "todo"
//         },
//         {
//           "createdAt": "2024-02-09T06:53:25.658Z",
//           "name": "Cedric Bauch Jr.",
//           "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/387.jpg",
//           "id": "4",
//           "text": "eee",
//           "column": "todo"
//         }
//       ])

//     useEffect(() => {
//         axios.get(`https://64c1fab4fa35860baea1054d.mockapi.io/roles/add-task`)
//             .then((response) => {
//                 setResponse(response?.data);
//                 setIsLoading(false); // Set loading to false when data is fetched
//             })
//             .catch((error) => {
//                 setError(error?.response?.data?.detail);
//                 setIsLoading(false); // Set loading to false even if there's an error
//             });
//     }, []);
//     useEffect(() => {
//         if (response) {
//             setTasks(response); // Set tasks to response data
//         }
//     }, [response]);

//     console.log(response, 'res')

//     const handleDragStart = (event, id) => {
//         event.dataTransfer.setData('text/plain', id);
//     };

//     const handleDrop = (event, column) => {
//         const taskId = event.dataTransfer.getData('text/plain');
//         const updatedTasks = tasks?.map((task) => {
//             if (task.id === parseInt(taskId, 10)) {
//                 return { ...task, column };
//             }
//             return task;
//         });
//         setTasks(updatedTasks);
//     };
//     console.log(tasks, 'task')
//     return (
//         <>
//             {isLoading && <p>Load</p>}
//             <div style={{ display: 'flex' }}>
//                 <div
//                     style={{ border: '1px solid #ccc', padding: '10px', marginRight: '10px' }}
//                     onDrop={(e) => handleDrop(e, 'todo')}
//                     onDragOver={(e) => e.preventDefault()}
//                 >
//                     <h2>Todo</h2>
//                     {newTask
//                         ?.filter((task) => task.column === 'todo')
//                         .map((task) => (
//                             <div
//                                 key={task.id}
//                                 draggable
//                                 className={classes.root}

//                                 onDragStart={(e) => handleDragStart(e, task.id)}
//                                 style={{ border: '1px solid #ddd', padding: '8px', marginBottom: '8px' }}
//                             >
//                                 {task.text}
//                             </div>
//                         ))}
//                 </div>

//                 <div
//                     style={{ border: '1px solid #ccc', padding: '10px' }}
//                     onDrop={(e) => handleDrop(e, 'inProgress')}
//                     onDragOver={(e) => e.preventDefault()}
//                 >
//                     <h2>In Progress</h2>
//                     {newTask
//                         ?.filter((task) => task.column === 'inProgress')
//                         .map((task) => (
//                             <div
//                                 key={task.id}
//                                 draggable
//                                 className={classes.root}

//                                 onDragStart={(e) => handleDragStart(e, task.id)}
//                                 style={{ border: '1px solid #ddd', padding: '8px', marginBottom: '8px' }}
//                             >
//                                 {task.text}
//                             </div>
//                         ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default KanBanBoard;

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import axios from 'axios';

const useStyles = makeStyles({
    root: {
        width: '150px',
        height: '50px',
        backgroundColor: 'blue',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer', // Add cursor pointer for better UX
        marginBottom: '5px' // Add margin bottom for spacing between tasks
    }
});
const KanBanBoard = () => {
    const classes = useStyles();
    const [response, setResponse] = useState()
    const [error, setError] = useState()


    const handleDragStart = (event, id) => {
        event.dataTransfer.setData('text/plain', id);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = async (event, column) => {
        const draggedId = event.dataTransfer.getData('text/plain');
        const updatedTasks02 = response.map(task => {
            if (task.id === draggedId) {
                var updatedTask = {
                    id: task.id,
                    text: task.text,
                    column: column
                }
                axios.put(`https://64c1fab4fa35860baea1054d.mockapi.io/roles/add-task/${draggedId}`, updatedTask);
                return updatedTask
            }
            return task;
        });

        setResponse(updatedTasks02)
    };

    /// dynamic 
    useEffect(() => {
        axios.get(`https://64c1fab4fa35860baea1054d.mockapi.io/roles/add-task`)
            .then((response) => {
                setResponse(response?.data);
            })
            .catch((error) => {
                setError(error?.response?.data?.detail);
            });
    }, []);

    return (
        <div style={{ display: 'flex' }}>
            <div
                style={{ border: '1px solid #ccc', padding: '10px', marginRight: '10px' }}
                onDrop={(e) => handleDrop(e, 'todo')}
                onDragOver={handleDragOver}
            >
                <h2>To Do</h2>
                {response?.filter(task => task.column === 'todo').map(task => (
                    <div
                        key={task.id}
                        className={classes.root}
                        draggable="true"
                        onDragStart={(e) => handleDragStart(e, task.id)}
                    >
                        <p>{task.text}</p>
                    </div>
                ))}
            </div>

            <div
                style={{ border: '1px solid #ccc', padding: '10px', marginRight: '10px' }}
                onDrop={(e) => handleDrop(e, 'inProgress')}
                onDragOver={handleDragOver}
            >
                <h2>In Progress</h2>
                {response?.filter(task => task.column === 'inProgress').map(task => (
                    <div
                        key={task.id}
                        className={classes.root}
                        draggable="true"
                        onDragStart={(e) => handleDragStart(e, task.id)}
                    >
                        <p>{task.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KanBanBoard;
