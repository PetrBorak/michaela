import { put } from 'redux-saga/effects';

import { Api } from '../../../api/types'
import { actionCreators } from '../../reducers'

export function* homepage(api: Api): any {
  try {
    const response = yield api.getHomepage();
    yield put(actionCreators.homepage.getHomePageSuccess(response))
  } catch(error){
    yield put(actionCreators.homepage.getHomePageError(error))
  }
}
