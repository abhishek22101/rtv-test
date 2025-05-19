import styled from 'styled-components';

export const VideoPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: #000;
  display: flex;
  flex-direction: column;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: 1px solid white;
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 10;
  transition: background-color 0.2s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`; 