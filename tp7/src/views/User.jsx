import { memo } from 'react'
import { updateUserStatus } from '../redux/store'
import useAuth from '../hooks/use-auth'
import { Flex, Select } from 'antd';

const User = memo(({ ledId, name, status, dispatch }) => {

    const [isAuthed] = useAuth()

    return (
        <Flex align="center" gap="small" vertical={false} justify="flex-end">
            <span>{name}</span>
            {
                isAuthed ?
                    <Select
                        defaultValue={status}
                        style={{ width: 100 }}
                        onChange={(value) => dispatch(updateUserStatus({ id: ledId, status: value }))}
                        options={[
                            { value: 'online', label: 'online' },
                            { value: 'absent', label: 'absent' },
                            { value: 'busy', label: 'busy' },
                            { value: 'offline', label: 'offline' },
                        ]}
                    /> :
                    <span>{status}</span>
            }
        </Flex>
    )
})

export default User