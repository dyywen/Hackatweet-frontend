import styles from "../styles/Accueil.module.css"
import Image from 'next/image'

function Accueil(){

    function handleTweetClick() {
        
    }

    return(
        <div className={styles.main}>
            <div className={styles.header}>
                <h1 className={styles.title}>Home</h1>
                <div className={styles.home}>
                    <div className={styles.inputCenter}>
                        <input type="text" placeholder=" What's the drama ?" className={styles.input} />
                    </div>
                    <div className={styles.countTweetDiv}>
                            <p className={styles.counter}>1/280</p>
                            <button className={styles.tweetBtn}>Tweet</button>
                    </div>
                </div>
            </div>
            <div className={styles.leftContainer}>
                <div className={styles.mascotte}>
                  <Image src="/avatar.png" height={70} width={70} alt="Logo"/>
                </div>
                <div>
                    <div className={styles.user}>
                        <div className={styles.avatar}>
                            <Image src="/avatar-3.jpg" height={65} width={65} alt="avatar" className={styles.avatarRadius}/>
                    </div>
                        <div className={styles.userInfos}>
                            <p className={styles.name}>John</p>
                            <p className={styles.username}>@JohnCena</p>
                        </div>
                    </div>
                    <div className={styles.logoutBtnCenter}>
                        <button className={styles.logoutBtn}>Logout</button>
                    </div>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <h1 className={styles.title}>Trends</h1>

            </div>
            <div className={styles.twitterFeed}>

            </div>
        </div>
    )
};

export default Accueil;