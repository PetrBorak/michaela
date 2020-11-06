import styled from 'styled-components'

export default styled('img')`
  width: 100%;
`

export const JumbotronContainer = styled('div')`
  position: relative;
  width: 100%;
`

export const JumbotronMotto = styled('div')`
  display: none;
  word-wrap: break-word;
  width: 90%;
  z-index: 2;
  position: absolute;
  left: 8%;
  font-size: 20px;
  font-weight: 900;
  color: ${(props) => props.theme.contrastColor};
  top: 47%;
  
  @media only screen and (min-width: ${(props) => props.theme.breakPointSmall}){
    display: block;
  };  
  
  @media only screen and (min-width: ${(props) => props.theme.breakPointMiddle}){
   top: 30%;
   font-size: 40px;
   width: 75%;
  };  
  
  @media only screen and (min-width: ${(props) => props.theme.breakPoint700}){
  };
  
  @media only screen and (min-width: ${(props) => props.theme.breakPointMain}){
   width: 800px;
   font-size: 50px;
   top: 30%;
  };  
  
`

export const JumbotronMottoLine = styled('span')`
  padding-right: 8px;
  display: inline-block;
  word-wrap: no-wrap;
  background-color: ${(props) => props.theme.white}
`
