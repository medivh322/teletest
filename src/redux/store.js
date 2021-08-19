import { createStore } from 'redux';
import { GET_CHANNELS, GET_PROGRAMS, SET_PROGRAMS } from './actions';

const initialState = {
    channels: [],
    programs: [],
    currentXvid: null
}

function telereduce(state = initialState, action) {
    switch (action.type) {
        case GET_CHANNELS:
            return {...state, channels: action.payload};
        case GET_PROGRAMS: 
            return {...state, programs: action.payload.programs, currentXvid: action.payload.xvid};
        default:
            return state
    }
}


const store = createStore(telereduce);
export default store;