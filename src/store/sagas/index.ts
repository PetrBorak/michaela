import { call, takeLatest, all } from 'redux-saga/effects'
import { Api } from '../../api/types'
import { api } from '../../api/api'
import { actions } from '../reducers'
import { Action } from '../types/redux-types'

//main sagas
import { page } from './main/page'

const allSagas = {
  page
}

export function* createApiDependentSagas(api: Api) {
  const watch = (action: string, saga: (...args: any[]) => any, customApi: Api) =>
    takeLatest(action, saga, customApi || api)

  yield all([
    // 1) App
    watch(actions.page.GET_PAGE_ACTION, allSagas.page, api),
    ])
}

export default function* rootSaga() {
  // SET SAGA WATCHERS
  yield call(createApiDependentSagas, api)
}
