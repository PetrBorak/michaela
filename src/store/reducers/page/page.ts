import Immutable from 'immutable'

import { initialState } from './model'
import ReducerBuilder from '../../utils/reducerBuilder'
import { Action } from '../../types'

export const GET_PAGE_ACTION = 'GET_PAGE'

export interface PageActionCreators {
  getPage: (id: number) => Action;
}

export const actions: PageActionCreators = {
  getPage: (id: number) => ({
    type: GET_PAGE_ACTION,
    payload: {
      id
    }
  })
}

const reducer = new ReducerBuilder(initialState)
  .add(actions.getPage, (state, action) => Immutable.merge(state, action.payload))
  .build()

export default reducer

