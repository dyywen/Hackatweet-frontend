import Image from "next/image";
import styles from "../styles/Tweet.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";


function Tweet(props) {

  // const handleBookmarkClick = () => {
  // 	if (!user.token) {
  // 		return;
  // 	}

  // 	fetch(`http://localhost:3000/users/canBookmark/${user.token}`)
  // 		.then(response => response.json())
  // 		.then(data => {
  // 			if (data.result && data.canBookmark) {
  // 				if (props.isBookmarked) {
  // 					dispatch(removeBookmark(props));
  // 				} else {
  // 					dispatch(addBookmark(props));
  // 				}
  // 			}
  // 		});
  // }

  return (
    <>
      <div className={styles.tweetContainer}>
        <div className={styles.userContainer}>
        <div>
        <Image
          src="/avatar-6.png"
          alt="Picture of the author"
          width={30}
          height={30}
          className={styles.avatarRadius}
        />
        </div>
        <p className={styles.name}>@{props.user.username} {props.user.name}</p>
        </div>
        <p>{props.content}</p>
        <div>
            <FontAwesomeIcon icon={faHeart} />
            <span className={styles.counter}>0</span>
        </div>
      </div>
    </>
    );
}

export default Tweet;
