import React from "react"
import Stats from "./Stats"
import style from "./Profile.module.scss"

const Profile = ({ name, tag, location, avatar, stats }) => {
    return (
<div className={style.profile}>
  <div className={style.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={style.avatar}
    />
    <p className={style.name}>{name}</p>
    <p className={style.tag}>@{tag}</p>
    <p className={style.location}>{location}</p>
  </div>
    <Stats {...stats}/>
</div>
    );
};

export default Profile 