import { MdAdd } from 'react-icons/md'
import CardI from '../interfaces/Card'
import styles from '../styles/Card.module.scss'

interface Props {
    card: CardI
}

// Item component that is rendered to display the items in the card.
const Item = (icon: JSX.Element, item: { meta: string, title?: string }) => (
    <span className={styles.card__item}>
        <span>
            <span>
                {icon}
            </span> 
            <h6>{item.title}</h6>
        </span>
        <span>
            <h6>{item.meta}</h6>  
        </span>
    </span>
)


export default function Card({ card: { add, icon, items, title } }: Props) {
    return (
        <div className={styles.card}>
            <span className={styles.card__header}>
                <h5>{title}</h5>
                {add && <MdAdd />}
            </span>
            <span className={styles.card__items}>
                {items.map(item => Item(icon, item))}
            </span>
        </div>
    )
}