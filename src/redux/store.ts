import { createStore, applyMiddleware, Store, compose } from 'redux'
import thunk from 'redux-thunk'
import carReducer from './car/carReducer';
import rootReducer from './rootReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const store: Store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)

export default store
