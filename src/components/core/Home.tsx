import { Col, Row, Typography } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../store/actions/product.actions'
import { AppState } from '../../store/reducers'
import { ProductState } from '../../store/reducers/product.reducer'
import Layout from './Layout'
import ProductItem from './ProductItem'
import { Search } from './Search'

const { Title, Paragraph } = Typography

const Home = () => {
    const dispatch = useDispatch()

    const { createdAt, sold } = useSelector<AppState, ProductState>(state => state.product)

    useEffect(() => {
        dispatch(getProduct('createdAt'))
        dispatch(getProduct('sold'))
    }, [])

    return (
        <Layout title='浩天商城' subTitle='买买买！！'>
            <Search />

            <Title level={5}>最新上架</Title>
            <Row gutter={[16, 16]}>
                {
                    createdAt.products.map(item => (
                        <Col span='6'>
                            <ProductItem  product={item} />
                        </Col>
                    ))
                }

            </Row>

            <Title level={5}>最受欢迎</Title>
            <Row gutter={[16, 16]}>
                {
                    sold.products.map(item => (
                        <Col span='6'>
                            <ProductItem product={item} />
                        </Col>
                    ))
                }
            </Row>

        </Layout>
    )
}

export default Home
