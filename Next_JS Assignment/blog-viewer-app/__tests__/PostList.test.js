
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PostList from '../components/PostList';

const mockPosts = [
  { id: 1, title: 'First Post', content: 'Content of first post' },
  { id: 2, title: 'Second Post', content: 'Content of second post' },
];

test('renders post titles and toggles content on click', () => {
  render(<PostList posts={mockPosts} />);


  expect(screen.getByText('First Post')).toBeInTheDocument();
  expect(screen.getByText('Second Post')).toBeInTheDocument();

  
  expect(screen.queryByText('Content of first post')).not.toBeInTheDocument();

  
  const viewButtons = screen.getAllByRole('button');
  expect(viewButtons).toHaveLength(2);
  expect(viewButtons[0]).toHaveTextContent('View');

  fireEvent.click(viewButtons[0]);


  expect(screen.getByText('Content of first post')).toBeInTheDocument();

  
  fireEvent.click(viewButtons[0]);
  expect(screen.queryByText('Content of first post')).not.toBeInTheDocument();
});
