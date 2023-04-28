import { useState } from 'react';
import styles from "../styles/Signup.module.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';
import { login } from '../reducers/user'
// import { redirect } from 'react-router-dom';
// import Accueil from './Accueil';



function Signup() {
  const dispatch = useDispatch();

  const router = useRouter();
  
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpName, setSignUpName] = useState("");

  // const handleRegister = () => {
  //   fetch("http://localhost:3000/users/signup", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({
  //       name: signUpName,
  //       username: signUpUsername,
  //       password: signUpPassword,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.result) {
  //         dispatch(login({ name: signUpName, username: signUpUsername, password: signUpPassword, token: data.token }));
  //         setSignUpName("");
  //         setsignUpUsername("");
  //         setSignUpPassword("");
  //         // setIsModalVisible(false);
  //       }
  //     });
  // };


  const handleRegister = () => {
  fetch("http://localhost:3000/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: signUpName,
      username: signUpUsername,
      password: signUpPassword,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data here
      console.log("Response data:", data);
      if (data.result) {
        dispatch(login({ username: signUpUsername, name: signUpName, token: data.token }));
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

  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerSection}>
        <p>Sign-up</p>
        <TextField
          type="text"
          placeholder="Name"
          id="signUpName"
          onChange={(e) => setSignUpName(e.target.value)}
          value={signUpName}
          className={styles.inputSignUp}
          color="secondary"
          sx={{backgroundColor: '#FDF6D0',  borderColor: "#ECC4D0"}}

        />
        <br></br>
        <TextField
          type="text"
          placeholder="Username"
          id="signUpUsername"
          onChange={(e) => setSignUpUsername(e.target.value)}
          value={signUpUsername}
          color="secondary"
          sx={{backgroundColor: '#FDF6D0',  borderColor: "#ECC4D0"}}

        />
        <br></br>
        <TextField
          type="password"
          placeholder="Password"
          id="signUpPassword"
          onChange={(e) => setSignUpPassword(e.target.value)}
          value={signUpPassword}
          color="secondary"
          sx={{backgroundColor: '#FDF6D0',  borderColor: "#ECC4D0"}}

        />
        <br></br>
        <Button
              className={styles.signupBtn}
              variant="contained"
              sx={{
                backgroundColor: "#F561E1",
                color: "#ffffff",
                fontSize: 18,
                width: 200,
                "&:hover": {
                  backgroundColor: "#B086AA",
                  cursor: "pointer",
                },
              }}
              onClick={() => {handleRegister()}}
            >
              Sign up
            </Button>   
      </div>
    </div>
  );
}

export default Signup;
