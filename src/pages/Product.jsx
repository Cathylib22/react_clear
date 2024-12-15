import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img src="img-1.jpg" alt="person with dance" />
        <div>
          <h2>About Catherine</h2>
          <div className="profile-summary"> Dance </div>
          <div className="profile-summary"> Horsewalk </div>
          <div className="profile-summary"> Catwalk </div>
          <div className="flex-sect">
            <div className="flex-desc">
              As a runway model, she once represented 10+ designer brands in
              LAFW, OCFW of 2024.{" "}
            </div>
            <div className="flex-desc">
              She is well versed in Dynamic marketing with over 3 years of
              experience in fashion marketing, brand strategy, and content
              creation. Skilled in engaging diverse audiences through
              storytelling and innovative campaigns. A creative thinker and
              disciplined performer, bringing the same level of precision and
              passion as a part-time model and dancer.{" "}
            </div>
            <div className="flex-desc">
              She currently a signed model for Murad, representing their values
              and aesthetic in marketing campaigns. Skilled in building strong
              brand identities, creating compelling content.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
