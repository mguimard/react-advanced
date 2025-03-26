import { memo } from 'react'
import { updateUserStatus } from '../redux/store'

const User = memo(({ ledId, name, status, dispatch }) => {

    return (
        <p>{name}
            <select value={status} onChange={(e) => dispatch(updateUserStatus({ id: ledId, status: e.target.value }))}>
                <option value="online">Online</option>
                <option value="absent">Absent</option>
                <option value="busy">Busy</option>
                <option value="offline">Offline</option>
            </select>
        </p>
    )
})

export default User