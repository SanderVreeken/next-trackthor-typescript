import Button from './Button'
import Dropdown from './Dropdown'
import Searchbar from './Searchbar'
import { headerButtons } from '../elements/buttons'
import styles from '../styles/Header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <Searchbar />
            <span>
                {headerButtons.map(button => <Button button={button} />)}
                <Dropdown />
            </span>
        </header>
    )
}