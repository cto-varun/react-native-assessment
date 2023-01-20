import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';

import thunk from 'redux-thunk';

import RootReducer from './reducers';

const initialState = {};
const middleware = [thunk];

export default createStore(
    RootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware)
    )
)