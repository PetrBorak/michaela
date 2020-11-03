import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import type { State } from '../../store/reducers';
import { actionCreators } from '../../store/reducers';
import { Header } from '../../components/Header/Header'

export interface Props {
  testState: any;
  testDispatch: any
}

export const Shell = ({ testState, testDispatch} : Props) => {
  console.log('Shell called');
  console.log('Shell called testState', testState);
  console.log('Shell called testState', testDispatch);
  useEffect(() => {
    testDispatch(1)
  }, [])
  return (
    <>
      <Header />
      <div>THIS IS SHELL</div>
    </>
  )
}

const mapStateToProps = (state: State) => ({
  testState: state.page
})

const mapDispatchToProps = {
  testDispatch: actionCreators.page.getPage
}

export default connect(mapStateToProps, mapDispatchToProps)(Shell)
