import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import { PIKACHU_MOCK } from '../../../mocks';
import { CardItem } from './CardItem';

describe('CardItem', () => {
  test('Should show title', () => {
    render(<CardItem card={PIKACHU_MOCK}></CardItem>);
    expect(screen.getByRole('heading')).toHaveTextContent(PIKACHU_MOCK.key);
  });

  test('Should show description', () => {
    render(<CardItem card={PIKACHU_MOCK}></CardItem>);
    expect(screen.getByText(PIKACHU_MOCK.color)).toBeDefined();
  });

  test('Should have image', () => {
    render(<CardItem card={PIKACHU_MOCK}></CardItem>);
    expect(screen.getByRole('img')).toBeDefined();
  });
});
