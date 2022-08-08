import React from 'react'
import { Card, Typography, Row, Col, Select } from 'antd'
import { Area } from '@ant-design/plots';

function UserActivity() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/67ef5751-b228-417c-810a-962f978af3e7.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'year',
        yField: 'value',
        seriesField: 'country',
        color: ['#82d1de', '#cb302d', '#e3ca8c'],
        areaStyle: {
            fillOpacity: 0.7,
        },
        appendPadding: 10,
        isPercent: true,
        yAxis: {
            label: {
                formatter: (value) => {
                    return value * 100;
                },
            },
        },
        pattern: {
            type: 'line',
        },
    };

    return (
        <Row className="user-activity-caontainer">
            <Col span={24}>
                <Card>
                    <Row>
                        <Col span={24}>
                            <Row>
                                <Col span={16}>
                                    <span>
                                        <Typography.Text strong>User Activity</Typography.Text>
                                    </span>
                                </Col>
                                <Col span={8} className="text-end">
                                    <Select defaultValue="lucy" bordered={false}>
                                        <Select.Option value="jack">Weekly</Select.Option>
                                        <Select.Option value="lucy">Monthly</Select.Option>
                                        <Select.Option value="Yiminghe">Yearly</Select.Option>
                                    </Select>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={24}>
                            <Typography.Text strong>This Month</Typography.Text>
                        </Col>
                        <Col span={24}>
                            <Typography.Title level={4}>16,579</Typography.Title>
                        </Col>
                        <Col span={24}>
                            <Area {...config} />;
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

export default UserActivity