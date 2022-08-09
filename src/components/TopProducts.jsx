import React from 'react'
import { Card, Typography, Row, Col, Select } from 'antd'

const products = [
    {
        name: 'Polo blue T-shirt',
        countSold: '3.82k',
        price: '$25.4'
    },
    {
        name: 'Hoodie for men',
        countSold: '8.2k',
        price: '$5.4'
    },
    {
        name: 'Red Caps',
        countSold: '22.4k',
        price: '$2.4'
    },
    {
        name: 'Blue Wallet',
        countSold: '3.0k',
        price: '$30.2'
    },
    {
        name: 'Gold ornament',
        countSold: '1.2k',
        price: '$154.6'
    }
]

function TopProducts() {
    return (
        <Row className={'top-products-container'}>
            <Col span={24}>
                <Card>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={16}>
                                    <span>
                                        <Typography.Text strong>Top Products</Typography.Text>
                                    </span>
                                </Col>
                                <Col span={8} className="text-end">
                                    <Select defaultValue="jack" bordered={false}>
                                        <Select.Option value="jack">Weekly</Select.Option>
                                        <Select.Option value="lucy">Monthly</Select.Option>
                                        <Select.Option value="Yiminghe">Yearly</Select.Option>
                                    </Select>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <Row className="products-list">
                                {products.map((eachProd, index) => {
                                    return <Col span={24} className='top-product-element pt-10'>
                                        <Row>
                                            <Col span={4} className='top-product-rank'>
                                                <Typography.Text strong className="rank-text">#{index + 1}</Typography.Text>
                                            </Col>
                                            <Col span={20}>
                                                <Row>
                                                    <Col span={16} className='top-product-info'>
                                                        <Row>
                                                            <Col span={24}>
                                                                <Typography.Text type="secondary" ellipsis={{ tooltip: 'true' }}>{eachProd.name}</Typography.Text>
                                                            </Col>
                                                            <Col span={24}>
                                                                <Typography.Text strong>{eachProd.price}</Typography.Text>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                    <Col span={8} className='text-end'>
                                                        <Typography.Text strong className='recent-activity-date-part products-count-sold'>{eachProd.countSold}</Typography.Text>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

export default TopProducts