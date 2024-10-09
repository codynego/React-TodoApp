import { useState, useEffect } from 'react'
import './App.css'
import { TodoLists } from './components/TodoLists'
import { TodoAdd } from './components/TodoAdd'
import { Header } from './components/Header'

function App() {
  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)

  

  function handleEdit(todo) {
    handleDelete(todo.id)
    setTitle(todo.title)
  }

  function fetchData () {
    let localData = localStorage.getItem('todos')

    if (!localData) {
      return
    }
    localData = JSON.parse(localData).todos
    setTodos(localData)

  }

  function persistData(newItem) {
    localStorage.setItem('todos', JSON.stringify({todos: newItem}))
  }

  useEffect(() => {
    fetchData()
  }, [])




  return (
    <main>
      <div>
        <TodoAdd todos={todos} setTodos={setTodos} title={title} setTitle={setTitle} persistData={persistData}/>
        <TodoLists todos={todos} setTodos = {setTodos} title={title} setTitle={setTitle} persistData={persistData}/>
      </div>
    </main>
  )
}

export default App
