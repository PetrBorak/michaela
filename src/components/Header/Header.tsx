import React from 'react';

import { HeaderStyled, HeaderInnerStyled } from "./Header.styled";
import { Link } from '../Link/Link';
import {LogotypeContainer} from "../LogotypeContainer/LogotypeContainer";

export interface Props {
  navigation: {
    [x: string]: any
  }
}

export const Header  = (props: Props) => (
  <HeaderStyled>
    <HeaderInnerStyled>
      <LogotypeContainer />
      {<Link white fromRight uppercase name={'Homepage'} path={'homepage'} />}
      {props.navigation.navigation.Navigation.Link.map((link: any) => <Link white fromRight uppercase path={link.page.path} name={link.Name} />)}
    </HeaderInnerStyled>
  </HeaderStyled>
)
