import { Product } from "../models/Product"

export const GET_PRODUCT = "GET_PRODUCT"
export const GET_PRODUCT_SUCCESS = "GET_PRODUCT_SUCCESS"

export interface GetProductAction {
    type: typeof GET_PRODUCT
    sortBy: string
    order: string
    limit: number
}

export interface GetProductSuccessAction {
    type: typeof GET_PRODUCT_SUCCESS
    payload: Product[]
    sortBy: string
}

export const getProduct = (sortBy: string, order: string = 'desc', limit: number = 8): GetProductAction => ({
    type: GET_PRODUCT,
    sortBy,
    order,
    limit
})

export const getProductSuccess = (payload: Product[], sortBy: string): GetProductSuccessAction => ({
    type: GET_PRODUCT_SUCCESS,
    payload,
    sortBy
})

// search 

export const SEARCH_PRODUCT = "SEARCH_PRODUCT"
export const SEARCH_PRODUCT_SUCCESS = "SEARCH_PRODUCT_SUCCESS"

export interface SearchProductAction {
    type: typeof SEARCH_PRODUCT
    payload: {
        category: string
        search: string
    }
}

export interface SearchProductSuccessAction {
    type: typeof SEARCH_PRODUCT_SUCCESS
    products: Product[]
}

export const searchProduct = (payload: {
    category: string,
    search: string
}): SearchProductAction => ({
    type: SEARCH_PRODUCT,
    payload
})

export const searchProductSuccess = (products: Product[]): SearchProductSuccessAction => ({
    type: SEARCH_PRODUCT_SUCCESS,
    products

})

export type ProductUnionType =
    | GetProductAction
    | GetProductSuccessAction
    | SearchProductAction
    | SearchProductSuccessAction