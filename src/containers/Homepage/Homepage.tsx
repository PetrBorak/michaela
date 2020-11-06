import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import type { State } from '../../store/reducers';
import { actionCreators } from '../../store/reducers';
import { Jumbotron } from "../../components/Jumbotron/Jumbotron";
import { ENDPOINT_CONFIG_ENDPOINT } from '../../config/api';

export interface Props {
  getHomepage: () => void,
  homepage: any
}

export const Homepage = ({ getHomepage, homepage }: Props) => {
  useEffect(() => {
    getHomepage();
  }, [getHomepage])
  return(
    <Jumbotron motto={homepage.homepage.Jumbotron.Motto}
               img={`${ENDPOINT_CONFIG_ENDPOINT}${homepage.homepage.Jumbotron.Image.url}`}/>
  )
}

export const mapStateToProps = (state: State) => ({
  homepage: state.homepage
})

export const mapDispatchToProps = {
  getHomepage: actionCreators.homepage.getHomePageStart
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
