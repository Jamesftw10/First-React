import styles from './Navigation.module.css'
import { useNavigate } from 'react-router-dom'

function Navigation() {
    const navigate = useNavigate()
    return (
        <nav className={styles.nav}>
            <div className={styles.flexAlignCss}>
                <h2 className={styles.brand}>Add Friend</h2>

                <ul className={styles.menu}>
                    <li>Background</li>
                    <li>Project</li>
                    <li>Info</li>
                    <li>Contact</li>
                </ul>

                <button className={styles.logoutButton} onClick={() => navigate('/')}>
                    Log out
                </button>
            </div>
        </nav>
    )
}

export default Navigation