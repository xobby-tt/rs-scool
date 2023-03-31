import { describe, test } from 'vitest';
import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import CardForm from './CardForm';

describe('CardForm', () => {
  test('Should show header', () => {
    const createCard = () => {};

    render(<CardForm createCard={createCard}></CardForm>);

    expect(screen.queryByTestId('submit')).toBeDefined();
  });
});
