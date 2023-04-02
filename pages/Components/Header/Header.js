import react, { useState, useContext, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { CgProfile } from "react-icons/cg";
import { FaRegEdit } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { IoMdSettings } from "react-icons/io";
import { BiLogOut } from "react-icons/bi";
import Router from "next/router";
import { useProfile } from "../contexts/UserContext";
import { useLogout } from "../contexts/UserContext";


  
import { AiOutlineClose } from "react-icons/ai";
import { UserContext } from "../contexts/UserContext";

function Header(props) {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const session =  useSession();
  const supabase = useSupabaseClient();
  const [toast,setToast] = useState(false);
  const profile = useProfile()




  function menu() {
    setOpen(!open);
  };

  

function sharePage(){
  Router.push({
    pathname: '../SharePage/Share',
    query: { change: setToast }
}, '../SharePage/Share')
}

if(toast){
  console.log("true")
}


  async function logout(){
await supabase.auth.signOut()
  }


  if (!session) {
    return (
      
      <div className="Header">

        
        <Link className="homebtn" href="/">
          <h3>ChatGPT</h3>
        </Link>

        <div className={`Links `}>
          <h3 href="#">About</h3>
          <h3 href="#">OpenAi</h3>
          <h3 href="#">FAQ</h3>
        </div>

        <div className={`buttons  `}>
        <button onClick={()=>sharePage()}>Share</button>
          <Link href="../SignInPage/SignIn">
            <button>Sign In</button>
          </Link>
        </div>

        <div className="responsive">
          <div className="hamburger_container">
            <div className="Hamburger" onClick={menu}>
              <div className="Burger"></div>
              <div className="Burger"></div>
              <div className="Burger"></div>
            </div>
          </div>

          {open ? (
            <div className="Menu_Links">
              <AiOutlineCloseCircle className="close_icon" onClick={menu} />
              <h3 href="#">About</h3>
              <h3 href="#">OpenAi</h3>
              <h3 href="#">FAQ</h3>
              <button onClick={()=>sharePage()}>Share</button>

              {}
              <Link href="../SignInPage/SignIn">
              <button>Sign In</button>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="Header">
                

        <Link className="homebtn" href="/">
          <h3>ChatGPT</h3>
        </Link>

        <div className={`Links `}>
          <h3 href="#">About</h3>
          <h3 href="#">OpenAi</h3>
          <h3 href="#">FAQ</h3>
        </div>

        <div className={`buttons  `}>
            <button onClick={()=>sharePage()}>Share</button>
          
          <div onClick={() => setDropdown(!dropdown)}>
            <div className="profile">
              <p className={`${dropdown ? "close" : "hide"}`}>Close</p>
              <p className={`apr ${dropdown ? "move" : ""}`}>{profile? profile.name: ""}</p>
              <img
                className={`apr profilePicture ${dropdown ? "move" : ""}`}
               src={profile? profile.avatar: ""}
              />
            </div>
            {dropdown ? (
              <ul className="menu">
                <div className="dropDownheading">
                  <img
                    className="profilePicturedrp"
                    src={
                      profile? profile.avatar: ""
                    }
                  />
                  <h5 >{profile? profile.name: ""}</h5>
                </div>
                <Link class="modifiedLink" href="../myProfile">
                <div className="menu-item">
                  <CgProfile className="icons" />
                  <a>My Profile</a>
                </div>
                </Link>
                <div className="menu-item">
                  <FaRegEdit className="icons" />
                  <a>Edit Profile</a>
                </div>
                <div className="menu-item">
                  <FcLike className="icons" />
                  <a>Liked</a>
                </div>
                <div className="menu-item">
                  <IoMdSettings className="icons" />
                  <a>Settings</a>
                </div>
                <div  onClick={() => logout()} className="menu-item last">
                  <BiLogOut
                   
                    className="icons lastIcon"
                  />
                  <a className="logout">Logout</a>
                </div>
              </ul>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="responsive">
          <div className="hamburger_container">
            <div className="Hamburger" onClick={menu}>
              <div className="Burger"></div>
              <div className="Burger"></div>
              <div className="Burger"></div>
            </div>
          </div>

          {open ? (
            <div className="Menu_Links">
              <AiOutlineCloseCircle className="close_icon" onClick={menu} />
              <h3 href="#">About</h3>
              <h3 href="#">OpenAi</h3>
              <h3 href="#">FAQ</h3>
              <button onClick={()=>sharePage()}>Share</button>         
              {}
              <Link href="../SignInPage/SignIn">
              <button>Sign In</button>
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>

      </div>
    );
  }
}

export default Header;
