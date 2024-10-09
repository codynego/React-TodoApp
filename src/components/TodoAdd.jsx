import React from 'react'
import { useState } from 'react'


export const TodoAdd = ({todos,setTodos, title, setTitle, persistData}) => {

    const handleInput = (e) => {
        setTitle(e.target.value)
    }
    const handleAdd = () => {
        let newTodo = {
            id: todos.length,
            title: title,
        }
        setTodos([...todos, newTodo])
        persistData([...todos, newTodo])
        setTitle("")
    }
  return (
    <div className="add-todo">
        <input type="text"
            placeholder='enter your todo...'
            value={title}
            onChange={handleInput}
        />
        <button onClick={handleAdd}>Add</button>
    </div>

  )
}
