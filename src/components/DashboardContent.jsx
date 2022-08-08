import React from 'react'
import { Col, Divider, Row, Space, Typography, Card } from 'antd';
import { SearchOutlined, FlagTwoTone, AppstoreTwoTone, BellTwoTone, SettingTwoTone } from '@ant-design/icons'
import CardLevel1 from './CardLevel1'
import GetIcon from './GetIcon'
import UserCard from './UserCard'
import OverviewCard from './OverviewCard'
import UserActivity from './UserActivity';
import TopProducts from './TopProducts'
import OrderStatus from './OrderStatus'

function DashboardContent({ category = 'Dashboard' }) {

    return (
        <React.Fragment >
            <Row className='dashboard-parent'>
                <Col span={24}>
                    <Row>
                        <Col span={12}>
                            <Typography.Title level={3}>
                                {category}
                            </Typography.Title>
                        </Col>
                        <Col span={12} align='end'>
                            <Space size={'large'} className={'dashboard-components-header-icons'}>
                                <SearchOutlined />
                                <FlagTwoTone />
                                <AppstoreTwoTone />
                                <BellTwoTone />
                                <SettingTwoTone />
                            </Space>
                        </Col>
                    </Row>
                </Col>
                <Col span={18}>
                    <Row gutter={'large'}>
                        {level1CardsData.map(eachCard => {
                            return <Col span={8}>
                                <CardLevel1
                                    {...eachCard}
                                />
                            </Col>
                        })}
                        <Col span={24}>
                            <OverviewCard />
                        </Col>
                        <Col span={24}>
                            <Row>
                                <Col span={8}>
                                    <UserActivity />
                                </Col>
                                <Col span={8}>
                                    <OrderStatus />
                                </Col>
                                <Col span={8}>
                                    <TopProducts />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <UserCard />
                </Col>
            </Row >
        </React.Fragment >
    )
}


const level1CardsData = [
    {
        title: 'Revenue',
        data: 'revenue',
        icon: <GetIcon type='revenue' />,
        currency: true
    },
    {
        title: 'Orders',
        data: 'orders',
        icon: <GetIcon type='orders' />,
    }, {
        title: 'Customers',
        data: 'customers',
        icon: <GetIcon type='customers' />,
    },
]

export default DashboardContent