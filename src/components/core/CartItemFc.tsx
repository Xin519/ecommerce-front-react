import { Button, Input, Image } from 'antd'
import React, { FC } from 'react'
import { API } from '../../config'
import { CartItem } from '../../helpers/cart'

interface Props {
    product: CartItem
}

const CartItemFc: FC<Props> = ({ product }) => {
    return (
        <div>
            <tr className="ant-table-row">
                <td className="ant-table-cell">
                    <Image width={120} src={`${API}/product/photo/${product._id}`} />
                </td>
                <td className="ant-table-cell">{product.name}</td>
                <td className="ant-table-cell">{product.price}</td>
                <td className="ant-table-cell">{product.category.name}</td>
                <td className="ant-table-cell">
                    {/* <Input type="number" value={count} onChange={handleChange} /> */}
                </td>
                <td className="ant-table-cell">
                    <Button
                        //   onClick={() => setCart(deleteItem(product._id))}
                        danger
                        type="primary"
                    >
                        删除
                    </Button>
                </td>
            </tr>
        </div>
    )
}

export default CartItemFc
