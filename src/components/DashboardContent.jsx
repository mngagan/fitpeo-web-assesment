import React from 'react'
import { Col, Divider, Row, Space, Typography, Card } from 'antd';
import { SearchOutlined, FlagTwoTone, AppstoreTwoTone, BellTwoTone, SettingTwoTone, GithubFilled } from '@ant-design/icons'
import CardLevel1 from './CardLevel1'
import GetIcon from './GetIcon'
import UserCard from './UserCard'
import OverviewCard from './OverviewCard'
import UserActivity from './UserActivity';
import TopProducts from './TopProducts'
import OrderStatus from './OrderStatus'
import { updateTime, updateState } from '../actions';
import { useDispatch, useStore, useSelector } from 'react-redux'
import { motion } from "framer-motion";
import { notification } from 'antd';
import useWindowDimensions from './hooks/useDimensionHook'


function DashboardContent({ category = 'Dashboard' }) {
    const siderCollapse = useSelector(state => state.data.siderCollapse)
    const { height, width } = useWindowDimensions();
    const dispatch = useDispatch()
    return (
        <React.Fragment >
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, default: { ease: "linear" } }}>
                <Row className='dashboard-parent'>
                    <Col span={24}>
                        <Row>
                            <Col span={12} className='pl-20'>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.6 }}>
                                    <Typography.Title level={3} italic underline className='color-1890ff cursor-default'>
                                        {category}
                                    </Typography.Title>
                                </motion.div>
                            </Col>
                            <Col span={12} align='end'>
                                <Space size={'large'} className={'dashboard-components-header-icons'}>
                                    <GithubFilled onClick={() => window.open('https://github.com/mngagan/fitpeo-web-assesment', "_blank")} />
                                    {width > 500 && <>
                                        <SearchOutlined />
                                        <FlagTwoTone />
                                        <AppstoreTwoTone />
                                    </>}
                                    <BellTwoTone onClick={() => notification.open({
                                        message: <strong>Shortcuts</strong>,
                                        description: <><div><strong>Alt + c</strong>  Toggle sidebar</div><div><strong>Alt + r</strong>  Update data</div></>,
                                        onClick: () => {
                                            console.log('Notification Clicked!');
                                        },
                                    })} />
                                    <SettingTwoTone onClick={() => dispatch(updateTime({}))} />
                                </Space>
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={18} xxl={18} lg={18} md={siderCollapse ? 16 : 24} sm={24} >
                        <Row >
                            {level1CardsData.map((eachCard, index) => {
                                return <Col xl={8} xxl={8} lg={8} md={24} sm={24} xs={24} key={index} className='level-1-cards-container'>
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index === 0 ? 0.8 : index === 1 ? 1 : 1.2 }}>
                                        <CardLevel1
                                            {...eachCard}
                                        />
                                    </motion.div>
                                </Col>
                            })}
                            <Col span={24} className='p-10'>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.4 }}>
                                    <OverviewCard />
                                </motion.div>
                            </Col>
                            <Col span={24}>
                                <Row>
                                    <Col xl={8} lg={24} className='p-10'>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 1.6 }}>
                                            <UserActivity />
                                        </motion.div>
                                    </Col>
                                    <Col xl={8} lg={12} className='p-10'>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 1.8 }}>
                                            <OrderStatus />
                                        </motion.div>
                                    </Col>
                                    <Col xl={8} lg={12} className='p-10'>
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 2 }}>
                                            <TopProducts />
                                        </motion.div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} md={siderCollapse ? 8 : 24} sm={24} xs = {24} className='p-10'>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 2.1 }}>
                            <UserCard />
                        </motion.div>
                    </Col>
                </Row >
            </motion.div>
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