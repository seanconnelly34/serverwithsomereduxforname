import { call, put, takeEvery } from "redux-saga/effects";

import { setName } from "../actions";
import {fetchData} from './api'
function postApi(action){
    try{
        const data = yield call(fetchData);
        yield put(setName(data));
    }catch(e){
        console.log(e);
    }
}

