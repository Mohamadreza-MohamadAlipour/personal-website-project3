import React from "react";

const ProfileUser = ({ imgProfile, profileName, profileInfo }) => {
  return (
    <div className="profile">
      <div className="profile-img">
        <img src={imgProfile} alt="" />
      </div>
      <div>
        <div className="profile-name">
          <p>{profileName}</p>
        </div>
      </div>
      <div>
        <div className="profile-info">
          <p>{profileInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileUser;
