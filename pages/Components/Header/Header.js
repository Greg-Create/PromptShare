import react, { useState, useContext, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";
import { useSession } from "@supabase/auth-helpers-react";
import {CgProfile} from "react-icons/cg";
import {FaRegEdit} from "react-icons/fa"
import {FcLike} from "react-icons/fc"
import {IoMdSettings}from "react-icons/io"
import {BiLogOut} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"


function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown,setDropdown] = useState(false)
  const session = useSession()

  function menu() {
    setOpen(!open);
  }

  useEffect(()=> {
    console.log(session)
  })

  /*const navigate = useNavigate();
  const redirect = () => {
    navigate("/");
  };*/
  

  if(!session){
  return (
    
    <div className="Header">
      <Link class="homebtn" href="/"><h3 >ChatGPT</h3></Link>

      <div className={`Links `}>
        <h3 href="#">About</h3>
        <h3 href="#">OpenAi</h3>
        <h3 href="#">FAQ</h3>
      </div>

      <div className={`buttons  `}>
        <Link href="../SharePage/Share">
        <button>Share</button>
        </Link>
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
            <button >Share</button>
            {}
            <button >Sign In</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  ); }else{
    return(
    <div className="Header">
      <Link class="homebtn" href="/"><h3 >ChatGPT</h3></Link>

      <div className={`Links `}>
        <h3 href="#">About</h3>
        <h3 href="#">OpenAi</h3>
        <h3 href="#">FAQ</h3>
      </div>

      <div className={`buttons  `}>
        <Link href="../SharePage/Share">
        <button>Share</button>
        </Link>
        <div  onClick={() =>setDropdown(!dropdown)}>
          <div className="profile">
            <p  className={`${dropdown? "close" : "hide"}`}>Close</p>
          <p className={`${dropdown? "move" : ""}`}>Gregory Ovis</p>
        <img className={`profilePicture ${dropdown? "move" : ""}`} src={"https://xsgames.co/randomusers/assets/avatars/male/46.jpg"}/>
        </div>
        {dropdown? 
       <ul className="menu">
        <div className="heading">
 <img className="profilePicturedrp" src={"https://xsgames.co/randomusers/assets/avatars/male/46.jpg"}/>
 <h5>Gregory Ovis</h5>  
 </div>    
 
  <div className="menu-item">
        <CgProfile className="icons" />
         <a>My Profile</a> 
       </div>
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
       <div className="menu-item last">
        <BiLogOut className="icons" />
         <a>Logout</a> 
       </div>
      
     </ul> : ""}
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
            <button >Share</button>
            {}
            <button >Sign In</button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
    )
  }
}

export default Header;
