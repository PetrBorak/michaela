import { call, takeLatest, all } from 'redux-saga/effects'
import { Api } from '../../api/types'
import { api } from '../../api/api'
import { actions } from '../reducers'

//main sagas
import { homepage } from './main/homepage'
import { navigation } from './main/navigation'
import { subnavigationTop } from './main/subnavigation-top'

const allSagas = {
  homepage,
  navigation,
  subnavigationTop
}

export function* createApiDependentSagas(api: Api) {
  const watch = (action: string, saga: (...args: any[]) => any, customApi: Api) =>
    takeLatest(action, saga, customApi || api)

  yield all([
    // 1) App
    watch(actions.subnavigationTop.GET_SUB_NAVIGATION_TOP_START, allSagas.subnavigationTop, api),
    watch(actions.navigation.GET_NAVIGATION_START, allSagas.navigation, api),
    watch(actions.homePage.GET_HOME_PAGE_START, allSagas.homepage, api),
    ])
}

export default function* rootSaga() {
  // SET SAGA WATCHERS
  yield call(createApiDependentSagas, api)
}
