import axios from 'axios';
import React, { useState } from 'react'

function AddTaskForm() {
    const [formData, setFormData] = useState({column: 'todo'});

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(value , 'val')
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('Form submitted:', formData);
        try {
            // make POST request using Axios
            await axios.post(`https://64c1fab4fa35860baea1054d.mockapi.io/roles/add-task`, formData);

            // handle successful response
            // if (response.status === 201) {
             // setIsLoading(false)
            // }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="lastName">text:</label>
                    <input
                        type="text"
                        name={"text"}
                        value={formData.text}
                        defaultValue={formData.text}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">column:</label>
                    <select id="column" name="column" value={formData?.column} onChange={handleChange} >
                        <option value="todo" >todo</option>
                        <option value="inProgress" >inProgress</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default AddTaskForm