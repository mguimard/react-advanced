import React from "react"
import useAuth from "../hooks/use-auth"

import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { Button } from 'antd';

const LoginButton = () => {

    const [isAuthed, login, logout] = useAuth()

    return (
        <>
            {isAuthed ?
                <Button onClick={logout} icon={<LogoutOutlined />}>
                    Logout
                </Button>
                :
                <Button onClick={login} icon={<LoginOutlined />}>
                    Login
                </Button>}
        </>
    )
}

export default LoginButton