import React, { memo } from "react";

const getLedColor = (status, state) => {

    if (!state) return 'black'

    switch (status) {
        case 'online': return 'green';
        case 'absent': return 'yellow';
        case 'busy': return 'red';
        case 'offline': return 'gray';
    }
}

const UserLED = memo(({ status, state }) => {
    return (
        <span
            style={{ backgroundColor: getLedColor(status, state) }}>
            --
        </span>
    )
})

export default UserLED