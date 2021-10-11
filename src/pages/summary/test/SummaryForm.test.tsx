import React from 'react';
import {render, screen, waitForElementToBeRemoved} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import SummaryForm from "../SummaryForm";

describe('testing checkbox', () => {
    test('Initial setup', () => {
        render(<SummaryForm/>);
        const checkBox = screen.getByRole('checkbox', {name: /terms and conditions/i,});

        expect(checkBox).not.toBeChecked();

        const confirmButton = screen.getByRole('button', {name: /confirm order/i},);

        expect(confirmButton).toBeDisabled();
    })

    test('checking checkbox enables button', () => {
        render(<SummaryForm/>);

        const checkBox = screen.getByRole('checkbox', {name: /terms and conditions/i,});
        const confirmButton = screen.getByRole('button', {name: /confirm order/i},);

        userEvent.click(checkBox);

        expect(confirmButton).toBeEnabled();

        userEvent.click(checkBox);

        expect(confirmButton).toBeDisabled();

    })

    test('popover responds to hover', async () => {
        render(<SummaryForm />);

        // popover starts out hidden
        const nullPopover = screen.queryByText(
            /no ice cream will actually be delivered/i
        );
        expect(nullPopover).not.toBeInTheDocument();

        // popover appears upon mouseover of checkbox label
        const termsAndConditions = screen.getByText(/terms and conditions/i);
        userEvent.hover(termsAndConditions);

        const popover = screen.getByText(/no ice cream will actually be delivered/i);
        expect(popover).toBeInTheDocument();

        // popover disappears when we mouse out
        userEvent.unhover(termsAndConditions);
        await waitForElementToBeRemoved(() =>
            screen.queryByText(/no ice cream will actually be delivered/i)
        );
    });

})