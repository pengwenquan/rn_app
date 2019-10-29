import { applyMiddleware, createStore } from 'redux';
import reducers from '../Reducer';
import { middleware } from '../Navigator/AppNavigators'

const middlewares = [middleware];

export default createStore(reducers,  applyMiddleware(...middlewares));