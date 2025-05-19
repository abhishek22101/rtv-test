import styled from 'styled-components';

export const DetailContainer = styled.div`
  padding: 2rem;
  background-color: #141414;
  min-height: 100vh;
  color: white;
`;

export const BackButton = styled.button`
  background: transparent;
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  margin-bottom: 2rem;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const MovieContent = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
  border-radius: 8px;
`;

export const MovieInfo = styled.div`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

export const PlayButton = styled.button`
  background: #e50914;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background: #f40612;
  }
`; 