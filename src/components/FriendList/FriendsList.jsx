import FriendList from "./FriendList";
import css from "./FriendList.module.css";
export default function FriendsList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <li className={css.friendListItem} key={friend.id}>
          <FriendList friend={friend} />
        </li>
      ))}
    </ul>
  );
}
