import React from "react";
import "./avatar.css"

class Avatar extends React.Component{

    render(){
        return(
                <img className="avatar" src={require("../../../../mock/images/avatar.jpg")} alt="avatar"/>
        );
    }   
}

export default Avatar;