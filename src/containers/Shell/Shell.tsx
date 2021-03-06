import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import {Redirect, Route, BrowserRouter as Router, Switch} from "react-router-dom";

import type { State } from '../../store/reducers';
import { actionCreators } from '../../store/reducers';
import { Header } from '../../components/Header/Header'
import { Subheader } from '../../components/Subheader/Subheader'
import { LogotypeContainer } from '../../components/LogotypeContainer/LogotypeContainer'
import Homepage  from '../../containers/Homepage/Homepage'

const publicUrl = process.env.PUBLIC_URL;

export interface Props {
  subNavigation: any;
  navigation: any;
}

export const Shell = ({ subNavigation,
                        navigation
} : Props) => {
  return (
    <>
      <Router>
        <Subheader navigation={subNavigation}/>
        <Header navigation={navigation}/>
        <Switch>
          <Route exact path={`${publicUrl}/homepage`} component={Homepage} />
          <Route exact path={`${publicUrl}/test`} component={() => <div> Not found </div>} />
          <Route path={`${publicUrl}/*`} render={() => <Redirect to={`${publicUrl}/test`} />} />
        </Switch>
      </Router>
    </>
  )
}

const mapStateToProps = (state: State) => ({
  navigation: state.navigation,
  subNavigation: state.subnavigationTop,
})

export default connect(mapStateToProps)(Shell)
