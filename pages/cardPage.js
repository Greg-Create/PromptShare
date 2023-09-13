import Header from "./Components/Header/Header";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { useSupabaseClient, useSession } from "@supabase/auth-helpers-react";
import { useProfile, UserProvider } from "./Components/contexts/UserContext";
import Link from "next/link";
import { FaLock } from "react-icons/fa";
import Comments from "./Components/comments/comments";

function cardPage() {
  const router = useRouter();
  const postId = router.query.id;
  const authorIds = router.query.author;
  const supabase = useSupabaseClient();
  const [card, setCard] = useState(null);
  const [author, setAuthor] = useState(null);
  const profile = useProfile();
  const session = useSession();

  useEffect(() => {
    if (!postId) {
      return;
    }

    supabase
      .from("posts")
      .select()
      .eq("id", postId)
      .then((result) => {
        if (result.error) {
          throw result.error;
        }
        if (result.data) {
          setCard(result.data[0]);
        }
      });
  }, [postId]);

  useEffect(() => {
    if (!authorIds) {
      return;
    }

    supabase
      .from("profiles")
      .select()
      .eq("id", authorIds)
      .then((result) => {
        if (result.error) {
          throw result.error;
        }
        if (result.data) {
          setAuthor(result.data[0]);
        }
      });
  }, [authorIds]);

  return (
    <div>
      <Header />
      <div className="prompPageContainer">
        <div className="cardPromp">
          <h2>{card?.prompTitle}</h2>
          <div className="prompdecription">
            <p>{card?.prompt}</p>
          </div>
          <div>
            <h4>Comments</h4>

            {session ? (
              <Comments id={postId} />
            ) : (
              <div className="locked">
                <FaLock className="lockedIcon" />
                <p>
                  <Link href="/SignIn">Login</Link> to comment
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="userContainer">
          <img className="updateprofilePics" src={author?.avatar} />
          <h3>{author?.name}</h3>

          <p>{author?.about}</p>
        </div>
      </div>
    </div>
  );
}

export default cardPage;
