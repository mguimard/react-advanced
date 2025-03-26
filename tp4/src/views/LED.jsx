import { memo } from 'react'
import { toggleLED } from '../redux/store'

const LED = memo(({ id, state, dispatch }) => {
    return <p>#{id} <button onClick={() => dispatch(toggleLED({ id }))}>{state ? 'on' : 'off'}</button></p>
})

export default LED