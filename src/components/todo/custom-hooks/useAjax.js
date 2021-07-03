import { useState, useEffect } from 'react';

const axios = require('axios');

const useAjax = (apiUrl, method, body) => {

    const [list, setList] = useState([]);

    const addItem = (item) => {

        console.log('item',item);
        axios({
            method: 'post',
            url: apiUrl,
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(item)
        })
            .then(response => response.data)
            .then(savedItem => {
                setList([...list, savedItem])
            })
            .catch(console.error.message);
    };

    const toggleComplete = id => {

        const item = list.filter(i => i._id === id)[0] || {};

        if (item._id) {

            item.complete = !item.complete;

            let url = `${apiUrl}/${id}`;

            axios({
                url: url,
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                data: JSON.stringify(item)
            })
                .then(response => response.data)
                .then(savedItem => {
                    setList(list.map(listItem => listItem._id === item._id ? savedItem : listItem));
                })
                .catch(console.error);
        }
    };

    const deleteItem = id => {

        let item = list.filter(i => i._id === id)[0] || {};

        if (item._id) {

            let url = `${apiUrl}/${id}`;

            axios({
                url: url,
                method: 'delete',
            })
                .then(() => {
                    getTodoItems();
                })
                .catch(console.error);
        }
    };

    const getTodoItems = () => {
        axios({
            url: apiUrl,
            method: 'get',
        })
            .then(response => response.data)
            .then(data => {
                console.log('data', data);
                setList(data)
            })
            .catch(console.error);
    };

    useEffect(getTodoItems, []);

    useEffect(() => {
        let todoCount = list.filter(item => !item.complete).length;
        document.title = `To Do List: ${todoCount}`;
    })

    return [
        addItem,
        toggleComplete,
        deleteItem,
        list
    ]
}

export default useAjax;