import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Header Component', () => {
    it("should render header component correctly", () => {
        render(<Header title="Test Runner"/>) 
        expect(screen.getByText("Test Runner")).toBeInTheDocument();
    })
})

