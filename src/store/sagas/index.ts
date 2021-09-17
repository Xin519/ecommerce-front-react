import { all } from "redux-saga/effects";
import authSaga from "./auth.sage";

export default function* rootSage () {
    yield all([authSaga()])
}
