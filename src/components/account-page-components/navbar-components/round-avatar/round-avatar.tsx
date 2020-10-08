import React from "react";
import "./round-avatar.css"

type RoundAvatarProps = {avatar: string};
type RoundAvatarState = {};
class RoundAvatar extends React.Component<RoundAvatarProps,RoundAvatarState>{

    render(){
        //the received avatar is an encoded base64 img
        return(
                <img className="avatar" src={this.props.avatar} alt="avatar"/>
        );
    }   
}

export default RoundAvatar;