import React from "react";
import { useSelector } from 'react-redux';
import UserLED from "./UserLED";

const UserLEDState = () => {

    const users = useSelector((state) => state.users)
    const leds = useSelector((state) => state.leds)

    return (
        <>
            <p>UserLEDState</p>
            <div>
                {users.map((user) =>
                    <UserLED
                        key={user.ledId}
                        status={user.status}
                        state={leds[user.ledId].state} />
                )}
            </div>
        </>
    );
}

export default UserLEDState