import React from "react"
import { memo } from "react"


export const Todo = memo(({ todoId, completed, title, onChange }) => {
    console.log('Todo component', completed, title)
    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => onChange(todoId, !completed)} /> {title}
        </li>
    )
})