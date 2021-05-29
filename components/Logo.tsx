import { GiFarmTractor } from 'react-icons/gi'
import styles from '../styles/Logo.module.scss'

export default function Logo() {
    return (
        <span className={styles.logo} role='logo'>
            <GiFarmTractor />
            <span>
                <p>TRACK</p>
                <p>THOR</p>
            </span>
        </span>
    )
}