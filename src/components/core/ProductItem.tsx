import React, { FC } from 'react'
import { Button, Card, Col, Image, Row, Typography } from "antd"
import { Link } from 'react-router-dom'
import { Product } from '../../store/models/Product'
import { API } from '../../config'
import moment from 'moment'
import { addItem } from '../../helpers/cart'
import { useDispatch } from 'react-redux'
import { push } from 'connected-react-router'

const { Title, Paragraph } = Typography

interface Props {
    product: Product,
    showViewProduct?: boolean,
    showCartBtn?: boolean
}

const ProductItem: FC<Props> = ({ product, showViewProduct = true, showCartBtn = true }) => {
    const dispatch = useDispatch()
    const addToCart = () => {
        addItem(product, () => {
            dispatch(push('/cart'))
        })
    }
    
    const showButtons = () => {
        let btnArray = []
        if (showViewProduct) {
            btnArray.push(
                <Button type='link'>
                    <Link to={`/Product/${product._id}`}>查看详情</Link>
                </Button>
            )
        }
        if (showCartBtn) {
            btnArray.push(
                <Button type='link' onClick={addToCart}>
                    加入购物车
                </Button>
            )
        }
        return btnArray
    }

    return (
        <Card
            cover={
                <Image
                    src={`${API}/product/photo/${product._id}`}
                    alt={product.name}
                />
            }
            actions={showButtons()}
        >
            <Title level={5}>{product.name}</Title>
            <Paragraph ellipsis={{ rows: 2 }}>{product.description}</Paragraph>
            <Row>
                <Col>销量:{product.sold}</Col>
                <Col style={{ textAlign: "right" }}>价格:{product.price}</Col>
            </Row>
            <Row>
                <Col>上架时间:{moment(product.createdAt).format('YYYY-MM-DD')}</Col>
                <Col style={{ textAlign: "right" }}>所属分类:{product.category.name}</Col>
            </Row>
        </Card>
    )
}

export default ProductItem
