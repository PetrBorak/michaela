import styled from 'styled-components';

export const PreloaderBackgroundStyled = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.white};
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 6;
`

export const LogotypePreloaderStyled = styled('img')`
  height: 20%;
  width: 20%;
`
