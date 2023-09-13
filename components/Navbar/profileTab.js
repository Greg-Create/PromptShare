import React from "react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useState, useEffect } from "react";
import { useProfile, useProfileUpdate } from "../contexts/UserContext";
import Puff from "react-spinners/PuffLoader";

function profileTab() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const profile = useProfile();
  const [editName, setEditName] = useState(null);
  const [editLastName, setEditLastName] = useState(null);
  const [editAbout, setEditAbout] = useState(null);
  const [prf, setprf] = useState(null);
  const [uploading, setUploading] = useState(false);
  const updateProfiles = useProfileUpdate();
  const [userLoading, setUserLoading] = useState(false);

  async function avatarChange(ev) {
    const file = ev.target.files ? ev.target.files[0] : null;
    console.log(file);

    if (file) {
      setUploading(true);
      const newName = Date.now() + file.name;
      const { data, error } = await supabase.storage
        .from("avatars")
        .upload(newName, file);
      if (error) throw error;
      if (data) {
        const url =
          process.env.NEXT_PUBLIC_SUPABASE_URL +
          "/storage/v1/object/public/avatars/" +
          data.path;
        supabase
          .from("profiles")
          .update({
            avatar: url,
          })
          .eq("id", session.user.id)
          .then((result) => {
            console.log(result);
            updateProfiles();
            setUploading(false);
          });
      }
    }
  }

  function updateUserProfile() {
    setUserLoading(true);
    if (editName !== null || editAbout !== null || editLastName !== null) {
      supabase
        .from("profiles")
        .update({
          name: editName ? editName : profile.name,
          about: editAbout ? editAbout : profile.about,
          lastname: editLastName ? editLastName : profile.lastname,
        })
        .eq("id", session.user.id)
        .then((result) => {
          console.log(result);
          setUserLoading(false);
        });
    }
  }

  return (
    <div className="myProfilePageContainer">
      <div className={`myProfileContainer ${userLoading ? "transparent" : ""}`}>
        {userLoading ? (
          <div className="loading2">
            {" "}
            <Puff
              className="loading"
              height="100"
              width="100"
              radius={1}
              color="#428cff"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          ""
        )}
        <h1>My Profile</h1>
        <div className="profileBlock">
          <h4>Your Details</h4>
          <div className="profileGrid">
            <div className="editName">
              <p>First Name</p>
              <input
                value={
                  editName !== null
                    ? editName
                    : profile
                    ? profile.name.includes(" ")
                      ? profile.name.substring(0, profile.name.indexOf(" "))
                      : profile.name
                    : ""
                }
                onChange={(e) => setEditName(e.target.value)}
                type="text"
              />
            </div>
            <div className="editName">
              <p>Last Name</p>
              <input
                type="text"
                value={
                  editLastName !== null
                    ? editLastName
                    : profile
                    ? profile.name.includes(" ")
                      ? profile.name.substring(profile.name.indexOf(" ") + 1)
                      : profile.lastname
                    : ""
                }
                onChange={(e) => setEditLastName(e.target.value)}
              />
            </div>

            <div className="editName">
              <p>Email</p>
              <input type="text" />
            </div>

            <div className="editName">
              <p>About Me</p>
              <textarea
                value={
                  editAbout !== null ? editAbout : profile ? profile.about : ""
                }
                onChange={(e) => setEditAbout(e.target.value)}
              />
            </div>

            <div className="editName">
              <p>Phone</p>
              <input type="text" />
            </div>

            <div className="editName">
              <p>Location</p>
              <input type="text" />
            </div>
            <button onClick={() => updateUserProfile()} className="updateBtn">
              Update
            </button>
          </div>
        </div>
      </div>
      <div className="profilePictureContainer">
        <img
          className={`${uploading ? "transparent" : "border"}`}
          src={profile ? profile.avatar : ""}
        />
        {uploading ? (
          <div className="loading">
            {" "}
            <Puff
              className="loading"
              height="80"
              width="80"
              radius={1}
              color="#428cff"
              ariaLabel="puff-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          ""
        )}
        <div className="uploadButton">
          <label className="uploadPrfButton">
            Upload Profile Pic
            <input onChange={avatarChange} type="file" className="hidden" />
          </label>
        </div>
      </div>
    </div>
  );
}

export default profileTab;
