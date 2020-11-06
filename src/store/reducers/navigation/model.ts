import Immutable from 'immutable'

import type { Data } from '../../../api/queries/navigation'

export type ResponseSuccess = Data
export type State = Data & {
  error: boolean
}

export const initialState = Immutable.Map({
  navigation: {
    Navigation: {
      Link: [{
        page: {
          id: null,
          path: ''
        },
        Name: ''
      }]
    }
  }
}).toObject()
