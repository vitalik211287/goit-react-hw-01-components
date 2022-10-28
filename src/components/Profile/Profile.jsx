import PropTypes from 'prop-types';
import css from './Profile.module.css'

function Profile(props) {
  const { avatar, username, tag, location, followers, views, likes } = props;
    return (
      <div className={css.profile}>
        <div className={css.description}>
          <img src={avatar} alt={username} className={css.avatar} />
          <p className={css.name}>{username}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>

          <ul className={css.stats}>
            <li className={css.item}>
              <span className={css.label}>Followers </span>
              <span className={css.quantity}>{followers}</span>
            </li>
            <li className={css.item}>
              <span className={css.label}>Views </span>
              <span className={css.quantity}>{views}</span>
            </li>
            <li className={css.item}>
              <span className={css.label}>Likes </span>
              <span className={css.quantity}>{likes}</span>
            </li>
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
