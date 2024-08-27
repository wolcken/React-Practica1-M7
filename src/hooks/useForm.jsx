import { useState } from "react";

const useForm = (initialValues) => {
    const [values, setValue] = useState(initialValues);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValue({
            ...values,
            [name]: value,
        });
    }

    const setValues = (newValues) => {
        setValue(newValues);
    }

    return [values, handleChange, setValues];
}

export default useForm;

