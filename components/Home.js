import { useState } from 'react';

import styles from "../styles/Home.module.css";
import Image from "next/image";
import Button from "@mui/material/Button";
import Signin from "./Signin";
import Signup from "./Signup";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function Home() {

    const [open, setOpen] = useState(false);
    const [openSignIn, setOpenSignIn] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenSignIn = () => {
    setOpenSignIn(true);
  };

  const handleCloseSignIn = () => {
    setOpenSignIn(false);
  };

  return (
    <div>
      {/* <Signin></Signin>
      <Signup></Signup> */}
      <main className={styles.main}>
        <div className={styles.leftContainer}>
          <div className={styles.mascotte}>
            <Image src="/mascotte.png" width={900} height={600} alt="photo" />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.logo}>
            <img alt="Logo" />
          </div>
          <div className={styles.title}>
            <h1>Wanna see what the drama's about?</h1>
            <h2>Join the judgy bird today.</h2>
          </div>
          <div className={styles.button}>
            <Button
              className={styles.signupBtn}
              variant="contained"
              sx={{
                backgroundColor: "#F561E1",
                color: "#ffffff",
                fontSize: 18,
                width: 200,
                // padding: '10px 20px',
                // borderRadius: 5,
                "&:hover": {
                  backgroundColor: "#B086AA",
                  cursor: "pointer",
                },
              }}
              onClick={() => handleClickOpen()}
            >
              Sign up
            </Button>    
            <p>Already have an account ?</p>
            <Button
              variant="outlined"
              className={styles.signinBtn}
              sx={{
                borderColor: "#F561E1",
                color: "#F561E1",
                fontSize: 16,
                width: 200,
                // padding: '10px 20px',
                // borderRadius: 5,
                "&:hover": {
                  backgroundColor: "#B086AA",
                  borderColor: "#B086AA",
                  color: "white",
                  cursor: "pointer",
                },
              }}
              onClick={() => handleClickOpenSignIn()}
            >
              Sign in
            </Button>

          </div>
        </div>
        <Dialog open={open} onClose={handleClose} >
        <DialogTitle sx={{backgroundColor: '#FFE45C', fontSize: 30, color: '#846267'}}>Sign-Up</DialogTitle>
        <DialogContent sx={{backgroundColor: '#FFE45C', width: 600, heigth: 600, color: '#846267'}}>
          <DialogContentText sx={{fontSize: 20, color: '#846267'}}>
            Create your Hackatweet account.
          </DialogContentText>
          <Signup />
        </DialogContent>
        <DialogActions sx={{backgroundColor: '#FFE45C'}}>
          <Button onClick={handleClose} sx={{color: '#C37D92'}}>Cancel</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={openSignIn} onClose={handleCloseSignIn} >
        <DialogTitle sx={{backgroundColor: '#FFE45C', fontSize: 30, color: '#846267'}}>Sign-In</DialogTitle>
        <DialogContent sx={{backgroundColor: '#FFE45C', width: 600, heigth: 600, color: '#846267'}}>
          <DialogContentText sx={{fontSize: 20, color: '#846267'}}>
           🐤 Welcome back judgy bird ♥️ 
          </DialogContentText>
          <Signin />
        </DialogContent>
        <DialogActions sx={{backgroundColor: '#FFE45C'}}>
          <Button onClick={handleCloseSignIn} sx={{color: '#C37D92'}}>Cancel</Button>
        </DialogActions>
      </Dialog>
      </main>
    </div>
  );
}

export default Home;
