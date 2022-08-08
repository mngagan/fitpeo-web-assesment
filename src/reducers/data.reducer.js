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
                        type : 'Income',
                        value : '$35,678'
                    },
                    {
                        type : 'Expenses',
                        value : '$2,765'
                    }
                ]
            }
        }
    ]
})

export default function (state = initialState(), action) {
    let { type, payload } = action
    switch (type) {
        case 'UPDATE_TEST':
            return { ...state, payload }
        default:
            return state
    }
}
