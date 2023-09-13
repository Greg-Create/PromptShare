import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import { useRouter } from "next/router";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Cards from "../components/Cards/Cards";

function profilePage() {
  const router = useRouter();
  const userId = router.query.id;
  const [profile, setProfile] = useState(null);
  const supabase = useSupabaseClient();
  const [cards, setCards] = useState(null);

  useEffect(() => {
    if (!userId) {
      return;
    }

    supabase
      .from("profiles")
      .select()
      .eq("id", userId)
      .then((result) => {
        if (result.error) {
          throw result.error;
        }
        if (result.data) {
          setProfile(result.data[0]);
        }
      });
  }, [userId]);

  useEffect(() => {
    if (!userId) {
      return;
    }

    supabase
      .from("posts")
      .select()
      .eq("author", userId)
      .then((result) => {
        if (result.error) {
          throw result.error;
        }
        if (result.data) {
          setCards(result.data);
        }
      });
  }, [userId]);

  return (
    <div>
      <Header />
      <div className="userProfilePage">
        <img className="userProfileAvatar" src={profile?.avatar} />
        <h3>
          {profile?.name} {profile?.lastname}
        </h3>
        <p className="about">{profile?.about}</p>
        <div className="profileCardsGrid">
          {cards
            ? cards.map((post) => (
                <Cards
                  id={post.id}
                  categories={post.categories}
                  question={post.prompTitle}
                  answer={post.prompt}
                  likes={post.likes}
                />
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}

export default profilePage;
