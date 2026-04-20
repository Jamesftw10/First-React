import { useNavigate } from 'react-router-dom'
import styles from './Landing.module.css'
import { LayersPlus } from 'lucide-react';
import FeaturedLanding from './FeaturedLanding';
import LandingNavMain from '../LandingMainCategory/LandingNavMain';

function LandingNav() {
    const navigate = useNavigate()
    return (
        <>
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <LayersPlus />
                    <div>
                        <h2 className={styles.name}>Add Platform</h2>
                        <p className={styles.description}>Add your friends</p>
                    </div>
                </div>
                <div>
                    <FeaturedLanding />
                </div>
                <div>
                    <button className={styles.Signin} onClick={() => navigate('/portalpage')}>
                        SignIn
                    </button>
                </div>
            </div>
        </nav>
        <LandingNavMain />
        </>
    )
}

export default LandingNav