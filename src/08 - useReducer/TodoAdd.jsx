import React, { useState } from 'react'

const TodoAdd = ({onNewTodo}) => {

    const [todo, setTodo] = useState({
        description: '',
    });

    const handleChange = (e) => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(todo.description.length < 1) return null;
        let newTodo = {
            id: new Date().getTime() * 3,
            description: todo.description,
            done: false
        }
        onNewTodo(newTodo);
        setTodo({description: ''})
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <input 
                type="text" 
                placeholder="¿Qué hay que hacer?"
                name='description'
                value={todo.description}
                className="form-control"
                onChange={handleChange}
            />

            <button 
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    )
}

export default TodoAdd