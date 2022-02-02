import { Users } from "../../dummyData";
import Online from "../online/Online";
import "./rightbar.css"

export default function Rightbar() {
  const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
}
  return (<div className="rightbar">
    <div className="rightbarWrapper">
      <div className="birthdayContainer">
        <img className="birthdayImg" src="assets/gift.png" alt="" />
        <span className="birthdayText"><b>Pola Foster </b> and <b>3 other friend</b> have a birthday to day</span>
      </div>
      <img className="rightbarAd" src="assets/ad.png" alt="" />
      <h4 className="rightbarTitle">Online friends</h4>
      <ul className="rightbarFriendList">
        { Users.map(user => {
            return <Online key={uid} user ={user} />
          })}
      </ul>
    </div>
  </div>
  );
}
