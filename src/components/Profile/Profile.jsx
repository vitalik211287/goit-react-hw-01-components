import PropTypes from 'prop-types';
import css from './Profile.module.css';

function Profile(props) {
  const { avatar, username, tag, location, followers, views, likes, stats } =
    props;
  console.log({ stats });
  console.log({ username });
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
        <ul className={css.stats}>
          {Object.entries(stats).flatMap(stat => {
            return (
              <li className={css.item} key={stat[1]}>
                <span className={css.label}>{stat[0]} </span>
                <span className={css.quantity}>{stat[1]}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

export default Profile;
