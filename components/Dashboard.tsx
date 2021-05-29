import Header from './Header'
import cards from '../elements/cards'
import styles from '../styles/Dashboard.module.scss'
import Card from './Card'
import Calendar from './Calendar'
import Agenda from './Agenda'

export default function Dashboard() {
    // Function that returns the correct greeting depending on the current hour.
    const defineGreeting = (hours: number) => {
        if(hours >= 5 && hours < 12) {
            return 'morning'
        } else if (hours >= 12 && hours < 17) {
            return 'afternoon'
        } else if (hours >= 17 && hours < 21) {
            return 'evening'
        } else {
            return 'night'
        }   
    }

    return (
        <div className={styles.dashboard}>
            <Header />
            <h1>{`Good ${defineGreeting(new Date().getHours())}, Sander`}</h1>
            <p>Here whats happening in your VL account today</p>
            <span className={styles.dashboard__cards}>
                {cards.map(card => <Card card={card} />)}
            </span>
            <Calendar />
            <Agenda />
        </div>
    )
}