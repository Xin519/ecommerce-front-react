import { put, takeEvery } from 'redux-saga/effects'
import axios from '_axios@0.21.4@axios'
import { API } from '../../config'
import { signupSuccess, SIGNUP, SignupAction, signupFail, SIGNIN, SigninAction, signinFail, signinSuccess } from '../actions/auth.actions'

function* hanleSignup(action: SignupAction){
    try {
        yield axios.post(`${API}/signup`, action.payload)
        yield put(signupSuccess())
    } catch (error: any) {
        yield put(signupFail(error.response.data.error))
    }
    
}

function* hanleSignin(action: SigninAction): any{
    try {
        let response = yield axios.post(`${API}/signin`, action.payload)
        localStorage.setItem("jwt", JSON.stringify(response.data))
        yield put(signinSuccess())
    } catch (error: any) {
        yield put(signinFail(error.response.data.error))
    }
}

export default function* authSaga(){
    // 注册
    yield takeEvery(SIGNUP, hanleSignup)
    // 登录
    yield takeEvery(SIGNIN, hanleSignin)
}


