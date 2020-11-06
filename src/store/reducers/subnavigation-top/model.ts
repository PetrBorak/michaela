import Immutable from 'immutable'

import type { Data } from '../../../api/queries/subnavigation-top'

export type ResponseSuccess = Data
export type State = Data & {
  error: boolean
}

export const initialState = Immutable.Map({
  subnavigationTop: {
    Link: [{
      Name: '',
      page: {
        path: ''
      }
    }]
  }
}).toObject()
