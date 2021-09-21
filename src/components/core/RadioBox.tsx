import { Typography, List, Radio } from 'antd'
import React from 'react'

const { Title } = Typography

const prices = [
    {
        price: '0 - 50'
    }, {
        price: '50 - 100'
    }
]

export const RadioBox = () => {
    return (
        <>
            <Title level={4}>按价格筛选</Title>
            <Radio.Group>
                <List dataSource={prices} renderItem={item => (
                    <List.Item>
                        <Radio value={item.price}>
                            {item.price}
                        </Radio>
                    </List.Item>
                )} />
            </Radio.Group>
        </>
    )
}
