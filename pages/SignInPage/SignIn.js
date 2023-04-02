import Header from "../Components/Header/Header";
import { useState } from "react";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import GoogleButton from 'react-google-button'


function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const supabase = useSupabaseClient()
  
  async function loginWithGoogle() {
   await supabase.auth.signInWithOAuth({
      provider:'google',
    })
  }

  return (
    <div>
      <Header />
      <div className="signIn_container">
        <div className="signIn">
          <h1>Sign In</h1>
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
            <p className="noAccount">Don't Have An Account Yet?</p>
         
          <button onClick={() => signInWithEmail()}>Submit</button>
          <p>or</p>
          <GoogleButton id="google" onClick={()=>loginWithGoogle()}/>

          
        </div>
      </div>
    </div>
  );
}
export default SignIn;
