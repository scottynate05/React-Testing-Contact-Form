import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ContactForm from "./ContactForm";
// import { act } from "react-dom/test-utils";
// import ReactDOM from 'react-dom';

test("renders form without any errors", () => {
    render(<ContactForm />)
})

test("if form elements exist", () => {
    const { getByText, getByTestId } = render(<ContactForm />)
    getByText(/first name/i);
    getByText(/last name/i);
    getByText(/email/i);
    getByText(/message/i);
    getByTestId("subButton");
})

test("submits form without any errors", () => {
    // let container;
    // act(() => {
    //     ReactDOM.render(<ContactForm />, container)
    // })
    const {getByTestId} = render(<ContactForm />)
    const firstName = getByTestId("firstName");
    const lastName = getByTestId("lastName");
    const email = getByTestId("email");
    const message = getByTestId("message");
    const subBut = getByTestId("subButton")
    expect(firstName.placeholder).toBe("First Name")
    expect(lastName.placeholder).toBe("Last Name")
    expect(email.placeholder).toBe("Email")

    const expectedFirstName = "Nate"
    const expectedLastName = "Brown"
    const expectedEmail = "email@email.com"

    fireEvent.change(firstName, { target: { value: 'Nate'}})
    fireEvent.change(lastName, { target: { value: 'Brown'}})
    fireEvent.change(email, { target: { value: 'email@email.com'}})
    fireEvent.change(message, { target: { value: 'Sickest text alive'}})
    // fireEvent.click(subBut)
    // act(() => {        
    //     button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
    // });
    
    expect(firstName.value).toBe(expectedFirstName)
    expect(lastName.value).toBe(expectedLastName)
    expect(email.value).toBe(expectedEmail)

})