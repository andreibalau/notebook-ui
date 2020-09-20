import React from "react";
import "./avatar.css"

type AvatarProps = {avatar: string};
type AvatarState = {};
class Avatar extends React.Component<AvatarProps,AvatarState>{

    render(){
        //the received avatar is an encoded base64 img
        return(
                <img className="avatar" src={this.props.avatar} alt="avatar"/>
        );
    }   
}

export default Avatar;