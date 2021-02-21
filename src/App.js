import React from "react"
import Profile from "./components/ProfileUser/Profile"
import user from "./base/profile.json"
import Statistics from "./components/Statistics/Statistics"
import StatisticsBase from "./base/statistics.json"
import FriendList from "./components/Friends/Friends"
import friends from "./base/friends.json";

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
   <FriendList friends={friends} />,
 </>
 )
}
export default App