import { delay, call, put, take, cancel, fork } from 'redux-saga/effects';
import {
    SEARCH_COCKTAILS,
    SEARCH_COCKTAILS_ERROR,
    SEARCH_COCKTAILS_SUCCESS, SEARCH_INPUT_CHANGE,
} from '../modules/cocktails';
import { cocktailsService } from '../../services';

function* searchCocktails(searchTerm: any) {
    yield delay(500);

    try {
        yield put({
            type: SEARCH_COCKTAILS,
        });
        const payload = yield call(cocktailsService.fetchCocktails, searchTerm);
        yield put({
            type: SEARCH_COCKTAILS_SUCCESS,
            payload,
        });
    } catch (e) {
        yield put({
            type: SEARCH_COCKTAILS_ERROR,
            payload: e.message,
        });
    }
}


export default function* watchAll() {
    let task;
    while (true) {
        const { payload } = yield take(SEARCH_INPUT_CHANGE);
        if (task) {
            yield cancel(task)
        }
        if(payload && payload.length >= 3){
            task = yield fork(searchCocktails, payload)
        }

    }
}
