import { useState } from 'react';
import styles from "../styles/Signup.module.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Signup() {
  const dispatch = useDispatch();
  
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpName, setSignUpName] = useState("");

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
        if (data.result) {
          dispatch(login({ name: signUpName, username: signUpUsername, password: signUpPassword, token: data.token }));
          setSignUpName("");
          setsignUpUsername("");
          setSignUpPassword("");
          // setIsModalVisible(false);
        }
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
