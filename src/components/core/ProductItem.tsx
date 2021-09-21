import React, { FC } from 'react'
import { Button, Card, Col, Image, Row, Typography } from "antd"
import { Link } from 'react-router-dom'
import { Product } from '../../store/models/Product'
import { API } from '../../config'
import moment from 'moment'

const { Title, Paragraph } = Typography

interface Props {
    product: Product
}

const ProductItem: FC<Props> = ({ product }) => {
    return (
        <Card
            cover={
                <Image 
                    src={`${API}/product/photo/${product._id}`}
                    alt={product.name}
                />
            }
                    actions={[
                        <Button type='link'>
                            <Link to=''>查看详情</Link>
                        </Button>,
                        <Button type='link'>
                            <Link to=''>加入购物车</Link>
                        </Button>
                    ]}
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