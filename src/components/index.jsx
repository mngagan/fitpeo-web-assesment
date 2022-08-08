import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './index.scss';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined, RightOutlined, LeftOutlined, CalendarOutlined, MessageOutlined, DatabaseOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Tooltip, Typography } from 'antd';
import { motion } from "framer-motion";
import DashboardContent from './DashboardContent'

const { Title } = Typography;

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Dashboard', 'dashboard', <PieChartOutlined />, [
        getItem('Ecommerce', 'dash-ecom'),
        getItem('Saas', 'dash-saas'),
        getItem('Crypto', 'dash-crypto'),
    ]),
    getItem('Calendar', 'calendar', <CalendarOutlined />),
    getItem('Chat', 'chat', <MessageOutlined />),
    getItem('File Manager', 'file-manager', <DatabaseOutlined />),
    getItem('Ecommerce', 'app-ecom', <UserOutlined />, [
        getItem('Tom', '3'),
        getItem('Bill', '4'),
        getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
];

const Index = () => {
    const [collapsed, setCollapsed] = useState(false);

    React.useEffect(() => {
        window.addEventListener('keydown', handleKeyListen)

        return () => {
            window.removeEventListener('keydown', handleKeyListen)
        }
    })

    const handleKeyListen = (e) => {
        if (!e.shiftKey && !e.ctrlKey && e.altKey) {
            if (e.key.toLowerCase() === 'c') {
                setCollapsed(!collapsed)
            }
        }
    }

    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider
                collapsible
                trigger={
                    <motion.div
                        className="box"
                        animate={{ x: 0, y: 0, rotate: !collapsed ? 0 : 180 }}
                        transition={{ type: "spring" }}>
                        <Tooltip title="Alt + c">{<LeftOutlined />}</Tooltip>
                    </motion.div>}
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <motion.div>
                    <Title type="danger" level={4}>Web Assessment</Title>
                </motion.div>
                <Menu theme="dark" defaultSelectedKeys={['dashboard']} mode="inline" items={items} />
            </Sider>
            <Layout className="site-layout">
                <Layout.Content className="dashboard-content-container">
                    <DashboardContent category = 'Dashboard'/>
                </Layout.Content>
            </Layout>
        </Layout>
    );
};

export default Index;