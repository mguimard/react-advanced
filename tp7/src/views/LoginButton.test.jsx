import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoginButton from "./LoginButton";
import watchMediaImpl from '../polyfills/watch-media'
import useAuth from "../hooks/use-auth";
import userEvent from "@testing-library/user-event";

watchMediaImpl()

jest.mock("../hooks/use-auth")

describe('Suite de tests du component LoginButton', () => {

    it('should render login button when isAuthed is false', () => {
        useAuth.mockReturnValue([false])
        render(<LoginButton />)
        let button = screen.getByTestId('the_button')
        expect(button.textContent).toBe('Login')
    })

    it('should render logout after a successful login', async () => {
        useAuth.mockReturnValue([true])
        render(<LoginButton />)
        let button = screen.getByTestId('the_button')
        expect(button.textContent).toBe('Logout')
    })

    it('should call login when clicking the login button', async () => {
        useAuth.mockReturnValue([
            false,
            function () { expect(true).toBe(true) },
            function () { fail('should not have called logout') }
        ])

        render(<LoginButton />)
        let button = screen.getByTestId('the_button')
        await userEvent.click(button)
    })

    it('should call logout when clicking the logout button', async () => {
        useAuth.mockReturnValue([
            true,
            function () { fail('should not have called login') },
            function () { expect(true).toBe(true) }
        ])

        render(<LoginButton />)
        let button = screen.getByTestId('the_button')
        await userEvent.click(button)
    })
})