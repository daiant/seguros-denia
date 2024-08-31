/* eslint-disable react/prop-types */
import "./avatar.css";
export default function Avatar({ src, alt, name, position }) {
  return (
    <div className="avatar">
      <img src={src} alt={alt} className="avatar_image" />
      <p>{name}</p>
      <p className="position">{position}</p>
    </div>
  );
}
