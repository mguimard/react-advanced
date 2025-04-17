import { useCallback, useState } from "react";
import './ItemToRemove.css';

export default function ItemToRemove({ removeHandler }) {
    const [className, setClassName] = useState('');

    const clickHandler = useCallback(() => {
        console.log('button was clicked')
        setClassName('my-fade');
    }, [])

    return (
        <>
            <p className={className} onTransitionEnd={removeHandler}>I will fade and remove</p>
            <button onClick={clickHandler}>Click me to trigger a fade animation</button>
        </>
    )
}