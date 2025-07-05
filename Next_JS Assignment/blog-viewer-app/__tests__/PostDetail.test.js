
import React from 'react';
import { render, screen } from '@testing-library/react';
import PostDetail from '../components/PostDetail';

const mockPost = {
  id: 1,
  title: 'Sample Post',
  content: 'Hello world',
};

test('renders post content only', () => {
  render(<PostDetail post={mockPost} />);
  
  // This will PASS because PostDetail only renders content
  expect(screen.getByText('Hello world')).toBeInTheDocument();
  
});
