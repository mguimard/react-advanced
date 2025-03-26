import React from "react";
import { useDispatch } from "react-redux";
import { addPizza, mySlice, requestUsers } from "./store";

const EditComponent = () => {

    const dispatch = useDispatch()

    return (
        <>
            <p>Edit component</p>
            <button onClick={() => dispatch(addPizza('saumon'))}>Add pizza</button>
            <button onClick={() => dispatch(mySlice.actions.addUser('alice'))}>Add user</button>
            <button onClick={() => dispatch(requestUsers())}>Fetch users</button>
        </>
    )

}

export default EditComponent