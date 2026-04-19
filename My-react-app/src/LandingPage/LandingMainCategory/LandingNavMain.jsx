import WhyUs from "./WhyUs";
import Resources from "./Resources";
import styles from './LandingNavMain.module.css'


function LandingNavMain() {

    return (
        <div className={styles.landingMain}>
            <WhyUs id="why-us" />
            <Resources id="resources" />
            
        </div>
    )
}

export default LandingNavMain