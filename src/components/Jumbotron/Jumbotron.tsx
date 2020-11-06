import React from 'react';
import JumbotronStyled, { JumbotronContainer, JumbotronMotto, JumbotronMottoLine } from './Jumbotron.styled';

export interface Props {
  img: string,
  motto: string
}

export const Jumbotron = ({ img, motto }: Props ) => {
  return(
    <JumbotronContainer>
      {motto && <JumbotronMotto>
        {motto.split(/\s/).map((word: string) => <JumbotronMottoLine>{`${word} `}</JumbotronMottoLine>)}
      </JumbotronMotto>}
      <JumbotronStyled src={img}/>
    </JumbotronContainer>
  )
}
