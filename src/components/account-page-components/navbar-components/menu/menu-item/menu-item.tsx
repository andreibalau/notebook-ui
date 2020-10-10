import React from "react";
import "./menu-item.css";

interface MenuItemProps{
    item:string,
    itemsLogo?: string
    
}
interface MenuItemState{}

class MenuItem extends React.Component<MenuItemProps,MenuItemState> {
    private item:string;
    private itemsLogo?: string;

    constructor(props:MenuItemProps){
        super(props)
        this.item = props.item;
        this.itemsLogo = props.itemsLogo;
    }

    render(){
        return <li>{this.itemsLogo ? <img className="menu-item-logo" src={this.itemsLogo} alt={this.item + "-icon"}/> : undefined}{this.item}</li>
    }
}

export default MenuItem