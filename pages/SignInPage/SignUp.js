import Header from "../Components/Header/Header";
import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function signUpWithEmail() {
   
  }

  return (
    <div>
      <Header />
      <div className="signIn_container">
        <div className="signIn">
          <h1>Sign Up</h1>
          <div className="email">
            <p>Please Enter Your Email</p>
            <input
              onChange={(event) => setEmail(event.target.value)}
              type="email"
            ></input>
          </div>
          <div className="Passwprd">
            <p>Please Enter Your Password</p>
            <input
              onChange={(event) => setPassword(event.target.value)}
              type="password"
            ></input>
          </div>
            <p className="noAccount">Already Have An Account?</p>
          <button onClick={() => signUpWithEmail()}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
