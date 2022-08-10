import { render, screen } from '@testing-library/react';
import PageNotFound from './notFound';

describe('PageNotFound Component', () => {
    it('should render PageNotFound component', () => {
        render(<PageNotFound />);
        expect(screen.getByText(/404/)).toBeInTheDocument();
    });
})

