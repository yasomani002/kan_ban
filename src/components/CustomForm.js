import React, { useState, forwardRef, useImperativeHandle } from 'react';

import CustomTextFiled from './CustomTextFiled';

const CustomForm = forwardRef(({ onSubmit , fieldData, idData}, ref) => {
    const [formData, setFormData] = useState(idData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e?.preventDefault();
        if (onSubmit) {
            onSubmit(formData); // Send form data to parent
        }
    };

    // Expose a function to submit the form from the parent component
    useImperativeHandle(ref, () => ({
        submitForm() {
            handleSubmit();
        }
    }));



    return (
        <form onSubmit={handleSubmit}>
            {fieldData?.map((item, index) => (
                <CustomTextFiled
                    key={index}
                    label={item.label}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={formData[item.id]}
                    onChange={handleChange}
                />
            ))}
            {/* The form will be submitted from the parent component */}
        </form>
    );
});

export default CustomForm;