import { render, screen } from '@testing-library/react';
import Loading from './loading';

describe('Loader Component', () => {
    it('should render loading component', () => {
        render(<Loading />);
        expect(screen.getByText("Loading the contents...")).toBeInTheDocument();
    });
})

