import { put } from 'redux-saga/effects';

import { Api } from '../../../api/types'
import { actionCreators } from '../../reducers'

export function* subnavigationTop(api: Api): any {
  try {
    const response = yield api.getSubnavigationTop();
    yield put(actionCreators.subnavigationTop.getSubnavigationSuccess(response))
  } catch(error){
    yield put(actionCreators.subnavigationTop.getSubnavigationError(error))
  }
}
