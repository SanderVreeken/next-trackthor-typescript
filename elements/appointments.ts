const appointments = [[{
    assingedTo: [{
        name: 'Michael Rome',
        title: 'Senior UI Designer'
    }, {
        name: 'Dominika Kropp',
        title: 'Visual Designer'
    }, {
        name: 'Marcin Twardowski',
        title: 'UX Designer'
    }],
    time: {
        end: {
            hours: 17,
            minutes: 0
        },
        start: {
            hours: 10,
            minutes: 0
        }
    },
    title: 'Client Workshops'
}], [{
    time: {
        end: {
            hours: 10,
            minutes: 30
        },
        start: {
            hours: 9,
            minutes: 0
        }
    },
    title: 'Standup'
}, {
    time: {
        end: {
            hours: 15,
            minutes: 0
        },
        start: {
            hours: 13,
            minutes: 0
        }
    },
    title: 'Bookado Meeting'
}], [{
    absence: true,
    allday: true,
    title: 'Holiday'
}]]

export default appointments