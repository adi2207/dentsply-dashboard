import "../Navbar/Navbar.css";
import avatar from "../../Assets/avatar.jpg";
import React from "react";

// const teams_data = [
//     "tottenham",
//     "arsenal",
//     "man utd",
//     "liverpool",
//     "chelsea",
//     "west ham"
//   ];

 
const Navbar = ({ sidebarOpen, openSidebar}) => {
    // const [teams, setTeams] = React.useState(teams_data);
    // const [search, setSearch] = React.useState("");
    return(
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars"></i>
            </div>
            <div className="navbar__left">
                {/* <a href="#">Subscribers</a>
                <a href="#">Video Management</a> */}
                {/* <a className="active_link" href="#">Admin</a> */}
            </div>
            <div className="navbar__right">
            {/* <input
        onChange={e => {
          const test = teams_data.filter(team => {
            return team.toLowerCase().includes(e.target.value.toLowerCase());
          });

          // uncomment line below and teams is logged as I want
          setTeams(test);
          setSearch(e.target.value);
        }}
        type="text"
        value={search}
      />
      {teams.map(team => (
        <p>{team}</p>
      ))} */}
                <a href="#">
                    <i className="fa fa-clock-o"></i>
                </a>
                <a href="#">
                    <img width="30" src={avatar} alt="avatar"></img>
                </a>
               
                       </div>
        </nav>
    )
}

export default Navbar;