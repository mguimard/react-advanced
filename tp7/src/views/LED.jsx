import { memo } from 'react'
import { toggleLED } from '../redux/store'
import useAuth from '../hooks/use-auth'
import { Switch } from 'antd'

const LED = memo(({ id, state, dispatch }) => {

    const [isAuthed] = useAuth()

    return (
        <div>
            <Switch
                checkedChildren={id} unCheckedChildren={id}
                defaultChecked={state}
                onChange={() => dispatch(toggleLED({ id }))}
                disabled={!isAuthed}
            />
        </div>)
})

export default LED