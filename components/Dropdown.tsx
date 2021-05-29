import { useState } from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import styles from '../styles/Dropdown.module.scss'

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.dropdown} role='dropdown'>
            <span className={styles.dropdown__main} onClick={() => setIsOpen(!isOpen)}>
                <span>
                    <h5>Sander Vreeken</h5> 
                    <p>info@sandervreeken.com</p>
                </span>
                <MdKeyboardArrowDown />
            </span>
            {isOpen && (
                <span className={styles.dropdown__options}>
                    <span>
                        <h5>Logout</h5>
                    </span>
                </span>
            )}
        </div>
    )
}