import React, { useEffect } from 'react'
import { TodoItem } from './TodoItem'


export const TodoLists = ({todos, setTodos, setTitle, persistData}) => {
  function handleDelete (index) {
    const newTodo = todos.filter((todo, todoIndex) => {
      return  todo.id !== index
    })
    const nnewTodo = newTodo.map((todo, index) => ({...todo, id:index}))
    persistData(nnewTodo)
    setTodos(nnewTodo)
  }


  function handleEdit(todo) {
    handleDelete(todo.id)
    setTitle(todo.title)
  }

  return (
     <ul>
      {
        todos.map((todo, index) => (
          <TodoItem todo={todo} key={index} handleDelete={handleDelete} handleEdit={handleEdit}/>
        ))
      }
    </ul>
  )
}
