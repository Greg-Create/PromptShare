import { useEffect, useState } from "react";
import { useProfile } from "../contexts/UserContext";
import { AiOutlineSend } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import ReactTimeAgo from "react-time-ago";
import en from "javascript-time-ago/locale/en";
import TimeAgo from "javascript-time-ago";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaRegComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

TimeAgo.addLocale(en);

function comments(props) {
  const profile = useProfile();
  const [commentText, setCommentText] = useState("");
  const supabase = useSupabaseClient();
  const [comments, setComments] = useState(null);
  const notify = () => toast.success("You Shared A Comment");
  const [reply, setReply] = useState(false);
  const [valid, setValid] = useState(false);
  const [select, setSelect] = useState();
  const [replyText,setReplyText] = useState("");
  const [replies,setReplies] = useState(null)

  useEffect(() => {
    fetchComments();
  },[]);

  function fetchComments() {
    supabase
      .from("commentd")
      .select("id,created_at,content,commenter,post,profiles(avatar,name)")
      .eq("post", props.id)
      .then((result) => {
        if (result.error) {
          throw result.error;
        }
        if (result.data) {
          setComments(result.data);
        }
      });
  }

  async function submitComment() {
    await supabase
      .from("commentd")
      .insert({
        content: commentText,
        commenter: profile.id,
        post: props.id,
      })
      .then((response) => {
        console.log(response);
      });

    await fetchComments();
    await setCommentText("");
    await notify();
  }

  async function submitReply(id){
    await supabase
      .from("commentd")
      .insert({
        content: replyText,
        commenter: profile.id,
        post: props.id,
        reply:id,
      })
      .then((response) => {
        console.log(response);
      });

      await fetchReplies()
  }

  async function fetchReplies(){
    supabase
    .from("commentd")
    .select("id,created_at,content,commenter,post,profiles(avatar,name)")
    .eq("reply", props.id)
    .then((result) => {
      if (result.error) {
        throw result.error;
      }
      if (result.data) {
        setReplies(result.data);
      }
    });
  }
  


  function toggle(index) {
    setSelect(index)
  }

  function togglehide(index) {
    if (select === index) {
      return "commentContainerReply";
    } else {
      return "hidden";
    }
  }

  return (
    <div>
      <ToastContainer pauseOnHover={false} />

      <div className="commentContainer">
        <img className="commentAvatar" src={profile?.avatar} />
        <div className="commentSubContainer">
          <p>
            {profile?.name} {profile?.lastName}
          </p>
          <div className="commentInputContainer">
            <input
              className="commentInput"
              placeholder="Leave a comment"
              value={commentText}
              onChange={(ev) => setCommentText(ev.target.value)}
              type="text"
            />
            <div className="commentIconContainer" onClick={submitComment}>
              <AiOutlineSend />
            </div>
          </div>
        </div>
      </div>
      {comments
        ? comments.map((comment, key) => (
            <div className="comments">
              <div className="authorInfo">
                <img className="commentAvatar2" src={comment.profiles.avatar} />
                <div>
                  <p className="authorname">
                    {comment.profiles.name}
                    <p className="subCommentHeading">commented</p>
                  </p>
                  <div className="time">
                    {" "}
                    <ReactTimeAgo
                      date={new Date(comment.created_at).getTime()}
                    />{" "}
                  </div>
                </div>
              </div>
              <div className="commentInfo">
                <div className="commentBody">
                  <p>{comment.content}</p>
                </div>
                <div className="commentActions">
                  <div className="commentLikes action">
                    <FcLike />
                  </div>
                  <div className="commentLikes action" onClick={() => toggle(key)}>
                    <FaRegComment />
                  </div>
                </div>
              </div>
           
                <div className={`${togglehide(key)}  `} >
                  <img className="commentAvatar" src={profile?.avatar} />
                  <div className="commentSubContainer">
                    <p>
                      {profile?.name} {profile?.lastName}
                    </p>
                    <div className="commentInputContainer">
                      <input
                        className="commentInput"
                        placeholder="Leave a Reply"
                        value={replyText}
                        onChange={(ev) => setReplyText(ev.target.value)}
                        type="text"
                      />
                      <div
                        className="commentIconContainer"
                        onClick={() => submitReply(comment.id)}
                      >
                        <AiOutlineSend />
                      </div>
                    </div>
                  </div>
                </div>
    {replies? replies.map((reply,id) => (<div>
        
         </div>)) : ""}
            </div>
          ))
        : ""}
    </div>
  );
}

export default comments;
