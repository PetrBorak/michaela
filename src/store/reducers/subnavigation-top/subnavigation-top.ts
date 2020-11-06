import Immutable from 'immutable'

import { initialState } from './model'
import type { ResponseSuccess } from './model'

import ReducerBuilder from '../../utils/reducerBuilder'
import { Action } from '../../types'

export const GET_SUB_NAVIGATION_TOP_SUCCESS = 'GET_SUB_NAVIGATION_TOP_SUCCESS'
export const GET_SUB_NAVIGATION_TOP_ERROR = 'GET_SUB_NAVIGATION_TOP_ERROR'
export const GET_SUB_NAVIGATION_TOP_START = 'GET_SUB_NAVIGATION_TOP_START'

export interface NavigationActionCreators {
  getSubnavigationStart: () => Action;
  getSubnavigationSuccess: (payload: ResponseSuccess) => Action;
  getSubnavigationError: (error: Error) => Action;
}

export const actions: NavigationActionCreators = {
  getSubnavigationStart: () => ({
    type: GET_SUB_NAVIGATION_TOP_START,
    payload: {}
  }),
  getSubnavigationError: (err: Error) => ({
    type: GET_SUB_NAVIGATION_TOP_ERROR,
    payload: {
      error: err.message
    }
  }),
  getSubnavigationSuccess: (payload: ResponseSuccess) => ({
    type: GET_SUB_NAVIGATION_TOP_SUCCESS,
    payload
  })
}

const reducer = new ReducerBuilder(initialState)
  .add(actions.getSubnavigationError, (state, action) => Immutable.merge(state, action.payload))
  .add(actions.getSubnavigationSuccess, (state, action) => Immutable.merge(state, (action.payload)))
  .build()

export default reducer
