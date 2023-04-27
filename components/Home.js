import styles from "../styles/Home.module.css";
import Image from 'next/image'

function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.leftContainer}>
          <div className={styles.mascotte}>
            <Image src='/mascotte.png' width={600} height={500} alt="photo" />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.logo}>
            <img alt="Logo" />
          </div>
          <div className={styles.title}>
            <h1>See what's happening</h1>
            <h2>Join hackatweet today.</h2>
          </div>
          <div className={styles.button}>
            <button className={styles.signupBtn}>Sign up</button>
            <p>Already have an account ?</p>
            <button className={styles.signinBtn}>Sign in</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
