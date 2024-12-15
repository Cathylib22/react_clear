import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>Catherine Young</h1>
        <div>
          <h2>
            <br />
            Height: 5'8"
            <br />
            Bust : 32D
            <br />
            Waist : 24.8"
            <br />
            Hips : 35.5"
            <br />
            Shoes : 6.5 US
            <br />
            <br />
            xoygha@gmail.com
            <br />
            (949)343-0822
          </h2>
        </div>
        <Link to="/login" className="cta">
          Start Contacting now
        </Link>
      </section>
    </main>
  );
}
