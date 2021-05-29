import { useRouter } from 'next/router'
import Button from './Button'
import Logo from './Logo'
import { navbarButtons } from '../elements/buttons'
import ButtonI from '../interfaces/Button'
import styles from '../styles/Navbar.module.scss'
import Message from './Message'

export default function Navbar() {
    const router = useRouter()

    return (
        <nav className={styles.navbar}>
            <span>
                <Logo />
                <span className={styles.navbar__buttons}>
                    {navbarButtons.map((buttons: ButtonI[], index: number) => {
                        return (
                            <span style={{
                                borderTopWidth: index > 0 ? '1px' : '0px'
                            }}>
                                {buttons.map(button => {
                                    const style = {
                                        backgroundColor: button.path === router.pathname ? '#191919' : 'transparent',
                                        color: button.path === router.pathname ? 'white' : '#191919'
                                    }
                                    return <Button button={button} style={style} />
                                })}
                            </span>
                        )
                    })}
                </span>
            </span>
            <Message />
        </nav>
    )
}