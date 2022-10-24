import Homepage from ".";
import { render, screen } from '@testing-library/react';
import AsideMenu from "components/AsideMenu/AsideMenu";

describe('Homepage page', () => {
    beforeEach(() => {
        render(<Homepage />)
        render(<AsideMenu direction="row" />)
    })

    it('Should the dark mode when i click on the change mode button', () => {
        const toggleButton = screen.getByTestId('toggle-button');
        const cardColor = screen.getByTestId('card');
        expect(cardColor).toHaveStyle("background-color: linear-gradient(111.58deg, #3B49DA 21.73%, rgba(59, 73, 218, 0.49) 52.68%)")

    })

})