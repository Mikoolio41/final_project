import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../containers/styles/Login.module.css";
import { motion } from "framer-motion";

let regexPass = new RegExp("^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,15}$");

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    let userLogin = {
      email: email,
      password: password.password,
    };
    console.log(userLogin);
    const response = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userLogin),
    });
    let userLoggedIn = await response.json();
    console.log(await userLoggedIn);
    if (userLoggedIn.userid > 0) {
      sessionStorage.setItem("userid", userLoggedIn.userid);
      navigate("/plan");
    } else {
      alert(userLoggedIn.msg);
    }
  };

  return (
    <motion.div
      className={styles.loginForm}
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <form className={styles.form2} onSubmit={handleSubmit}>
        <div className={styles.titleLogin}>Please login</div>
        {/* <div className="subtitle">Please insert your info:</div> */}
        <div className={`${styles.inputContainer} ${styles.ic1}`}>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            placeholder=" "
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className={styles.cutEmail}></div>
          <label className={styles.placeholder} htmlFor="email">
            Email
          </label>
        </div>
        <div className={`${styles.inputContainer} ${styles.ic1}`}>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            placeholder=" "
            onBlur={(e) => {
              if (e.target.value.match(regexPass) != null) {
                setPassword({ password: e.target.value });
              } else {
                alert(`1 Uppercase\n1 Lowercase\n1 Digit\n8-15 Characters`);
              }
            }}
          />
          <div className={styles.cut}></div>
          <label className={styles.placeholder} htmlFor="password">
            Password
          </label>
        </div>
        <button className={styles.submit} type={styles.submit}>
          Login
        </button>
      </form>
    </motion.div>
  );
}

export default Login;
