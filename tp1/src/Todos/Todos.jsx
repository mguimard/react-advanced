import React, { useState } from "react"
import { initialData } from "./data"
import { Todo } from "./Todo"

const FilterState = {
    ALL: 0,
    COMPLETED: 1,
    TODO: 2
}

export const Todos = () => {
    console.log('Todos component')
    const [todos, setTodos] = useState(initialData)
    const [filter, setFilter] = useState(FilterState.ALL)

    const filteredList = todos.filter((todo) => {
        console.log('filteredList')
        if (filter === FilterState.ALL) return true;
        return filter === FilterState.COMPLETED && todo.completed ||
            filter === FilterState.TODO && !todo.completed
    })

    const handleChange = (todo, e) => {
        console.log(e.target.checked)

        let copy = todos.map(t => {
            if (t === todo) {
                t.completed = e.target.checked
            }
            return t;
        })

        setTodos(copy)
    }

    const handleFilter = (filter) => {
        return () => setFilter(filter)
    }

    return (
        <>
            <button onClick={handleFilter(FilterState.ALL)}>All</button>
            <button onClick={handleFilter(FilterState.COMPLETED)}>Completed</button>
            <button onClick={handleFilter(FilterState.TODO)}>Todo</button>
            <ul>
                {filteredList.map((todo) => {
                    return <li key={todo.id}><Todo {...todo} onChange={(e) => handleChange(todo, e)} /></li>
                })}
            </ul>
        </>
    )
}
