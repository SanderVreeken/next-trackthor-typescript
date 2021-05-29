import { AiFillQuestionCircle } from 'react-icons/ai'
import Button from './Button'
import styles from '../styles/Message.module.scss'

const button = { title: 'Write Message' }

export default function Message() {
    return (
        <span className={styles.message}>
            <span>
                <span>
                    <AiFillQuestionCircle />
                </span>
            </span>
            <h5>Idea-driven Tool</h5>
            <p>Do you have any creative idea of how to add power to our Trackthor? Feel free to contact us.</p>
            <Button button={button} />
        </span>
    )
}