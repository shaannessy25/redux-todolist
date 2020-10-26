import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, completeTodo } from '../actions'
import './todo.css'
// import your complete todo action

function Todo(props) {
  const dispatch = useDispatch()
  const { name, completed, index, date } = props

  const completedClass = completed ? 'completed' : ''
  // Use a class to style the complete button

  return (
    <div className="todo">
      <h1 className="todo-name">{name}</h1>
      <small>{new Date(date).toLocaleDateString()}</small>
      <button 
        className={`${completedClass}`}
        onClick={() => {
          dispatch(deleteTodo(index))
        }}
        
      >✖︎</button>
      {/* Add a new button to mark a todo as complete */}
      <button
        onClick={() => {
          dispatch(completeTodo(index))
        }}
      >{completed ? 'Complete!' : 'Not Complete'}</button>
    </div>
  )
}

export default Todo
