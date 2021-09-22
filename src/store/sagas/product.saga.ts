import { put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { API } from "../../config";
import { FilterProductAction, filterProductSuccess, FILTER_PRODUCT, GetProductAction, GetProductByIdAction, getProductByIdSuccess, getProductSuccess, GET_PRODUCT, GET_PRODUCT_BY_ID, SearchProductAction, searchProductSuccess, SEARCH_PRODUCT } from "../actions/product.actions";
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

function* handleFilterProduct (action: FilterProductAction): any {
    let response = yield axios.post(`${API}/products/filter`, action.payload)
    yield put(filterProductSuccess(response.data, action.payload.skip))
}

function* handleGetProductById ({ payload }: GetProductByIdAction): any {
    let response = yield axios.get(`${API}/product/${payload.productId}`)
    yield put(getProductByIdSuccess(response.data))
}

export default function* productSage () {
    yield takeEvery(GET_PRODUCT, handGetprogect)
    yield takeEvery(SEARCH_PRODUCT, handSearchProduct)
    yield takeEvery(FILTER_PRODUCT, handleFilterProduct)
    yield takeEvery(GET_PRODUCT_BY_ID, handleGetProductById)
}



