import Immutable from 'immutable'

import { initialState } from './model'
import type { ResponseSuccess } from './model'

import ReducerBuilder from '../../utils/reducerBuilder'
import { Action } from '../../types'

export const GET_HOME_PAGE_START = 'GET_HOME_PAGE_START'
export const GET_HOME_PAGE_ERROR = 'GET_HOME_PAGE_ERROR'
export const GET_HOME_PAGE_SUCCESS = 'GET_HOME_PAGE_SUCCESS'

export interface HomePageActionCreators {
  getHomePageStart: () => Action;
  getHomePageSuccess: (payload: ResponseSuccess) => Action;
  getHomePageError: (error: Error) => Action;
}

export const actions: HomePageActionCreators = {
  getHomePageStart: () => ({
    type: GET_HOME_PAGE_START,
    payload: {}
  }),
  getHomePageError: (err: Error) => ({
    type: GET_HOME_PAGE_ERROR,
    payload: {
      error: err.message
    }
  }),
  getHomePageSuccess: (payload: ResponseSuccess) => ({
    type: GET_HOME_PAGE_SUCCESS,
    payload
  })
}

const reducer = new ReducerBuilder(initialState)
  .add(actions.getHomePageError, (state, action) => Immutable.merge(state, action.payload))
  .add(actions.getHomePageSuccess, (state, action) => Immutable.merge(state, action.payload))
  .build()

export default reducer
