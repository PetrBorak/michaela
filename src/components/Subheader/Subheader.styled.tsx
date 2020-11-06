import styled from 'styled-components';

export const SubheaderStyled = styled('div')`
  width: 100%;
  height: 35px;
  background-color: ${(props) => props.theme.white};
  display: grid;
  grid-template-columns:  5% 90% 5%;
  align-items: center;
  border: 1px solid red;
  position: fixed;
  top: 0;
  z-index: 4;
    
    @media only screen and (min-width: ${(props) => props.theme.breakPointMiddle}){
     grid-template-columns:  10% 80% 10%;
  }
  
    @media only screen and (min-width: ${(props) => props.theme.breakPointMain}){
     display: block;
    }
`

export const SubheaderInnerStyled = styled('div')`
  display: grid;
  grid-template-columns: 1% 49% 50%;
  border: 1px solid red;
  grid-column-start: 2;
  grid-column-end: 3;
    
  @media only screen and (min-width: ${(props) => props.theme.breakPointMain}){
    grid-template-columns: 60% 20% 20%;
     width: ${(props) => props.theme.mainContainerWidth};
     margin: 5px auto 0;
  };
`

export const ConditionsContainer = styled('div')`
  grid-column-start: 1;
  grid-column-end: 2;
  display: none;
    
  @media only screen and (min-width: ${(props) => props.theme.breakPointMain}){
    display: block;
    grid-template-columns: 60% 20% 20%;
     width: ${(props) => props.theme.mainContainerWidth};
     margin: 5px auto 0;
  };
`

export const SocialIconsContainer = styled('div')`
  display: flex;
  grid-column-start: 2;
  grid-column-end: 3;
`

export const SocialIconsItem = styled('div')`
  flex-basis: 33%;
  flex-grow: 1;
  flex-shrink: 1;
`

export const BasketSearchIconsContainer = styled('div')`
  display: flex;
  justify-content: flex-end;
  grid-column-start: 3;
  grid-column-end: 4;
`

export const LoupeStyled = styled('img')`
  width: 20px;
  height: 20px;
`
