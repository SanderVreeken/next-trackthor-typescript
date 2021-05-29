import { useState } from 'react'
import { MdSearch } from 'react-icons/md'
import styles from '../styles/Searchbar.module.scss'

export default function Searchbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.searchbar}>
            {isOpen && <input placeholder='Enter search ...'></input>}
            <button onClick={() => setIsOpen(true)} style={{
                borderRadius: !isOpen ? '4px' : '0 4px 4px 0'
            }}>
                <MdSearch />
            </button>
        </div>
    )
}