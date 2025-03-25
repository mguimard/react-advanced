import React, { useCallback, useMemo, useState } from "react"
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

    const filteredList = useMemo(() => todos.filter((todo) => {
        console.log('filteredList')
        return filter === FilterState.ALL ||
            filter === FilterState.COMPLETED && todo.completed ||
            filter === FilterState.TODO && !todo.completed
    }), [todos, filter])

    const handleChange = useCallback((todoId, completed) => {
        setTodos((currentTodos) => {
            let copy = [...currentTodos]
            let todo = copy.find(t => t.id === todoId)
            todo.completed = completed
            return copy;
        })
    }, [])

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
                    return <Todo
                        key={todo.id}
                        todoId={todo.id}
                        completed={todo.completed}
                        title={todo.title}
                        onChange={handleChange} />
                })}
            </ul>
        </>
    )
}
