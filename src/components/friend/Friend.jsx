import  './friend.css';


export default function Friend(props) {
  return <li className="sidebarFriend">
  <img src={props.user.profilePicture} alt="" className="sidebarFriendImg" />
  <span className="sidebarFriendName">
      {props.user.username}
  </span>
</li>
}
