import { createStore, applyMiddleware  } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { GET_CHANNELS_SUCCESS, GET_PROGRAMS_SUCCESS } from './actions';
import rootSaga from './sagas';

const initialState = {
    channels: [],
    programs: [],
    currentXvid: null
}

function telereduce(state = initialState, action) {
    switch (action.type) {
        case GET_CHANNELS_SUCCESS:
            return {...state, channels: action.payload};
        case GET_PROGRAMS_SUCCESS: 
            return {...state, programs: action.payload.programs, currentXvid: action.payload.xvid};
        default:
            return state
    }
}


const sagaMiddleware = createSagaMiddleware();

const store = createStore(telereduce, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga);

export default store;