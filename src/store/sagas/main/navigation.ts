import { put } from 'redux-saga/effects';

import { Api } from '../../../api/types'
import { actionCreators } from '../../reducers'

export function* navigation(api: Api): any {
  try {
    const response = yield api.getNavigation();
    yield put(actionCreators.navigation.getNavigationSuccess(response));
    yield put(actionCreators.requestCounter.PWADecrementPendingRequestsCounter());
  } catch(error){
    yield put(actionCreators.navigation.getNavigationError(error))
  }
}
