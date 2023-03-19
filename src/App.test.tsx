import { describe, test } from 'vitest';
import { screen } from '@testing-library/dom';
import App from './App';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  test('Should show header', () => {
    render(
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    );
    expect(screen.getByRole('banner')).toBeDefined();
  });
});
