import WhyUs from "./WhyUs";
import styles from './LandingNavMain.module.css'

function LandingNavMain() {

    return (
        <div className={styles.landingMain}>
            <WhyUs id="why-us" />
        </div>
    )
}

export default LandingNavMain