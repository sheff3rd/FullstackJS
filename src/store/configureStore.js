import { createStore, applyMiddleware, combineReducers } from 'redux'
import appReducers from '../reducers'
import thunk from 'redux-thunk'

export default function configureStore(initialState) {
  const middlewares = [
    thunk
  ];

  if (process.env.NODE_ENV == 'development') {
    const logger = createLogger()
    middlewares.push(logger);
  }

  const store = createStore(
    combineReducers({
      ...appReducers,
      initialState
    }),
    applyMiddleware(...middlewares)
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
