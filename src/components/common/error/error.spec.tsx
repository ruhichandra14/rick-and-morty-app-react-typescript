import { render, screen } from '@testing-library/react';
import Error from './error';

describe('Error Component', () => {
    it("should render error screen correctly", () => {
        render(<Error/>) 
        expect(screen.getByTestId("error")).toBeInTheDocument();
    })
})

