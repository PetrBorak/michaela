import styled from 'styled-components'
import { Link } from 'react-router-dom';

export default styled(Link)<{
  color?: string,
  white?: boolean,
  uppercase?: boolean,
  fromRight?: boolean,
  underline?: boolean
}>`
  color: ${(props) => (props.color === 'contrast' ?  props.theme.contrastColor : props.theme.mainBlack)};
  font-size: ${(props) => props.theme.navigationalFontSize};
  ${(props) => (props.white && `color: ${props.theme.white}`)};
  ${(props) => (props.uppercase && 'text-transform: uppercase')};
  ${(props) => (props.fromRight && 'padding-left: 25px')};
  ${(props) => (!props.fromRight && 'padding-right: 25px')};
  ${(props) => (!props.underline && 'text-decoration: none')};
  
`
