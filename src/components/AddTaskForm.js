import axios from 'axios';
import React, { useState } from 'react'

function AddTaskForm() {
    const [formData, setFormData] = useState({ column: 'todo' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value, 'val')
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post(`https://64c1fab4fa35860baea1054d.mockapi.io/roles/add-task`, formData)
            .then((response) => {
                window.location.reload();
            })
            .catch((error) => {
                
            });

    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="lastName">text : </label>
                    <input
                        type="text"
                        name={"text"}
                        value={formData.text}
                        defaultValue={formData.text}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">column : </label>
                    <select id="column" name="column" value={formData?.column} onChange={handleChange} >
                        <option value="todo" >todo</option>
                        <option value="inProgress" >inProgress</option>
                        <option value="done" >Done</option>
                    </select>
                </div>
                <div>
                    <label>Description : </label>
                    <input
                        type="text"
                        name={"description"}
                        value={formData.description}
                        defaultValue={formData.description}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default AddTaskForm