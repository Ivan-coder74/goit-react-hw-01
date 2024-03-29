import css from "./Profile.module.css";
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileContainer}>
      <div>
        <div className={css.profileContent}>
          <img className={css.profileImage} src={image} alt={name} />
          <p className={css.profileName}>{name}</p>
          <p className={css.profileTag}>{tag}</p>
          <p className={css.profileTag}> {location}</p>
        </div>

        <ul className={css.profileList}>
          <li className={css.profileItem}>
            <span className={css.profileitemSpan1}>Followers:</span>
            <span className={css.profileitemSpan1}>{stats.followers}</span>
          </li>
          <li className={css.profileItem}>
            <span className={css.profileitemSpan1}>Views:</span>
            <span className={css.profileitemSpan1}>{stats.views}</span>
          </li>
          <li className={css.profileItem}>
            <span className={css.profileitemSpan1}>Likes:</span>
            <span className={css.profileitemSpan1}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
