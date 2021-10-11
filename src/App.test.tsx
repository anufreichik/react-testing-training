import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from "./App";

test('button has correct initial color', () => {
    render(<App/>);

    const colorButton = screen.getByRole('button', {name: 'Change to blue'});

    expect(colorButton).toHaveStyle({backgroundColor: 'red'});

    fireEvent.click(colorButton);

    expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
    expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {

    render(<App/>);
    const colorButton = screen.getByRole('button', {name: 'Change to blue'});
    const checkBox = screen.getByRole('checkbox');
    //check that the button starts out enabled
    expect(colorButton).toBeEnabled();
    //check that the checkbox start out unchecked
    expect(checkBox).not.toBeChecked();

})

test('button disabled/enabled on checkbox click',()=>{
    render(<App/>);
    const colorButton = screen.getByRole('button', {name: 'Change to blue'});
    const checkBox = screen.getByRole('checkbox', {name:'Disable button'});

    fireEvent.click(checkBox);

    expect(colorButton).toBeDisabled();

    fireEvent.click(checkBox);

    expect(colorButton).toBeEnabled();
})

test('button turns gray when disabled on initial',()=>{
    render(<App/>);
    const colorButton = screen.getByRole('button', {name:'Change to blue'});
    const checkBox = screen.getByRole('checkbox', {name:'Disable button'});

    fireEvent.click(checkBox);
    expect(colorButton).toHaveStyle({backgroundColor:"gray"});
    fireEvent.click(checkBox);
    expect(colorButton).toHaveStyle({backgroundColor:"red"});
})


test('button turns gray after clicking button and then clicking disable checkbox',()=>{
    render(<App/>);
    const colorButton = screen.getByRole('button', {name:'Change to blue'});
    const checkBox = screen.getByRole('checkbox', {name:'Disable button'});

    fireEvent.click(colorButton);
    fireEvent.click(checkBox);
    expect(colorButton).toHaveStyle({backgroundColor:"gray"});
    fireEvent.click(checkBox);
    expect(colorButton).toHaveStyle({backgroundColor:"blue"});
})

describe('spaces before camel-case capital letters',()=>{
    test('works for no inner capital letters', () => {
        expect(replaceCamelWithSpaces('Red')).toBe('Red');
    });
    test('works for one inner capital letter', () => {
        expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
    });

    test('works for multiple inner capital letters', () => {
        expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
    });

})
