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

    })

})