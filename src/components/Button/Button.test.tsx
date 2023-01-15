import { render, screen } from '@testing-library/react';
import Button from './Button';

test('Button is rendered', () => {
  render(<Button name="Add to cart" handleClick={() => {}} />);
  const button = screen.getByTestId('button');

  expect(button).toBeInTheDocument();
})

test('Button with price and text is rendered', () => {
  render(<Button name="Add to cart" handleClick={() => {}} price="20" />);
  const button = screen.getByTestId('button');

  expect(button).toBeInTheDocument();
  expect(button).toHaveTextContent("Add to cart");
  expect(button).toHaveTextContent("20");
})

test('Button of "secondary" type is rendered', () => {
  render(<Button name="Cancel" handleClick={() => {}} type="secondary" />);
  const button = screen.getByTestId('button');

  expect(button).toBeInTheDocument();
  expect(button).toHaveClass('secondary');
})