import { MdCake, MdFolder, MdWatchLater } from 'react-icons/md'
import CardI from '../interfaces/Card'

const cards: CardI[] = [{
    add: true,
    icon: <MdWatchLater />,
    items: [{
        meta: '4H',
        title: 'VLweb_203',
    }, {
        meta: '2H',
        title: 'VLweb_204',
    }],
    title: 'Log Time'
}, {
    add: true,
    icon: <MdCake />,
    items: [{
        meta: '22.11',
        title: 'Webflow Trainings',
    }, {
        meta: '01.12',
        title: 'Dominika 1-1',
    }, {
        meta: '05.12',
        title: 'Call with Krzysiek',
    }],
    title: 'Calendar'
}, {
    add: false,
    icon: <MdFolder />,
    items: [{
        meta: '11kb',
        title: 'Timesheet.doc',
    }, {
        meta: '2.45mb',
        title: 'Business Value.pdf',
    }, {
        meta: '54kb',
        title: 'Client Proposal.pdf',
    }],
    title: 'Documents'
}]

export default cards