import userData from "../userData.json";
import friends from "../friends.json";
import Profile from "./Profile/Profile";
import FriendsList from "../components/FriendList/FriendsList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/transactionHistory.json";
import css from "./App.module.css";
export default function App() {
  return (
    <div className={css.container}>
      <>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />

        <FriendsList friends={friends} />
        <TransactionHistory items={transactions} />
      </>
    </div>
  );
}
