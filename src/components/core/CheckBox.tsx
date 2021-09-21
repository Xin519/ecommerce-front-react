import { Typography, List, Checkbox as AntdCheckbox } from 'antd'
import React from 'react'

const { Title } = Typography

const categories = [
    {
        name: 'NODE'
    }, {
        name: 'REACT'
    }
]

export const CheckBox = () => {
    return (
        <>
            <Title level={4}>按分类筛选</Title>
            <List dataSource={categories} renderItem={item => (
                <List.Item>
                    <AntdCheckbox>
                        {item.name}
                    </AntdCheckbox>
                </List.Item>
            )} />
        </>
    )
}


