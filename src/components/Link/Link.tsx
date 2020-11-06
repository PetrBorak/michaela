import React from 'react'

import StyledLink  from './Link.styled';

export interface Props {
  color?: string;
  white?: boolean;
  underline?: boolean;
  fromRight?: boolean;
  uppercase?: boolean;
  name: string;
  path: string
}

export const Link = (props: Props) => (
  <StyledLink
    color={props.color}
    white={props.white}
    underline={props.underline}
    fromRight={props.fromRight}
    uppercase={props.uppercase}
    to={`/${props.path}`}>
    {props.name}
  </StyledLink>
)
