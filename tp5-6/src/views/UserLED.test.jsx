import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UserLED from "./UserLED";
import watchMediaImpl from '../polyfills/watch-media'

watchMediaImpl()

describe('Suite de tests du component UserLED', () => {

    it('should render a UserLED', () => {
        render(<UserLED ledId="whatever" />)
        let element = screen.getByTestId('led_name')
        expect(element.textContent).toBe('whatever')
    })

    it('should be red if status is busy and state on', () => {
        render(<UserLED ledId="whatever" status="busy" state={true} />)
        let element = screen.getByTestId('led')
        expect(element.style.backgroundColor).toBe('red')
    })

})