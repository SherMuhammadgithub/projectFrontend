import { dashboard, expenses, transactions, trend} from "./icons"

export const menuItems = [
    {
        id: 1,
        title: 'Users',
        icon: dashboard,
        link: '/dashboard'
    },
    {
        id: 3,
        title: "Incomes",
        icon: trend,
        link: "/dashboard",
    },
    {
        id: 4,
        title: "Expenses",
        icon: expenses,
        link: "/dashboard",
    },
    {
        id: 5,
        title: "User Notifications",
        icon: transactions,
        link: "",
    },
    {
        id: 6,
        title: "Profile Settings",
        icon: transactions,
        link: "",
    }
]