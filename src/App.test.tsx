import { describe, test } from 'vitest';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { BrowserRouter, Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { CardPopupHost } from './components/Cards/CardPopup';
import { AlertHost } from './components/UI';
import { MockedProvider } from '@apollo/client/testing';
import { CardsState } from './components/Cards';
import { POKEMON_RESPONCES_MOCK } from './mocks';

describe('App', () => {
  test('Should show header', () => {
    render(
      <MockedProvider mocks={POKEMON_RESPONCES_MOCK}>
        <CardsState></CardsState>
      </MockedProvider>
    );
    expect(screen.getByRole('banner')).toBeDefined();
  });
});
