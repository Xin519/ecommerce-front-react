import { Col, Row, Space } from 'antd'
import React from 'react'
import { CheckBox } from './CheckBox'
import Layout from './Layout'
import { RadioBox } from './RadioBox'

const Shop = () => {
    const filter = () => (
        <Space size='middle' direction='vertical'>
            <CheckBox />
            <RadioBox />
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
