import moment from 'moment'
import { useState } from 'react'
import styles from '../styles/Calendar.module.scss'

export default function Calendar() {
    const date = new Date()
    const format = 'DD-MM-YYYY'

    const defineBackgroundColor = (date: Date) => {
        if (moment(date).format(format) === moment(new Date()).format(format)) {
            return 'black'
        } else if (date.getDay() === 0 || date.getDay() === 6) {
            return '#e3e9f4'
        } else {
            return 'white'
        }
    }

    // Day component that is rendered to display the different days.
    const Day = (date: Date) => {
        return (
            <span className={styles.calendar__day}>
                <span style={{
                    backgroundColor: defineBackgroundColor(date),
                }}>
                    <h5 style={{
                        color: moment(date).format(format) === moment(new Date()).format(format) ? 'white' : '#111'
                    }}>{date.getDate()}</h5>
                </span>
                <p>{moment(date).format('ddd')}</p>
            </span>
        )
    }

    // Function that renders the individual days in the calendar component.
    const renderDays = () => {
        const elements: JSX.Element[] = []
        const dayNumber = date.getDate()
        for (let n = dayNumber - 6; n < dayNumber + 7; n++) {
            elements.push(Day(new Date(date.getFullYear(), date.getMonth(), n)))
        } 
        return elements
    }

    // Function that renders the months in the calendar component.
    const renderMonths = () => {
        const elements: JSX.Element[] = []
        const monthNumber = date.getMonth()
        const months = moment.months()
        for (let n = monthNumber - 2; n < monthNumber + 3; n++) {
            elements.push(<h3>{months[n]}</h3>)
        } 
        return elements
    }

    return (
        <div className={styles.calendar}>
            <span className={styles.calendar__wrapper}></span>
            <span>
                <span className={styles.calendar__months}>
                    {renderMonths()}
                </span>
                <span className={styles.calendar__days}>
                    {renderDays()}
                </span>
            </span>
        </div>
    )
}