import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import LED from "./LED";

const LEDControl = () => {

    const leds = useSelector((state) => state.leds)
    const dispatch = useDispatch()

    return (
        <>
            <p>LEDControl</p>
            {leds.map(led => {
                return <LED
                    key={led.id}
                    id={led.id}
                    state={led.state}
                    dispatch={dispatch}
                />
            })}
        </>
    )
}

export default LEDControl