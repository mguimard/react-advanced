import { useCallback, useContext } from "react"
import { AuthContext } from "../contexts"

const useAuth = () => {

    const [{ isAuthed }, setAuth] = useContext(AuthContext)

    const login = useCallback(async () => {
        let response = await fetch('http://localhost:3001/login', {
            method: 'POST'
        })

        const data = await response.json()

        let { authToken: token } = data
        console.log('login data', data)

        setAuth({
            token,
            isAuthed: true
        })

        localStorage.token = token

    }, [setAuth])

    const logout = useCallback(async () => {
        let response = await fetch('http://localhost:3001/logout', {
            method: 'POST'
        })

        let data = await response.json()
        console.log('logout data', data)

        setAuth({
            token: null,
            isAuthed: false
        })

        delete localStorage.token

    }, [setAuth])

    return [isAuthed, login, logout]
}

export default useAuth