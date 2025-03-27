import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import UserLED from "./UserLED";
import watchMediaImpl from '../polyfills/watch-media'

watchMediaImpl()

describe('Suite de tests du component UserLED', () => {

    it('should render the correct name of a UserLED', () => {
        render(<UserLED ledId="whatever" />)
        let element = screen.getByTestId('led_name')
        expect(element.textContent).toBe('whatever')
    })

    it('should be red if status is busy and state on', () => {
        render(<UserLED ledId="whatever" status="busy" state={true} />)
        let element = screen.getByTestId('led')
        expect(element.style.backgroundColor).toBe('red')
    })

    it('should be a null color if status is unknown and state on', () => {
        render(<UserLED ledId="whatever" status="unknown" state={true} />)
        let element = screen.getByTestId('led')
        expect(element.style.backgroundColor).toBe('')
    })
})