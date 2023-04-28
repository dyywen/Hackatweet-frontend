import styles from "../styles/Accueil.module.css"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import Tweet from "./Tweet";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducers/user";
import { useRouter } from 'next/router';

function Accueil(){

    const [tweetData, setTweetData] = useState([]);
    const [newTweet, setnewTweet] = useState("");
    const [counter, setCounter] = useState(0)
    const users = useSelector((state) => state.user.value)
    const dispatch = useDispatch();
    const router = useRouter();
    console.log(users);

    useEffect(() => {
        fetch('http://localhost:3000/tweets')
        .then(response => response.json())
        .then(data => {
                setTweetData(data.data)
                // console.log(data.data[0].content);
        })
    }, [counter] );

    const tweets = tweetData.map((data, i) => {
        return (
            <>
               <Tweet key={i} {...data}  />
            </>

        )
    })

    const handleNewTweet = () => {

        fetch(`http://localhost:3000/tweets/${users.token}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: newTweet,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response data here
            console.log("Response data:", data);
            setCounter(counter + 1)
          })
          .catch((error) => {
            // Handle any errors that occurred during the fetch request
            console.error("Error occurred:", error);
            // Show an error message to the user
            alert("An error occurred while trying to register. Please try again later.");
          });
        
      };

      const handleLogout = () => {
        dispatch(logout());
        router.push('/')
      }
    

    return(
        <div className={styles.main}>
            <div className={styles.header}>
                <h1 className={styles.title}>Home</h1>
                <div className={styles.home}>
                    <div className={styles.inputCenter}>
                        <input type="text" placeholder=" What's the drama ?" className={styles.input} onChange={(e) => setnewTweet(e.target.value)} value={newTweet}/>
                    </div>
                    <div className={styles.countTweetDiv}>
                            <p className={styles.counter}>1/280</p>
                            <button className={styles.tweetBtn} onClick={handleNewTweet}>Tweet</button>
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
                            <p className={styles.name}>{users.name}</p>
                            <p className={styles.username}>@{users.username}</p>
                        </div>
                    </div>
                    <div className={styles.logoutBtnCenter}>
                        <button onClick={() => handleLogout()} className={styles.logoutBtn}>Logout</button>
                    </div>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <h1 className={styles.title}>Trends</h1>

            </div>
            <div className={styles.twitterFeed}>
                {tweets}
            </div>
        </div>
    )
};

export default Accueil;