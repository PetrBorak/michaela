import Immutable from 'immutable'

import { initialState } from './model'
import ReducerBuilder from '../../utils/reducerBuilder'
import { Action } from '../../types'

export const PWA_INCREMENT_PENDING_REQUESTS_COUNTER = 'PWA_INCREMENT_PENDING_REQUESTS_COUNTER'
export const PWA_DECREMENT_PENDING_REQUESTS_COUNTER = 'PWA_DECREMENT_PENDING_REQUESTS_COUNTER'

export interface HomePageActionCreators {
  PWADecrementPendingRequestsCounter: () => Action;
  PWAIncrementPendingRequestsCounter: () => Action;
}

export const actions: HomePageActionCreators = {
  PWADecrementPendingRequestsCounter: () => ({
    type: PWA_DECREMENT_PENDING_REQUESTS_COUNTER,
    payload: {}
  }),
  PWAIncrementPendingRequestsCounter: () => ({
    type: PWA_INCREMENT_PENDING_REQUESTS_COUNTER,
    payload: {}
  })
}

const reducer = new ReducerBuilder(initialState)
  .add(actions.PWADecrementPendingRequestsCounter, (state, action) => Immutable.merge(state, ({requestsPending: state.requestsPending - 1})))
  .add(actions.PWAIncrementPendingRequestsCounter, (state, action) => Immutable.merge(state, ({requestsPending: state.requestsPending + 1})))
  .build()

export default reducer
