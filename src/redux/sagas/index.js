import { call, put, takeEvery } from 'redux-saga/effects';
import { API_CHANNELS, API_PROGRAMS } from '../../constants';
import { GET_CHANNELS_REQUESTED, GET_PROGRAMS_REQUESTED } from '../actions';
import { getChannels, getPrograms } from '../actions_creators';

async function fetchPrograms(id){
    let res = await fetch(`${API_PROGRAMS}list?domain=kazan&date_from=2021-08-18&date_to=2021-08-25&xvid=${id}`)
    return await res.json();
}   
async function fetchChannels(){
    let res = await fetch(`${API_CHANNELS}channel/list?domain=kazan`);
    return await res.json();
}

function* getProgramsWorker(actions){
    const { xvid } = actions.payload;
    const fetchRes = yield call(fetchPrograms, xvid);
    yield put(getPrograms(fetchRes[xvid], xvid));
}

function* getChannelsWorker(){
    const resChan = yield call(fetchChannels);
    yield put(getChannels(resChan));
}

function* rootSaga(){
    yield takeEvery(GET_PROGRAMS_REQUESTED, getProgramsWorker);
    yield takeEvery(GET_CHANNELS_REQUESTED, getChannelsWorker);
}

export default rootSaga;