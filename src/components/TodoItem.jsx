import React from 'react'

export const TodoItem = ({todo, handleDelete, handleEdit}) => {
  return (
    <div className="todo-item">
        <li>{todo.title}</li>
        <div className="icons">
        <button onClick={() => {handleEdit(todo)}}>
        <i className="fa-solid fa-pen-to-square edit"></i>
        </button>
        <button onClick={() => {handleDelete(todo.id)}}>
            <i className="fa-solid fa-trash delete"></i>
        </button>
        </div>
    </div>
  )
}
