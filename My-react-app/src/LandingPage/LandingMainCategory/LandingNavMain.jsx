import WhyUs from "./WhyUs";
import About from "./About";
import Resources from "./Resources";
import styles from './LandingNavMain.module.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Contactus from "./Contactus";


function LandingNavMain() {

    useEffect(() => {
        AOS.init({
            duration: 900,
            offset: 120,
            easing: "ease-out-cubic",
            once: true,
        });
    }, []);

    return (
        <div className={styles.landingMain}>
            <WhyUs id="why-us" />
            <Resources id="resources" />
            <About id="about" />
            <Contactus id="contact-us" />
        </div>
    )
}

export default LandingNavMain