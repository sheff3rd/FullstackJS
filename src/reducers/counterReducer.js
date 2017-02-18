// In a more complex app, you're going to want different entities to reference each other.
// We suggest that you keep your state as normalized as possible, without any nesting.
// Keep every entity in an object stored with an ID as a key, and use IDs to reference it from other entities, or lists.
// Think of the app's state as a database. This approach is described in normalizr's documentation in detail.
// For example, keeping todosById: { id -> todo } and todos: array<id> inside the state
// would be a better idea in a real app, but we're keeping the example simple.

import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../constants/actionTypes'

const initialState = {
  counter: 0
}

export default function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return Object.assign({}, state, {
        counter: state.counter++
      })
    case DECREMENT_COUNTER:
      return Object.assign({}, state, {
        counter: state.counter++
      })
    default:
      return state
  }
  return state
}
