import React from "react"
import Profile from "./components/ProfileUser/Profile"
import user from "./base/profile.json"
import Statistics from "./components/Statistics/Statistics"
import StatisticsBase from "./base/statistics.json"
import FriendList from "./components/Friends/Friends"
import Friends from "./base/friends.json";
import Transactions from './base/transactions.json';
import TransactionHistory from "./components/Transaction/Transaction"

const App  = () => {
  return ( 
    <>
<Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
   <Statistics items={StatisticsBase}/>,
   <FriendList friends={Friends} />,
   <TransactionHistory items={Transactions} />,
 </>
 )
}
export default App