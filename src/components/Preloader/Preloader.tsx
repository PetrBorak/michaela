import React from 'react';
import { PreloaderBackgroundStyled, LogotypePreloaderStyled } from './Preloader.styled';
import tooth from '../../assets/circle-test.svg';

export const Preloader = () => {
  return(
      <PreloaderBackgroundStyled>
        <LogotypePreloaderStyled src={tooth} />
      </PreloaderBackgroundStyled>
  )
}
