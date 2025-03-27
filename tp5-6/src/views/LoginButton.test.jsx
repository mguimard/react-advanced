import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoginButton from "./LoginButton";
import watchMediaImpl from '../polyfills/watch-media'
import { AuthContext } from "../contexts";
import userEvent from "@testing-library/user-event";

watchMediaImpl()

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ test: 100 }),
    }),
);



describe('Suite de tests du component LoginButton', () => {

    it('should render login button on first render', () => {
        render(
            <AuthContext.Provider value={[{ isAuthed: false, token: null }, function () { }]}>
                <LoginButton />
            </AuthContext.Provider>
        )
        let button = screen.getByTestId('the_button')
        expect(button.textContent).toBe('Login')
    })

    it('should render logout after a successful login', async () => {

        let loggedIn = false;

        jest.mock("../hooks/use-auth", () => () => {
            return [true, function () { }, function () { }]
        });

        render(<LoginButton />)
        let button = screen.getByTestId('the_button')
        await userEvent.click(button)
        expect(button.textContent).toBe('Logout')
    })

})