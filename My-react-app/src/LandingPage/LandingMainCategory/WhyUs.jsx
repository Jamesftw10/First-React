import layersPlus from "../../assets/layers-plus.svg";
import styles from "./LandingNavMain.module.css";

function WhyUs({ id = "why-us" }) {

    return (
        <section id={id} className={styles.section} data-aos="fade-up">
            <h1 data-aos="fade-up" data-aos-delay="100">Why Us?</h1>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1.4fr 1fr",
                    gap: "20px",
                    alignItems: "center",
                }}
            >
                <p style={{ marginLeft: "30px" }} data-aos="fade-right" data-aos-delay="200">
                    We make it easy to connect with your friends in one place. Our platform is fast, simple, and designed to help you stay connected without the hassle.
                </p>

                <div style={{ display: "flex", justifyContent: "center" }} data-aos="zoom-in" data-aos-delay="300">
                    <img src={layersPlus} alt="Error Image" />
                </div>
            </div>
        </section>
    );
}


export default WhyUs