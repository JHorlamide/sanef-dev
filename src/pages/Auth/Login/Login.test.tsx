import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login";

const MockLoginComponent = () => {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
};

describe("The Login component", () => {
  it("should render the Login component correctly", () => {
    render(<MockLoginComponent />);

    const loginComponent = screen.getByText(/sign into an existing account/i);
    expect(loginComponent).toBeInTheDocument();
  });

  it("should render inputs field correctly", () => {
    render(<MockLoginComponent />);

    const emailInput = screen.getByTestId("emailInput");
    const passwordInput = screen.getByTestId("passwordInput");

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("should be able to type in the input field", async () => {
    const emailInputValue = "user@gmail.com";
    const passwordInputValue = "pass@1234";

    render(<MockLoginComponent />);

    const emailInput = screen.getByTestId(
      "emailInput"
    ) as unknown as HTMLInputElement;

    const passwordInput = screen.getByTestId(
      "passwordInput"
    ) as unknown as HTMLInputElement;

    fireEvent.change(emailInput, {
      target: { value: emailInputValue }
    });

    fireEvent.change(passwordInput, {
      target: { value: passwordInputValue }
    });

    expect(emailInput.value).toBe(emailInputValue);
    expect(passwordInput.value).toBe(passwordInputValue);
  });

  it("Should be able to click on the login button", () => {
    render(<MockLoginComponent />);

    const buttonElement = screen.getByRole("button", { name: "Login" });
    fireEvent.click(buttonElement);
    expect(buttonElement).toBeInTheDocument();
  });

  // it("Should login when the login button is pressed", () => {
  //   const mockSignIn = jest.fn(() => Promise.resolve());

  //   render(
  //     <MemoryRouter>
  //       <Login />
  //     </MemoryRouter>
  //   );

  //   const inputElement = screen.getByTestId("email-input");
  //   const buttonElement = screen.getByRole("button", { name: "Login" });

  //   // eslint-disable-next-line testing-library/no-unnecessary-act
  //   act(() => {
  //     fireEvent.change(inputElement, { target: { value: "user@gmail.com" } });
  //   });

  //   // eslint-disable-next-line testing-library/no-unnecessary-act
  //   act(() => {
  //     fireEvent.submit(buttonElement);
  //   });

  //   fireEvent.change(inputElement, {
  //     target: { value: "user@gmail.com" }
  //   });

  //   expect(mockSignIn).toHaveBeenCalled();
  // });
});
