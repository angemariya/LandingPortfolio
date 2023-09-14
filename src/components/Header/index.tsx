import { Link } from 'react-router-dom'
import { LogoDark } from '../Footer/LogoDark'
import styles from './Header.module.scss'

export const Header = () => {
    return (
        <header className={styles.header}>
            <nav>
                <Link to="home" className={styles.menuLogo}>
                    <LogoDark />
                </Link>
                <ul className={styles.menu}>
                    <li className={styles.menuButton}>
                        <Link to="home" className={styles.menuAnchor}>Home</Link>
                    </li>
                    <li className={styles.menuButton}>
                        <a className={styles.menuAnchor} href="#about">About</a>
                    </li>
                    <li className={styles.menuButton}>
                        <Link to="cases" className={styles.menuAnchor}>Work</Link>
                    </li>
                    <li className={styles.menuButton}>
                        <a className={styles.menuAnchor}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
