import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import type { State } from '../../store/reducers';
import { actionCreators } from '../../store/reducers';
import { Jumbotron } from "../../components/Jumbotron/Jumbotron";
import { Preloader } from '../../components/Preloader/Preloader';

import { ENDPOINT_CONFIG_ENDPOINT } from '../../config/api';

const publicUrl = process.env.PUBLIC_URL;

export interface Props {
  loaded: boolean;
  fetchNavigation: any;
  getHomepage: () => void,
  homepage: any;
  fetchSubnavigationTop: any
}

export const Homepage = ({
                           loaded,
                           getHomepage,
                           homepage,
                           fetchNavigation,
                           fetchSubnavigationTop
                         }: Props) => {

  useEffect(() => {
      fetchNavigation()
      fetchSubnavigationTop()
      getHomepage()
    }, [])

  return(
    <Preloader />
  )
}

// loaded ?
//   <Jumbotron motto={homepage.homepage.Jumbotron.Motto}
//              img={`${ENDPOINT_CONFIG_ENDPOINT}${homepage.homepage.Jumbotron.Image.url}`}
//   /> : <Preloader />

export const mapStateToProps = (state: State) => ({
  navigation: state.navigation,
  subNavigation: state.subnavigationTop,
  homepage: state.homepage,
  loaded: state.requestCounter.requestsPending === 0
})

export const mapDispatchToProps = {
  fetchNavigation: actionCreators.navigation.getNavigationStart,
  fetchSubnavigationTop: actionCreators.subnavigationTop.getSubnavigationStart,
  getHomepage: actionCreators.homepage.getHomePageStart
}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage)
