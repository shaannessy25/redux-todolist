import React from 'react'
import { useSelector } from 'react-redux'

function TodoStats(props){
    const todos = useSelector((state) => {
        return state.todos
    })

    const complete = todos.reduce((acc, todo) => {
        return todo.completed ? acc + 1 : acc
    }, 0)

    const active = todos.reduce((acc, todo) => {
        return !todo.completed ? acc + 1 : acc
    }, 0)
    return (
        <div>
            <small>Count: {todos.length}</small>
            <small>Complete: {complete}</small>
            <small>Active: {active}</small>
        </div>
    )
}
export default TodoStats
