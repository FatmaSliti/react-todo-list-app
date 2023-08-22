import React, { useState } from 'react';
import TodoForm from './TodoForm';

function Todo() {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    })
    
    return (
    <div>Todo</div>
    )
}

export default Todo

