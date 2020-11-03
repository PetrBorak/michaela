import { combineReducers } from 'redux'

import PageReducer, { actions as PageActions, GET_PAGE_ACTION } from './page/page'

export const actionCreators = {
  page: PageActions
}

export const actions = {
  page: {
    GET_PAGE_ACTION
  }
}

export const reducers = combineReducers(
  {
    page: PageReducer
  }
)

export type { State } from './state';
