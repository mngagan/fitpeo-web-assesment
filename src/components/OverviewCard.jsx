import { Row, Card, Col, Typography, Select, Divider } from 'antd'
import React from 'react'
import { Area } from '@ant-design/plots';
import { useSelector } from 'react-redux'

function OverviewCard() {
    const [data, setData] = React.useState([]);
    const users = useSelector(state => state.data.users)
    const activeUserId = useSelector(state => state.data.activeUserId)
    let { overview } = users.filter(eachUser => eachUser.id === activeUserId)[0]

    React.useEffect(() => {
        asyncFetch();
    }, []);
    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
            range: [0, 1],
        },
    };
    return (
        <Row>
            <Col span={24}>
                <Card>
                    <Row>
                        <Col span={8}>
                            <Row>
                                <Col span={24}>
                                    <Typography.Text strong>Overview</Typography.Text>
                                </Col>
                                <Col span={24} className="pt-20">
                                    <Typography.Text strong type="secondary">This Month</Typography.Text>
                                </Col>
                                <Col span={24} className="pt-10">
                                    <Row>
                                        <Col span={6}>
                                            <Typography.Title level={4} strong >{overview.total}</Typography.Title>
                                        </Col>
                                        <Col span={18}>
                                            <span className='percentage-container'>
                                                <span className={overview.relativePercetage < 0 ? 'loss' : 'profit'}>
                                                    <Typography.Text strong type={overview.relativePercetage < 0 ? 'danger' : 'success'}>
                                                        {overview.relativePercetage > 0 ? `+${overview.relativePercetage}` : overview.relativePercetage}%
                                                    </Typography.Text>
                                                </span>
                                            </span>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col span={24} className='pt-20'>
                                    <Row>
                                        {overview.info.map((info, index) => {
                                            return <Col span={12} key={index} className={'pl-10'}>
                                                <Row className={index % 2 == 0 ? 'border-right-grey' : ''}>
                                                    <Col span={24}>
                                                        <Typography.Text type='secondary' strong>{info.type}</Typography.Text>
                                                    </Col>
                                                    <Col span={24}>
                                                        <Typography.Title level={4}>{info.value}</Typography.Title>
                                                    </Col>
                                                    {index < 4 && <Divider />}
                                                </Row>
                                            </Col>
                                        })}
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={16}>
                            <Row>
                                <Col span={24} className='text-end' >
                                    <Typography.Text strong>Sort By:</Typography.Text>
                                    <Select defaultValue="lucy" style={{ width: 72 }} bordered={false}>
                                        <Select.Option value="Day">Day</Select.Option>
                                        <Select.Option value="Month">Month</Select.Option>
                                        <Select.Option value="lucy">Year</Select.Option>
                                    </Select>
                                </Col>
                                <Col span={24}>
                                    <Area {...config} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

export default OverviewCard