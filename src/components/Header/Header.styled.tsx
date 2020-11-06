import styled from 'styled-components'

export const HeaderStyled = styled('div')`
  position: fixed;
  z-index: 3;
  top: 35px;
  width: 100%;
  display: grid;
  grid-template-columns:  5% 90% 5%;
  background-color: ${(props: any) => props.theme.mainBlack};
  color: ${(props: any) => props.theme.white};
  padding: 20px 0;
  text-align: center;
  
    @media only screen and (min-width: ${(props) => props.theme.breakPointMiddle}){
     grid-template-columns:  10% 80% 10%;
  }
  
    @media only screen and (min-width: ${(props) => props.theme.breakPointMain}){
     display: block;
     padding: 20px 0;
  }
  
`

export const HeaderInnerStyled = styled('div')`
  position: relative;
  border: 1px solid red;
  grid-column-start: 2;
  grid-column-end: 3;
  text-align: right;
  
  @media only screen and (min-width: ${(props) => props.theme.breakPointMain}){
     width: ${(props) => props.theme.mainContainerWidth};
     margin: 0 auto;
     display: inline-block;
  };
`
