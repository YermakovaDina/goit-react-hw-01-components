import PropTypes from "prop-types";
import "./Painting.css";
import defaultImg from "../../components/default.jpg";

export default function Painting({
  name,
  tag,
  location,
  avatar = defaultImg,
  stats,
}) {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="Аватар пользователя"
          className="profile__avatar"
          width="250"
        />
        <p className="profile__name">{name}</p>
        <p className="profile__tag">@{tag}</p>
        <p className="profile__location">{location}</p>
      </div>

      <ul className="profile__stats">
        <li className="profile__stats-item">
          <span className="label">Followers </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className="profile__stats-item">
          <span className="label">Views </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className="profile__stats-item">
          <span className="label">Likes </span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Painting.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
