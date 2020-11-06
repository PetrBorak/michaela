import React, {useEffect, useState } from 'react';

import { Logotype as LogotypeStyled } from './Logotype.styled'
import Tooth from '../../assets/tooth.svg'

export interface Props {
  navigation: {
    [x: string]: any
  }
}

export const Logotype  = () => {
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
  }, [])
  return(<LogotypeStyled shrink={shrink} src={Tooth}/>
  )
}
