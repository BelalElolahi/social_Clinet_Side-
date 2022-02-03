import { Users } from "../../dummyData";
import Online from "../online/Online";
import "./rightbar.css"

export default function Rightbar(props) {
  const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

const HomeRightbar=()=>{
   return <>
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
   </>
}
const ProfileRightbar =()=>{
  return(<>
       <h4 className="rightbarTile">User Information</h4>
       <div className="rightbarInfo">
         <div className="rightbarInfoItem">
           <span className="rightbarInfoKey">City:</span>
           <span className="rightbarInfoValue">New york</span>
         </div>
         <div className="rightbarInfoItem">
           <span className="rightbarInfoKey">From:</span>
           <span className="rightbarInfoValue">New york</span>
         </div>
         <div className="rightbarInfoItem">
           <span className="rightbarInfoKey">Relationship :</span>
           <span className="rightbarInfoValue">Single</span>

         </div>
       </div>
       <h4 className="rightbarTile">User Friends</h4>
         <div className="rightbarFollowings">
           <div className="rightbarFollowing">
             <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">OSam Moh</span>
           </div>
        
           <div className="rightbarFollowing">
             <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">OSam Moh</span>
           </div>

           <div className="rightbarFollowing">
             <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">OSam Moh</span>
           </div>

           <div className="rightbarFollowing">
             <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">OSam Moh</span>
           </div>

           <div className="rightbarFollowing">
             <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollowingName">OSam Moh</span>
           </div>

         </div>

  </>)
}  


  return (<div className="rightbar">
    <div className="rightbarWrapper">
      {props.profile ? <ProfileRightbar/> : <HomeRightbar/>}
     
    </div>
  </div>
  );
}
