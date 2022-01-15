import { render } from '@testing-library/react';
import App from 'App';
import { WIKI_ROUTE } from 'constants/routes';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';

const renderWithRouter = (ui: React.ReactElement, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: MemoryRouter });
};

describe('src/App', () => {
  it('should fully render App without crushing', () => {
    const { getByTestId } = renderWithRouter(<App />);
    getByTestId('app-test');
  });
});
