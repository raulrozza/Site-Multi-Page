import React from 'react';
import ReactLoading from 'react-loading';
import { LoadingContainer } from './styles';

const Loading: React.FC = () => (
  <LoadingContainer>
    <ReactLoading type="spin" color="var(--secondary)" />
  </LoadingContainer>
);

export default Loading;
