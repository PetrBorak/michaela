import styled from 'styled-components';

export const LogotypeContainerStyled = styled('div')<{shrink: boolean}>`
  display: flex;
  align-items: flex-end;
  z-index: 5;
  background-color: ${(props) => props.theme.white};
  height: 60px;
  width: 60px;
  position: absolute;
  left: 0px;
  top: -20px;
  
  @media only screen and (min-width: ${(props) => props.theme.breakPointMain}){
    @keyframes shrinkLogoContainer {
    from {
          height: 165px;
          width: 98px;
    }
    to {
      height: 60px;
      width: 60px;
    }
  }
    
  @keyframes expandLogoContainer {
    from {
          height: 60px;
      width: 60px;
    }
    to {
          height: 165px;
          width: 98px;
    }
  }
 
  ${(props) => props.shrink && 'animation-name: shrinkLogoContainer'};
  ${(props) => !props.shrink && 'animation-name: expandLogoContainer'};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
  
    height: 165px;
    width: 98px;
  };
`
