import { Button, Col, Empty, Row, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterProduct } from '../../store/actions/product.actions'
import { AppState } from '../../store/reducers'
import { ProductState } from '../../store/reducers/product.reducer'
import { CheckBox } from './CheckBox'
import Layout from './Layout'
import ProductItem from './ProductItem'
import { RadioBox } from './RadioBox'

const Shop = () => {
    const dispatch = useDispatch()

    const [skip, setSkip] = useState<number>(0);

    const [myFilters, setMyFilters] = useState<{ category: string[], price: number[] }>({ category: [], price: [] })

    const product = useSelector<AppState, ProductState>(state => state.product)

    useEffect(() => {
        setSkip(0)
    }, [myFilters])

    useEffect(() => {
        dispatch(filterProduct({
            filters: myFilters,
            skip
        }))
    }, [myFilters, skip])

    const filter = () => (
        <Space size='middle' direction='vertical'>
            <CheckBox handleFilter={(filter: string[]) => {
                setMyFilters({ ...myFilters, category: filter })
            }} />
            <RadioBox handleFilter={(filter: number[]) => {
                setMyFilters({ ...myFilters, price: filter })
            }} />
        </Space>
    )

    const productDom = () => (
        <Row gutter={[16, 16]}>
            {
                product.filter.result.data.map(item => (
                    <Col key={item._id} span="6">
                        <ProductItem product={item} />
                    </Col>
                ))
            }
        </Row>
    )

    const loadmore = () => {
        setSkip(skip + 4)
    }

    const loadMoreButton = () => {
        return (
            <Row>
                {product.filter.result.size >= 4 && (
                    <Button onClick={loadmore}>加载更多</Button>
                )}
            </Row>
        )
    }

    const noData = () => {
        return <Row>{product.filter.result.size === 0 && <Empty />}</Row>
    }

    return (
        <Layout title='商城' subTitle='买买买！！'>
            <Row>
                <Col span='4'>
                    <filter />
                </Col>
                <Col span='20'>
                    {productDom()}
                    {loadMoreButton()}
                    {noData()}
                </Col>
            </Row>
        </Layout>
    )
}

export default Shop
