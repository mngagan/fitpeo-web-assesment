import React from 'react'
import { Card, Col, Row, Typography } from 'antd'
import { useSelector } from 'react-redux'

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function CardLevel1({ data = 'revenue', title = "Revenue", icon = <></>, currency = false }) {
    const dataToDisplay = useSelector(state => state.data[data])
    const reference = useSelector(state => state.data.reference[data])
    let percentage = ((dataToDisplay - reference) / reference) * 100
    percentage = Math.round(percentage * 100) / 100

    return (
        <Card>
            <Row>
                <Col span={4}>
                    {icon}
                </Col>
                <Col span={20}>
                    <Row>
                        <Col span={24}>
                            <Typography.Title level={5} type="secondary">{title}</Typography.Title>
                        </Col>
                        <Col span={24}>
                            <Row>
                                <Col span={12}>
                                    <Typography.Title level={5} className='card-value-display'>
                                        {currency ? `$${numberWithCommas(dataToDisplay)}` : numberWithCommas(dataToDisplay)}
                                    </Typography.Title>
                                </Col>
                                <Col span={12} className='percentage-container'>
                                    <span className={percentage < 0 ? 'loss' : 'profit'}>
                                        <Typography.Text strong type={percentage < 0 ? 'danger' : 'success'}>
                                            {percentage > 0 ? `+${percentage}` : percentage}%
                                        </Typography.Text>
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
    )
}

export default CardLevel1