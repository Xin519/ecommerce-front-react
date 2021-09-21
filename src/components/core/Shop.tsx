import { Col, Row, Space } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterProduct } from '../../store/actions/product.actions'
import { CheckBox } from './CheckBox'
import Layout from './Layout'
import { RadioBox } from './RadioBox'

const Shop = () => {
    const dispatch = useDispatch()
    
    const [myFilters, setMyFilters] = useState<{category: string[], price: number[]}>({category: [], price: []})

    useEffect(() => {
        dispatch(filterProduct({
            filters: myFilters,
            skip: 0
        }))
    }, [myFilters])

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

    return (
        <Layout title='商城' subTitle='买买买！！'>
            <Row>
                <Col span='4'>
                    <filter />
                </Col>
                <Col span='20'>right</Col>
            </Row>
        </Layout>
    )
}

export default Shop
