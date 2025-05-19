import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import MovieList from '../MovieList.jsx'; // Explicitly import .jsx

const mockMovies = [
  {
    id: '1',
    title: 'Test Movie 1',
    images: {
      artwork: 'test-image-1.jpg',
      artwork_webp: 'test-image-1.webp',
      standard_artwork: 'test-standard-1.jpg',
      landscape_cover_art: 'test-landscape-1.jpg',
      snapshot: 'test-snapshot-1.jpg',
      snapshot_webp: 'test-snapshot-1.webp',
    },
    type: 'movies',
    numerical_id: 1,
    short_plot: 'Test plot 1',
    year: 2021,
    duration: 120,
    label: 'Test',
  },
  {
    id: '2',
    title: 'Test Movie 2',
    images: {
      artwork: 'test-image-2.jpg',
      artwork_webp: 'test-image-2.webp',
      standard_artwork: 'test-standard-2.jpg',
      landscape_cover_art: 'test-landscape-2.jpg',
      snapshot: 'test-snapshot-2.jpg',
      snapshot_webp: 'test-snapshot-2.webp',
    },
    type: 'movies',
    numerical_id: 2,
    short_plot: 'Test plot 2',
    year: 2022,
    duration: 130,
    label: 'Test',
  },
];

describe('MovieList', () => {
  const renderComponent = () => {
    return render(
      <BrowserRouter>
        <MovieList title="Test List" movies={mockMovies} />
      </BrowserRouter>
    );
  };

  it('renders the list title', () => {
    renderComponent();
    expect(screen.getByText('Test List')).toBeInTheDocument();
  });

  it('renders all movies', () => {
    renderComponent();
    mockMovies.forEach(movie => {
      const image = screen.getByRole('img', { name: movie.title });
      expect(image).toBeInTheDocument();
    });
  });
}); 