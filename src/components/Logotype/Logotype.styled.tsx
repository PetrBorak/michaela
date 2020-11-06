import styled from 'styled-components'

export const Logotype = styled('img')<{shrink: boolean}>`
  height: 60px;
  width: 60px;
  
  @media only screen and (min-width: ${(props) => props.theme.breakPointMain}){
    width: 100px;
    height: 100px;
    
        @keyframes shrink {
    from {
              width: 100px;
             height: 100px;
    }
    to {
      height: 60px;
      width: 60px;
    }
  }
    
  @keyframes expand {
    from {
          height: 60px;
      width: 60px;
    }
    to {
              width: 100px;
             height: 100px;
    }
  }
 
  ${(props) => props.shrink && 'animation-name: shrink'};
  ${(props) => !props.shrink && 'animation-name: expand'};
  animation-duration: 0.4s;
  animation-fill-mode: forwards;
};
`
