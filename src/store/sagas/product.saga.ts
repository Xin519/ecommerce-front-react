import { put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { API } from "../../config";
import { GetProductAction, getProductSuccess, GET_PRODUCT, SearchProductAction, searchProductSuccess, SEARCH_PRODUCT } from "../actions/product.actions";
import { Product } from "../models/Product";

function* handGetprogect ({ sortBy, order, limit }: GetProductAction): any {
    let responce = yield axios.get<Product[]>(`${API}/progects`, {
        params:{ sortBy, order, limit }
    })

    yield put(getProductSuccess(responce.data, sortBy))
}

function* handSearchProduct ({payload: {search, category}}: SearchProductAction): any {
    let response = yield axios.get(`${API}/products/search`, {
        params: { search, category }
    })
    yield put(searchProductSuccess(response.data))
}

export default function* productSage () {
    yield takeEvery(GET_PRODUCT, handGetprogect)
    yield takeEvery(SEARCH_PRODUCT, handSearchProduct)
}



