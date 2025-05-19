import React from 'react';
import { LoaderContainer, LoaderImage } from './Loader.styles';
import loaderImage from '../../assets/loader.png';

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderImage src={loaderImage} alt="Loading..." />
    </LoaderContainer>
  );
};

export default Loader; 