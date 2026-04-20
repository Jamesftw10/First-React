import styles from './LandingNavMain.module.css'

function Contactus( id = "contact-us") {
    return (
        <section id={id} className={styles.section}>
            <div className={styles.contactus}>
                <h1>Contact Us</h1>
                <div style={{ width: "800px", margin: "20px auto", textAlign: "center" }}>
                <span className={styles.p1}>If you have any questions or would like to get in touch, please feel free to contact us:</span>
                </div>
                <ul>
                    <li>Email: <a href="mailto:info@company.com">info@company.com</a></li>
                </ul>
            </div>
        </section>
    );

}

export default Contactus