import "./menu.css";
import React from "react";
class Menu extends React.Component{

    render(){
        return <ul>
                    <li>Favorites</li>
                    <li>Notes</li>
                    <li>Notebooks</li>
                    <li>Groups</li>
                </ul>   
    }
}

export default Menu;