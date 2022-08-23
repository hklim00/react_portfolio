import { takeLatest, all, put, fork, call } from '@redux-saga/core/effects';

import { getFlickr, getYoutube, getMembers } from './api';

export function* returnMembers() {
	try {
		const response = yield call(getMembers);
		yield put({ type: 'MEMBER_SUCCESS', payload: response.data.members });
	} catch (err) {
		yield put({ type: 'MEMBER_ERROR', payload: err });
	}
}

export function* callMembers() {
	yield takeLatest('MEMBER_START', returnMembers);
}

export function* returnYoutube() {
	try {
		const response = yield call(getYoutube);
		yield put({ type: 'YOUTUBE_SUCCESS', payload: response.data.items });
	} catch (err) {
		yield put({ type: 'YOUTUBE_ERROR', payload: err });
	}
}

export function* callYoutube() {
	yield takeLatest('YOUTUBE_START', returnYoutube);
}

export function* returnFlickr(action) {
	try {
		const response = yield call(getFlickr, action.Opt);
		yield put({ type: 'FLICKR_SUCCESS', payload: response.data.photos.photo });
	} catch (err) {
		yield put({ type: 'FLICKR_ERROR', payload: err });
	}
}

export function* callFlickr() {
	yield takeLatest('FLICKR_START', returnFlickr);
}

export default function* rootSaga() {
	yield all([fork(callFlickr), fork(callYoutube), fork(callMembers)]);
}
