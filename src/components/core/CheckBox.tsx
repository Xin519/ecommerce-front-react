import { Typography, List, Checkbox as AntdCheckbox } from 'antd'
import { CheckboxValueType } from 'antd/lib/checkbox/Group'
import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../store/actions/category.actions'
import { AppState } from '../../store/reducers'
import { CategoryState } from '../../store/reducers/category.reducer'

const { Title } = Typography

interface Props{
    handleFilter: (arg: string[]) => void
}

export const CheckBox: FC<Props> = ({handleFilter}) => {
    const dispatch = useDispatch()

    const category = useSelector<AppState, CategoryState>(state => state.Category)

    useEffect(() => {
        dispatch(getCategory())
    }, [])

    const onChange = (checkedValue: CheckboxValueType[]) => {
        handleFilter(checkedValue as string[])
    }

    return (
        <>
            <Title level={4}>按分类筛选</Title>
            <AntdCheckbox.Group 
                className='checkBoxFilter'
                options={category.category.result.map(item => (
                {
                    label: item.name,
                    value: item._id
                }
            ))}
            onChange={onChange}
            />
            {/* <List dataSource={categories} renderItem={item => (
                <List.Item>
                    <AntdCheckbox>
                        {item.name}
                    </AntdCheckbox>
                </List.Item>
            )} /> */}
        </>
    )
}


