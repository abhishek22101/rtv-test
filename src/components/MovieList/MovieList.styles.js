import styled from 'styled-components';

export const ListContainer = styled.div`
  margin-bottom: 2rem;
  position: relative;
`;

export const ListTitle = styled.h2`
  color: #e50914;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
`;

export const MovieListContainer = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;
  padding: 1rem;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const MovieCard = styled.div`
  width: 200px;
  flex: 0 0 200px;
  background: #1f1f1f;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const MovieInfo = styled.div`
  padding: 1rem;
  color: white;
`;

export const MovieTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

