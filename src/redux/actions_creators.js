import { GET_CHANNELS, GET_PROGRAMS } from "./actions"

export function getChannels(channels){
    return{
        type: GET_CHANNELS,
        payload: channels
    }
}

export function getPrograms(programs, xvid){
    return{
        type: GET_PROGRAMS,
        payload: {
            programs,
            xvid 
        }
    }
}

// export function setPrograms(xvid){
//     return{
//         type: GET_PROGRAMS,
//         payload: xvid
//     }
// }