import { all } from "redux-saga/effects";
import authSaga from "./auth.sage";
import categorySaga from "./category.saga";
import productSage from "./product.saga";

export default function* rootSage () {
    yield all([authSaga(), categorySaga(), productSage()])
}
