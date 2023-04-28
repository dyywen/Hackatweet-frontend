import { useEffect, useState } from "react";
import styles from "../styles/Login.module.css";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { login } from '../reducers/user';
import { useDispatch } from 'react-redux';




function Signin() {
  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const router = useRouter();
  const dispatch = useDispatch();



const handleConnection = () => {
  fetch("http://localhost:3000/users/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: signInUsername,
      password: signInPassword, 
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data here
      console.log("Response data:", data);
      if (data.result) {
        dispatch(login({username: signInUsername, token: data.token }));
        router.push('/accueil')
      } 
      else {
        // If the registration failed, show an error message
        alert(data.message);
      }
    })
    .catch((error) => {
      // Handle any errors that occurred during the fetch request
      console.error("Error occurred:", error);
      // Show an error message to the user
      alert("An error occurred while trying to register. Please try again later.");
    });
};



//style={{display:"flex", flexDirection:"column", alignItems:"center"}}
  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerSection} >
        <p>Sign-in</p>
        
        <TextField
          type="text"
          placeholder="Username"
          id="signInUsername"
          onChange={(e) => setSignInUsername(e.target.value)}
          value={signInUsername}
          color="secondary"
          sx={{ mb: 3, backgroundColor: "#FDF6D0", borderColor: "#ECC4D0" }}
          fullWidth
          
        />
        
        <TextField
          type="password"
          placeholder="Password"
          id="signInPassword"
          onChange={(e) => setSignInPassword(e.target.value)}
          value={signInPassword}
          color="secondary"
          sx={{ mb: 3, backgroundColor: "#FDF6D0", borderColor: "#ECC4D0" }}
          fullWidth
        />
        
        <Button
          variant="outlined"
          className={styles.signinBtn}
          
          sx={{
            textAlign: "center",
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
          onClick={() => handleConnection()}
        >
          Sign in
        </Button>
      </div>
    </div>
  );
 }
 
export default Signin;
