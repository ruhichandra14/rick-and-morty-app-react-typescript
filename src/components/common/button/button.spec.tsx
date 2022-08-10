import { render, screen } from '@testing-library/react';
import Button from './button';

describe('Button Component', () => {
    const buttonProps = {
        name: "Start",
        onClickHandler: jest.fn(),
        isDisabled: false
    }

    it('should render button component', () => {
        render(<Button {...buttonProps} />);
        const btnElem = screen.getByText("Start");
        expect(btnElem).toBeInTheDocument();
    });
})

