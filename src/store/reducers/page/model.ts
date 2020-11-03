import Immutable from 'immutable'

export type State = {
  id: string
}

export const initialState = Immutable.Map({
  id: '',
}).toObject()
