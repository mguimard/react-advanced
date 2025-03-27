import { Avatar } from "antd";
import React, { memo } from "react";

const statusColorMap = {
    'online': 'green',
    'absent': 'yellow',
    'busy': 'red',
    'offline': 'gray'
}

const getLedColor = (status, state) => {
    if (!state) return 'black'
    return statusColorMap[status] || null;
}

const UserLED = memo(({ ledId, status, state }) => {
    return (
        <Avatar data-testid="led" style={{ backgroundColor: getLedColor(status, state), verticalAlign: 'middle' }} size="large">
            <span data-testid="led_name">{ledId}</span>
        </Avatar>
    )
})

export default UserLED