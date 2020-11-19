import Immutable from 'immutable'

export interface State {
  requestsPending: number
}

export const initialState = Immutable.Map({
  requestsPending: 3
}).toObject()
