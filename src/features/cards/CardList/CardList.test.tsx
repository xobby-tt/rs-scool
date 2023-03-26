import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import { CARDS } from '../../../mocks/cards.mock';
import CardList from './CardList';

describe('CardList', () => {
  test('Should have cards', () => {
    render(<CardList cards={CARDS}></CardList>);
    expect(screen.getAllByRole('heading')).toHaveLength(CARDS.length);
  });
});
