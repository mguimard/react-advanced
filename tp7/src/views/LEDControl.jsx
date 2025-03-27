import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import LED from "./LED";
import { Flex } from "antd";

const LEDControl = () => {

    const leds = useSelector((state) => state.leds)
    const dispatch = useDispatch()

    return (
        <>
            <p>LEDControl</p>
            <Flex align="center" gap="middle" vertical={true} justify="space-between">

                {leds.map(led => {
                    return <LED
                        key={led.id}
                        id={led.id}
                        state={led.state}
                        dispatch={dispatch}
                    />
                })}
            </Flex>
        </>
    )
}

export default LEDControl