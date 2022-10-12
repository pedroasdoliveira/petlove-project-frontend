import Login from "./index";
import "@testing-library/jest-dom";
import { fireEvent, render, renderHook, screen } from "@testing-library/react";

describe("Login page", () => {
  render(<Login />);

  it("Render tabs lists", () => {
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it("Confirmed informations in Register component", async () => {
    render(<Login />);

    const nameInput = screen.getByTestId('name-input');
    const emailInput = screen.getByTestId('email-input');
    const passwordInput = screen.getByTestId("password-input");
    const confirmedPasswordInput = screen.getByTestId('confirmedPassword-input');
    const checkboxInput = screen.getByTestId('checkbox-input');
    const buttonSubmit = screen.getByTestId('button-submit');
  
    fireEvent.change(nameInput, {target: {value: 'Pedro123'}});
    fireEvent.change(emailInput, {target: {value: 'pedroa@gmail.com'}});
    fireEvent.change(passwordInput, {target: {value: 'Px43568090*'}});
    fireEvent.change(confirmedPasswordInput, {target: {value: 'Px43568090*'}});
    fireEvent.click(checkboxInput);
    fireEvent.click(buttonSubmit);
    const tabLogin = screen.getByTestId('tab-login');

    expect(tabLogin).toHaveAttribute('tabindex', '0');
  });

  it('Confirmed value from register tab index', () => {
    render(<Login />);

    const tabRegister = screen.getByTestId('tab-register');
    fireEvent.click(tabRegister)

    expect(tabRegister).toHaveAttribute('tabindex', '0');
  })

  // it("Confirmed information's in Login component", () => {
  //   render(<Login />);

  //   const emailLogin = screen.getByTestId('email-login');
  //   const passwordLogin = screen.getByTestId('password-login');
  //   const buttoSubmit = screen.getByTestId('submit-login');

  //   fireEvent.change(emailLogin, {target: {value: 'pedroa@gmail.com'}});
  //   fireEvent.change(passwordLogin, {target: {value: 'Px43568090*'}});
  //   fireEvent.click(buttoSubmit);
  // });
})
