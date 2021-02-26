import '../Sidebar/Sidebar.css';
import avatar from "../../Assets/avatar.jpg";


const Sidebar = ({sidebarOpen, closeSidebar }) => {
    return(
        <div className={sidebarOpen?"sidebar-responsive":""} id="sidebar">
         <div className="sidebar__title">
            <div className="sidebar__img">
                 <img src={avatar} alt="logo"/>
                 <div className="sidebar__user ">
                    <h5 href="#">Welcome</h5>
                    <a href="#">Denstply</a>
                </div>
            </div>
             <i className="fa fa-times" 
             id="sidebarIcon" 
             onClick={() => closeSidebar()}></i>
         </div>
             <div className="sidebar__menu">
                 <div className="sidebar__link ">
                     <i className="fa fa-home"></i>
                     <a href="#">Home</a>
                 </div>
                 {/* <div className="sidebar__title ">
                    <h4>MNG</h4>
                </div> */}
                 <div className="sidebar__link">
                     <i className="fa fa-user-secret"></i>
                     <a href="#">Dashboard</a>
                 </div>
                 <div className="sidebar__link">
                     <i className="fa fa-building-o"></i>
                     <a href="#">User Profile</a>
                 </div>
                 <div className="sidebar__link">
                     <i className="fa fa-wrench"></i>
                     <a href="#">Coming Soon</a>
                 </div>
                 {/* <div className="sidebar__link">
                     <i className="fa fa-archive"></i>
                 </div>
                 <div className="sidebar__link">
                     <i className="fa fa-handshake-o"></i>
                 </div>
                 <h2>LEAVE</h2>
                 <div className="sidebar__link">
                     <i className="fa fa-question"></i>
                 </div>
                 <div className="sidebar__link">
                     <i className="fa fa-sign-out"></i>
                 </div>
                 <div className="sidebar__link">
                     <i className="fa fa-calendar-check-o"></i>
                 </div>
                 <div className="sidebar__link">
                     <i className="fa fa-files-o"></i>
                 </div>
                 <h2>PAYROLL</h2>
                 <div className="sidebar__link">
                     <i className="fa fa-money"></i>
                 </div>
                 <div className="sidebar__link">
                     <i className="fa fa-briefcase"></i>
                 </div> */}
                 <div className="sidebar__logout">
                     <i className="fa fa-power-off"></i>
                     <a href="#">Log out</a>
                 </div>
             </div>
        </div>

    )
}

export default Sidebar;