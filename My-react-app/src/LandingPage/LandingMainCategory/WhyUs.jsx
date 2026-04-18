import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import layersPlus from "../../assets/layers-plus.svg";

function WhyUs({ id = "why-us" }) {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section id={id}>
            <h1 data-aos="fade-up">Why Us?</h1>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "1.4fr 1fr",
                    gap: "20px",
                    alignItems: "center",
                }}
            >
                <p style={{ marginLeft: "30px" }} data-aos="fade-right">
                    We make it easy to connect with your friends in one place. Our platform is fast, simple, and designed to help you stay connected without the hassle.
                </p>

                <div style={{ display: "flex", justifyContent: "center" }} data-aos="zoom-in">
                    <img src={layersPlus} alt="Error Image" />
                </div>
            </div>
        </section>
    );
}


export default WhyUs