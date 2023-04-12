import { MockedProvider } from '@apollo/client/testing';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { BrowserRouter, Outlet } from 'react-router-dom';
import { describe, test } from 'vitest';
import { CardsState } from './components/Cards';
import { CardPopupHost } from './components/Cards/CardPopup';
import { Header } from './components/Header/Header';
import { AlertHost } from './components/UI';
import { POKEMON_RESPONCES_MOCK } from './mocks';

describe('App', () => {
  test('Should show header', () => {
    render(
      <>
        <BrowserRouter>
          <Header></Header>
          <MockedProvider mocks={POKEMON_RESPONCES_MOCK}>
            <AlertHost>
              <CardPopupHost>
                <CardsState>
                  <Outlet />
                </CardsState>
              </CardPopupHost>
            </AlertHost>
          </MockedProvider>
        </BrowserRouter>
      </>
    );
    expect(screen.getByRole('banner')).toBeDefined();
  });
});
