import React, { useEffect, useState } from 'react';

import { LogotypeContainerStyled } from './LogotypeContainer.styled';
import { Logotype } from '../Logotype/Logotype';

export const LogotypeContainer = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const listener = (evt: any) => {
      if(evt.currentTarget.scrollY > 0 && !shrink){
        setShrink(true)
      }
      if(evt.currentTarget.scrollY === 0 && !shrink){
        setShrink(false)
      }
    }
    window.addEventListener('scroll', listener);
    return () => window.removeEventListener('scroll', listener);
  }, []);

    return(
      <LogotypeContainerStyled shrink={shrink}>
        <Logotype/>
      </LogotypeContainerStyled>
      )
}
