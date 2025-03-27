import React from "react";
import { useSelector } from 'react-redux';
import UserLED from "./UserLED";
import { Col, Flex, Row } from "antd";

const UserLEDState = () => {

    const users = useSelector((state) => state.users)
    const leds = useSelector((state) => state.leds)

    return (
        <>
            <p>UserLEDState</p>
            <div>
                <Row>
                    {users.map((user) =>
                        <Col
                            key={user.ledId}
                            xs={{ flex: '100%' }}
                            sm={{ flex: '50%' }}
                            md={{ flex: '40%' }}
                            lg={{ flex: '20%' }}
                            xl={{ flex: '10%' }}>
                            <UserLED
                                key={user.ledId}
                                ledId={user.ledId}
                                status={user.status}
                                state={leds[user.ledId].state} />
                        </Col>
                    )}
                </Row>


            </div>
        </>
    );
}

export default UserLEDState