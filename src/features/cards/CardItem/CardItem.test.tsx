import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { describe, test } from 'vitest';
import CardItem from './CardItem';

const mockCardItem = {
  id: '1',
  name: 'Testing Card',
  description: 'Testing Description',
  imageUrl: 'https://i.pinimg.com/564x/cb/33/ff/cb33ff9638d6d1815900f798dbaf7fce.jpg',
};

describe('CardItem', () => {
  test('Should show title', () => {
    render(<CardItem card={mockCardItem}></CardItem>);
    expect(screen.getByRole('heading')).toHaveTextContent('Testing Card');
  });

  test('Should show description', () => {
    render(<CardItem card={mockCardItem}></CardItem>);
    expect(screen.getByText('Testing Description')).toBeDefined();
  });

  test('Should have image', () => {
    render(<CardItem card={mockCardItem}></CardItem>);
    expect(screen.getByRole('img')).toBeDefined();
  });
});
