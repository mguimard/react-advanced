
export const Todo = ({ completed, title, onChange }) => {
    console.log('Todo component', completed, title)
    return (
        <p>
            <input type="checkbox" checked={completed} onChange={onChange} /> {title}
        </p>
    )
}