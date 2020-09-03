import "./menulist-navbar.css";
import React from "react";
class MenuListNavBar extends React.Component{

    render(){
        return <ul>
                    <li>Favorites</li>
                    <li>Notes</li>
                    <li>Notebooks</li>
                    <li>Groups</li>
            </ul>   
    }
}

export default MenuListNavBar;