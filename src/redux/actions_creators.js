import { GET_PROGRAMS_SUCCESS ,GET_CHANNELS_SUCCESS } from "./actions"

export function getChannels(channels){
    return{
        type: GET_CHANNELS_SUCCESS,
        payload: channels
    }
}

export function getPrograms(programs, xvid){
    return{
        type: GET_PROGRAMS_SUCCESS,
        payload: {
            programs,
            xvid 
        }
    }
}