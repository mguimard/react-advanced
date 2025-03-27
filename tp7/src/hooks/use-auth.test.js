import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";
import useAuth from "../hooks/use-auth";
import { AuthContext } from "../contexts";
import { useState } from "react";
import { act } from 'react'

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve({ test: 100 }),
}));

const wrapper = (isAuthed) => ({ children }) => {
    let [auth, setAuth] = useState({ isAuthed });

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>)
}

const spyNextFetchAndReturn = (data) => {
    jest.spyOn(global, "fetch").mockImplementation(
        jest.fn(() => Promise.resolve({
            json: () => Promise.resolve(data)
        }))
    );
}

describe('Suite de tests du hook useAuth', () => {
    it('should set isAuthed to true when calling the login function', async () => {
        let renderedHook = renderHook(useAuth, { wrapper: wrapper(false) })
        let [isAuthed, login,] = renderedHook.result.current
        expect(isAuthed).toBe(false)
        spyNextFetchAndReturn({ token: "ABCDEF" })
        await act(async () => { await login() });
        let [newIsAuthed] = renderedHook.result.current
        expect(newIsAuthed).toBe(true)
    })

    it('should set isAuthed to false when calling the logout function', async () => {
        let renderedHook = renderHook(useAuth, { wrapper: wrapper(true) })
        let [isAuthed, , logout] = renderedHook.result.current
        expect(isAuthed).toBe(true)
        spyNextFetchAndReturn({ success: true })
        await act(async () => { await logout() });
        let [newIsAuthed] = renderedHook.result.current
        expect(newIsAuthed).toBe(false)
    })
})