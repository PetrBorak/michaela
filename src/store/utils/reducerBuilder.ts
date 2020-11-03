import { Action } from '../types'

type actionCreator = (...args: any) => Action

/**
 * A utility class to create reducers using redux-actions handleActions syntax,
 * but without the complaints from flow. Inspired by:
 * https://github.com/acdlite/redux-actions/issues/84#issuecomment-215522649
 */
export default class ReducerBuilder<T> {
  map: {[x: string]: (T:T, Action:Action) => T} = {}
  initialState: T

  constructor(initialState: T) {
    this.initialState = initialState
  }

  /**
   *  We extract the Redux Action constant from the actionCreator, and map it to its handler,
   * @param creator
   * @param handler
   * @returns {ReducerBuilder}
   */
  add(creator: actionCreator, handler: (T:T, Action:Action) => T): ReducerBuilder<T> {
    // HACK: we pass an empty object to allow destructuring in payload creation
    this.map[creator({}).type] = handler
    return this
  }

  build() {
    const mapClone = { ...this.map }

    return (state: T = this.initialState, action: Action): T => {
      if (!action) {
        return state
      }
      const handler = mapClone[action.type]

      return handler ? handler(state, action) : state
    }
  }
}
