import React from 'react';
import {
  SubheaderStyled,
  SubheaderInnerStyled,
  ConditionsContainer,
  SocialIconsContainer,
  SocialIconsItem,
  BasketSearchIconsContainer,
  LoupeStyled
} from "./Subheader.styled";
import { Link } from '../Link/Link';
import Loupe from '../../assets/loupe.png'

export interface Props {
  navigation: {
    [x: string]: any
  }
}
export const Subheader  = (props: Props) => (
  <SubheaderStyled>
    <SubheaderInnerStyled>
      <ConditionsContainer>
        {props.navigation.subnavigationTop.Link.map((link: any) => <Link color='contrast' path={link.page.path} name={link.Name} />)}
      </ConditionsContainer>
      <SocialIconsContainer>
        <SocialIconsItem>
          <svg fill="#e24289" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path fill="none" stroke="#e24289" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M25,4C13.402,4,4,13.402,4,25c0,10.528,7.756,19.222,17.861,20.74V30.566h-5.196v-5.52h5.196v-3.673c0-6.081,2.963-8.751,8.017-8.751c2.421,0,3.701,0.179,4.307,0.261v4.818h-3.447c-2.145,0-2.895,2.034-2.895,4.327v3.017h6.289l-0.853,5.52h-5.435v15.22C38.093,44.395,46,35.631,46,25C46,13.402,36.598,4,25,4z"/></svg>
        </SocialIconsItem>
        <SocialIconsItem>
          <svg fill="#e24289" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path fill="none" stroke="#e24289" stroke-miterlimit="10" stroke-width="2" d="M16,46h18c6.627,0,12-5.373,12-12V16c0-6.627-5.373-12-12-12H16C9.373,4,4,9.373,4,16v18C4,40.627,9.373,46,16,46z"/><path fill="none" stroke="#e24289" stroke-miterlimit="10" stroke-width="2" d="M25 15A10 10 0 1 0 25 35A10 10 0 1 0 25 15Z"/><path d="M37 11A2 2 0 1 0 37 15A2 2 0 1 0 37 11Z"/></svg>
        </SocialIconsItem>
        <SocialIconsItem>
          <svg fill="#e24289" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M24.4,11c7.2,0,13,0.6,15.8,1.1c1.5,0.4,2.7,1.4,2.9,2.7c0.6,3.2,1,6.6,1,10.1c-0.1,4.3-0.6,7.8-1,10.3c-0.3,1.9-2.3,2.5-2.9,2.7c-3.6,0.7-9.6,1.2-15.6,1.2s-12.1-0.4-15.6-1.2c-1.5-0.4-2.7-1.4-2.9-2.7C5.3,32.4,5,28.7,5,25c0-4.6,0.4-8,0.8-10.1c0.3-1.9,2.4-2.5,2.9-2.7C12,11.5,18.1,11,24.4,11 M24.4,9c-6.6,0-12.8,0.5-16.1,1.2c-2.2,0.5-4.1,2-4.5,4.3C3.4,16.9,3,20.5,3,25S3.4,33,3.9,35.5c0.4,2.2,2.3,3.8,4.5,4.3c3.5,0.7,9.5,1.2,16.1,1.2c6.6,0,12.6-0.5,16.1-1.2c2.2-0.5,4.1-2,4.5-4.3c0.4-2.5,0.9-6.1,1-10.6c0-4.5-0.5-8.1-1-10.6c-0.4-2.2-2.3-3.8-4.5-4.3C37.1,9.5,31,9,24.4,9L24.4,9z"/><path d="M21,20.4l8,4.6l-8,4.6V20.4 M19,17v16l14-8L19,17L19,17z"/></svg>
        </SocialIconsItem>
      </SocialIconsContainer>
      <BasketSearchIconsContainer>
        <LoupeStyled src={Loupe}/>
      </BasketSearchIconsContainer>
    </SubheaderInnerStyled>
  </SubheaderStyled>
)
