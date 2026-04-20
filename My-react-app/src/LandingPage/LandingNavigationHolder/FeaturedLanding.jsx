import styles from './Landing.module.css'

function FeaturedLanding() {
    return (
        <ul className={styles.navLinks}>
            <li><a href="#why-us">Why us</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
        </ul>

    )
}

export default FeaturedLanding