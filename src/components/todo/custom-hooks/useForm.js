import { useState } from 'react';

const useForm = (callback) => {

    const [item, setItem] = useState({});

    const handleSubmit = (e) => {
        //e.persist();
        e.preventDefault();
        e.target.reset();

        const newItem = {};
        setItem(newItem);
        callback(item);
    }

    const handleChange = (e) => {
        e.persist();
        setItem({ ...item, [e.target.name]: e.target.value });
    }

    return [
        handleChange,
        handleSubmit,
        item
    ]
}

export default useForm;