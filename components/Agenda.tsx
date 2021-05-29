import { MdKeyboardArrowDown } from 'react-icons/md'
import appointments from '../elements/appointments'
import users from '../elements/users'
import getInitials from '../functions/getInitials'
import AppointmentI from '../interfaces/Appointment'
import TimeI from '../interfaces/Time'
import UserI from '../interfaces/User'
import styles from '../styles/Agenda.module.scss'

export default function Agenda() {
    // Function to calculate the start and end of the gridArea for the appointment.
    const calculateArea = (time: { hours: number, minutes: number }) => {
        const hourArea = (time.hours - 9) * 4
        switch(time.minutes) {
            case 0:
                return 1 + hourArea
            case 15:
                return 2 + hourArea
            case 30:
                return 3 + hourArea
            case 45:
                return 4 + hourArea
        }
    }

    // Function that returns the gridArea as a string.
    const defineGridArea = (time: TimeI) => `1/${calculateArea(time.start)}/2/${calculateArea(time.end)}`

    // Function that returns the hours of the appointment as a string.
    const renderHours = (appointment: AppointmentI) => {
        if (appointment.time) {
            const time = appointment.time
            const renderMinutes = (minutes: number) => minutes === 0 ? '00' : minutes
            return `${time.start.hours}:${renderMinutes(time.start.minutes)} - ${time.end.hours}${renderMinutes(time.end.minutes)}`
        } else {
            return 'All day'
        }
    }
        
    // Function that renders the timeline on top of the agenda.
    const renderTimeline = () => {
        const hours = {
            end: 18,
            start: 9
        }
        const lines: JSX.Element[] = []
        // Loop that draws the lines for the hours defined above.
        for (let h = hours.start; h <= hours.end; h++) {
            for (let n = 0; n < 4; n++) {
                if (n === 0) {
                    lines.push(
                        <span>
                            {/* Ternary operator to check whether an extra zero should be added for hours below ten. */}
                            <p style={{
                                color: h === 12 ? 'black' : '#a9b2bc'
                            }}>{h < 10 ? `0${h}:00` : `${h}:00`}</p>
                        </span>
                    )
                } else {
                    // No more lines should be drawn for the last hour in the loop.
                    if (h !== 18) {
                        lines.push(<span></span>)
                    }
                }
            }
        }

        return (
            <span className={styles.agenda__timeline}>
                {lines}
            </span>
        )
    }

    // Function that renders the appointments included in the planning array.
    const renderPlanning = () => {
        return appointments.map(planning => {
            return (
                <span className={styles.agenda__planning}>
                    <span>
                        {planning.map((appointment: AppointmentI) => (
                            <span style={{
                                backgroundColor: appointment.absence ? 'white' : '#111',
                                gridArea: appointment.time ? defineGridArea(appointment.time) : '1/1/2/36' 
                            }}>
                                <span>
                                    <span>
                                        <p style={{
                                            color: appointment.absence ? '#111' : 'white' 
                                        }}>{appointment.title}</p>
                                        <p>{renderHours(appointment)}</p>
                                    </span>
                                    <span>
                                        {appointment.assingedTo?.map(user => (
                                            <span className={styles.agenda__avatar}>
                                                <h6>{getInitials(user.name)}</h6>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </span>
                        ))}
                    </span>
                    <span className={styles.agenda__tracker}></span>
                </span>
            )
        }
    )}

    // User component that is rendered to display the users.
    const User = (user: UserI) => {
        return (
            <span className={styles.agenda__user}>
                <span className={styles.agenda__avatar}>
                    <h6>{getInitials(user.name)}</h6>
                </span>
                <span>
                    <h6>{user.name}</h6>
                    <p>{user.title}</p>
                </span>
            </span>
        )
    }

    return (
        <div className={styles.agenda} role='agenda'>
            <span className={styles.agenda__dropdown}>
                {/* TODO: Implement a working dropdown for the agenda. */}
                <h5>Trackthor_plugin</h5>
                <MdKeyboardArrowDown />
            </span>
            <span className={styles.agenda__times}>
                {renderTimeline()}
            </span>
            <span className={styles.agenda__users}>
                {users.map(user => User(user))}
            </span>
            <span className={styles.agenda__main}>
                {renderPlanning()}
            </span>
        </div>
    )
}