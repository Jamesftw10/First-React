import circlePile from "../../assets/circle-pile.svg";
import styles from "./LandingNavMain.module.css";

function About({ id = "about"}) {
    return (
        <section id={id} className={styles.section} style={{ alignContent: "center" }} data-aos="fade-up">
            <h1 data-aos="fade-up" data-aos-delay="100">About Us</h1>
            <div style={{ maxWidth: "900px", margin: "20px auto", textAlign: "center" }}>
                <p data-aos="fade-up" data-aos-delay="200">
                    We are a team of passionate developers dedicated to creating a seamless and enjoyable social experience.
                </p>
                <p data-aos="fade-up" data-aos-delay="300">Our mission is to connect people and foster meaningful interactions through our platform.</p>
                <img data-aos="fade-up" data-aos-delay="400" src={circlePile} alt="About Us" />
            </div>
            
        </section>
    );
}

export default About