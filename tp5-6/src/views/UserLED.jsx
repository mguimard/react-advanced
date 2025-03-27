import { Avatar } from "antd";
import React, { memo } from "react";

const getLedColor = (status, state) => {

    if (!state) return 'black'

    switch (status) {
        case 'online': return 'green';
        case 'absent': return 'yellow';
        case 'busy': return 'red';
        case 'offline': return 'gray';
    }

    return 'chucknorris';
}

const UserLED = memo(({ ledId, status, state }) => {
    return (
        <Avatar data-testid="led" style={{ backgroundColor: getLedColor(status, state), verticalAlign: 'middle' }} size="large">
            <span data-testid="led_name">{ledId}</span>
        </Avatar>
    )
})

export default UserLED