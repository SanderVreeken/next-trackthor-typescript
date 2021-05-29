import { MdDashboard, MdFolder, MdHome, MdKeyboard, MdPeople, MdPerson, MdWatchLater } from 'react-icons/md' 

export const headerButtons = [{
        icon: <MdDashboard />
}, {
        title: 'MR'
}]

export const navbarButtons = [[{
        icon: <MdHome />,
        path: '/',
        title: 'Home'
}, {
        icon: <MdPerson />,
        path: '/clients',
        title: 'Clients'
}, {
        icon: <MdPeople />,
        path: '/project-teams',
        title: 'Project Teams'
}, {
        icon: <MdWatchLater />,
        path: '/time-tracking',
        title: 'Time Tracking'
}], [{
        icon: <MdKeyboard />,
        path: '/hardware',
        title: 'Hardware'
}, {
        icon: <MdFolder />,
        path: '/documents',
        title: 'Documents'
}]]