import React, { useCallback, useState } from "react";
import './Modal.css';

export default function Modal({ setIsOpen }) {

    let [classes, setClasses] = useState('modal-backdrop');

    let [removing, setRemoving] = useState(false);

    const handleCloseButton = useCallback(() => {
        setRemoving(true)
        setClasses('modal-backdrop removing')
    }, []);

    const handleAnimationEnd = useCallback(() => {
        console.log('Animation ended', removing)
        if (removing) {
            setIsOpen(false);
        }
    }, [setIsOpen, removing]);

    return (
        <>
            <div onAnimationEnd={handleAnimationEnd} className={classes} >
                <div className="modal">
                    <h2>Header</h2>
                    <p>Hello from modal</p>
                    <button onClick={handleCloseButton}>Close</button>
                </div>
            </div>
        </>
    )

}