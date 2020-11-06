import Immutable from 'immutable'

import { initialState } from './model'
import type { ResponseSuccess } from './model'

import ReducerBuilder from '../../utils/reducerBuilder'
import { Action } from '../../types'

export const GET_NAVIGATION_START = 'GET_NAVIGATION_START'
export const GET_NAVIGATION_ERROR = 'GET_NAVIGATION_ERROR'
export const GET_NAVIGATION_SUCCESS = 'GET_NAVIGATION_SUCCESS'

export interface NavigationActionCreators {
  getNavigationStart: () => Action;
  getNavigationSuccess: (payload: ResponseSuccess) => Action;
  getNavigationError: (error: Error) => Action;
}

export const actions: NavigationActionCreators = {
  getNavigationStart: () => ({
    type: GET_NAVIGATION_START,
    payload: {}
  }),
  getNavigationError: (err: Error) => ({
    type: GET_NAVIGATION_ERROR,
    payload: {
      error: err.message
    }
  }),
  getNavigationSuccess: (payload: ResponseSuccess) => ({
    type: GET_NAVIGATION_SUCCESS,
    payload
  })
}

const reducer = new ReducerBuilder(initialState)
  .add(actions.getNavigationError, (state, action) => Immutable.merge(state, action.payload))
  .add(actions.getNavigationSuccess, (state, action) => Immutable.merge(state, (action.payload)))
  .build()

export default reducer
