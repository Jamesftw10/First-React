import styles from "./LandingNavMain.module.css";
import bookText from "../../assets/book-text.svg";
import filePlay from "../../assets/file-play.svg";
import handshake  from "../../assets/handshake.svg";

function Resources({ id = "resources" }) {

    return (
        <section id={id} className={styles.section} data-aos="fade-up">
            <h1 data-aos="fade-up" data-aos-delay="100">Resources</h1>

           <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginTop: "40px"
}}>
    <div  data-aos="fade-right" data-aos-delay="150" style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h3 className={styles.title}>Documentation</h3>
        <p>Everything you need to know to get started</p>
        <img src={bookText} alt="Documentation" />
    </div>
    <div data-aos="fade-up" data-aos-delay="250" style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h3 className={styles.title}>Video Tutorials</h3>
        <p>Quick visual guides for easy setup</p>
        <img src={filePlay} alt="Video Tutorials" />
    </div>
    <div data-aos="fade-left" data-aos-delay="350" style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h3 className={styles.title}>Community Hub</h3>
        <p>Connect with other users and share tips.</p>
        <img src={handshake} alt="Community Hub"/>
    </div>
</div>
        </section>
    );
}


export default Resources