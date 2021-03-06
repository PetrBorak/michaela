import { combineReducers } from 'redux'

import HomePageReducer, {
  actions as HomePageActions,
  GET_HOME_PAGE_SUCCESS,
  GET_HOME_PAGE_ERROR,
  GET_HOME_PAGE_START
} from './homepage/homepage'

import NavigationReducer, {
  actions as NavigationActions,
  GET_NAVIGATION_SUCCESS,
  GET_NAVIGATION_ERROR,
  GET_NAVIGATION_START
} from './navigation/navigation'

import SubnavigationTopReducer, {
  actions as SubnavigationTopActions,
  GET_SUB_NAVIGATION_TOP_SUCCESS,
  GET_SUB_NAVIGATION_TOP_ERROR,
  GET_SUB_NAVIGATION_TOP_START
} from './subnavigation-top/subnavigation-top'

import RequestCounterReducer, {
  actions as RequestCounterActions,
  PWA_DECREMENT_PENDING_REQUESTS_COUNTER,
  PWA_INCREMENT_PENDING_REQUESTS_COUNTER,
} from './PWA/requestCounter'

export const actionCreators = {
  requestCounter: RequestCounterActions,
  homepage: HomePageActions,
  navigation: NavigationActions,
  subnavigationTop: SubnavigationTopActions
}

export const actions = {
  requestCounter: {
    PWA_DECREMENT_PENDING_REQUESTS_COUNTER,
    PWA_INCREMENT_PENDING_REQUESTS_COUNTER
  },
  homePage: {
    GET_HOME_PAGE_SUCCESS,
    GET_HOME_PAGE_ERROR,
    GET_HOME_PAGE_START
  },
  navigation: {
    GET_NAVIGATION_SUCCESS,
    GET_NAVIGATION_ERROR,
    GET_NAVIGATION_START
  },
  subnavigationTop: {
    GET_SUB_NAVIGATION_TOP_SUCCESS,
    GET_SUB_NAVIGATION_TOP_ERROR,
    GET_SUB_NAVIGATION_TOP_START
  }
}

export const reducers = combineReducers(
  {
    requestCounter: RequestCounterReducer,
    homepage: HomePageReducer,
    navigation: NavigationReducer,
    subnavigationTop: SubnavigationTopReducer
  }
)

export type { State } from './state';
