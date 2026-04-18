import { useState } from 'react'
import styles from './Landing.module.css'
import LayersPlusIcon from './LeyersPlus.jsx'
import LogInPortal from './LoginHolder/LogInPortal.jsx'

function LandingNav() {
  const [showLogin, setShowLogin] = useState(false)
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                   <LayersPlusIcon/>
                    <div>
                        <h2>Add Platform</h2>
                        <p className={styles.description}>Add your friends</p>
                    </div>
                </div>
                <div>
                    <ul>
                        <li>Features</li>
                        <li>Services</li>
                        <li>About</li>
                    </ul>
                </div>
                <div>
                    <button onClick={() => setShowLogin(true)}>
                        SignIn
                    </button>
                </div>
            </div>
            {showLogin && <LogInPortal />}
        </nav>
    )
}

export default LandingNav