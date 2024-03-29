import css from "./FriendList.module.css";
export default function FriendList({ friend: { avatar, name, isOnline } }) {
  const amountClassNames = isOnline ? css.online : css.offline;
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={amountClassNames}>{isOnline ? "online" : "offline"}</p>
    </div>
  );
}
