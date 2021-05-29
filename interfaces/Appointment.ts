import TimeI from './Time'
import UserI from './User'

interface AppointmentI {
    absence?: boolean
    allday?: boolean
    assingedTo?: UserI[]
    time?: TimeI
    title: string
}

export default AppointmentI