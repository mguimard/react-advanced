import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import User from "./User";

const UserStatus = () => {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()

    return (
        <>
            <p>UserStatus</p>
            {users.map(user => {
                return <User
                    key={user.ledId}
                    ledId={user.ledId}
                    status={user.status}
                    name={user.name}
                    dispatch={dispatch}
                />
            })}
        </>
    )

}

export default UserStatus