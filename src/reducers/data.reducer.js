const initialState = () => ({
    name: '',
    revenue: 1234,
    orders: 5678,
    customers: 456,
    reference: {
        revenue: 1235,
        orders: 5780,
        customers: 444,
    },
    activeUserId: 'jBen',
    users: [
        {
            id: 'jBen',
            name: 'Jennefer Bennett',
            designation: 'Product Designer',
            earning: {
                total: 26256,
                calculatedPercent: 76,
                prevMonthRelative: 2.3
            },
            recentActivity: [
                {
                    date: [12, 'Sep'],
                    description: 'Responded to need "Volunteer work"'
                },
                {
                    date: [15, 'Apr'],
                    description: 'Travelled to Hyderabad'
                }
            ],
            info: [
                {
                    type: 'Products',
                    value: 1269
                },
                {
                    type: 'Followers',
                    value: 5200,
                    shortForm: true
                }
            ],
            overview: {
                total: '$24,568',
                relativePercetage: 2.56,
                info: [
                    {
                        type: 'Orders',
                        value: '5,643'
                    },
                    {
                        type: 'Sales',
                        value: '16,273',
                    },
                    {
                        type: 'Order Value',
                        value: '12.03%'
                    },
                    {
                        type: 'Customers',
                        value: '21,345'
                    },
                    {
                        type: 'Income',
                        value: '$35,678'
                    },
                    {
                        type: 'Expenses',
                        value: '$2,765'
                    }
                ]
            }
        },
        {
            id: 'tom',
            name: 'Tom',
            designation: 'Product Developer',
            earning: {
                total: 123,
                calculatedPercent: 87,
                prevMonthRelative: 9.3
            },
            recentActivity: [
                {
                    date: [1, 'Aug'],
                    description: 'Worked on "web assesment"'
                },
                {
                    date: [24, 'Jan'],
                    description: 'Submitted web assesment'
                }
            ],
            info: [
                {
                    type: 'Products',
                    value: 743
                },
                {
                    type: 'Followers',
                    value: 682,
                    shortForm: true
                }
            ],
            overview: {
                total: '$94,568',
                relativePercetage: 6.33,
                info: [
                    {
                        type: 'Orders',
                        value: '1,386'
                    },
                    {
                        type: 'Sales',
                        value: '63,863',
                    },
                    {
                        type: 'Order Value',
                        value: '24.03%'
                    },
                    {
                        type: 'Customers',
                        value: '19,642'
                    },
                    {
                        type: 'Income',
                        value: '$54,435'
                    },
                    {
                        type: 'Expenses',
                        value: '$5,836'
                    }
                ]
            }
        }
    ],
    siderCollapse: false
})

export default function (state = initialState(), action) {
    let { type, payload } = action
    switch (type) {
        case 'UPDATE_TEST':
            return { ...state, payload }
        case 'UPDATE_TIME': {
            return { ...state, timestamp: new Date().getTime() }
        }
        case 'SIDER_COLLAPSE': {
            return { ...state, siderCollapse: payload }
        }
        case 'UPDATE_STATE': {
            return { ...state, timestamp: new Date().getTime(), activeUserId: state.activeUserId === 'tom' ? 'jBen' : 'tom' }
        }
        default:
            return state
    }
}
