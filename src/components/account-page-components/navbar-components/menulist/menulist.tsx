import "./menulist.css";
import React from "react";
class MenuList extends React.Component{

    render(){
        return <ul>
                    <li>Favorites</li>
                    <li>Notes</li>
                    <li>Notebooks</li>
                    <li>Groups</li>
                </ul>   
    }
}

export default MenuList;