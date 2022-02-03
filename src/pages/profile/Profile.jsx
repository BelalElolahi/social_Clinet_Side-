import './profile.css';
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
    return (
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">

                    <div className="profileRightTop">
                        <div className="proileCover">

                            <img src="assets/post/3.jpeg" alt=""
                                className="profileCoverImg" 
                                />
                            <img src="assets/person/7.jpeg" alt=""
                                className="profileUserImg" 
                                />
                        </div>
                        <div className="profileInfo">
                            <h4 className='ProfileInfoName'>Omar Moh</h4>
                            <span className='ProfileInfoDesc'>hello All</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>

            </div>


        </>

    )
}
