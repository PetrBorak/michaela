import Immutable from 'immutable'

import type { Data } from '../../../api/queries/homepage'

export type ResponseSuccess = Data
export type State = Data & {
  error: boolean
}

export const initialState = Immutable.Map({
    error: false,
    homepage: {
      Name: '',
      Jumbotron: {
        Image: {
          url: ''
        }
      }
    },
    navigation: {
      Navigation: {
        Item: {
          Name: ''
        }
      }
    }
  }).toObject()
