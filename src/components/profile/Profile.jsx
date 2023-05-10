import css from './Profile.module.css';
export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.text}>@{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.items}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={css.items}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={css.items}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
