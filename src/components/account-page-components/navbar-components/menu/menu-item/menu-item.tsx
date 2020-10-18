import React from "react";
import "./menu-item.css";

interface MenuItemProps{
    item:string,
    itemIcon?: string 
}
interface MenuItemState{
    itemIcon?: string
}

class MenuItem extends React.Component<MenuItemProps,MenuItemState> {
    private item:string;

    constructor(props:MenuItemProps){
        super(props)
        this.item = props.item;
        this.state = {
            itemIcon : this.props.itemIcon
        }
    }

    componentWillReceiveProps(nextProps: MenuItemProps ) {
        this.setState({ itemIcon: nextProps.itemIcon });  
    }
    
    render(){
        return <li>{this.state.itemIcon ? <img className="menu-item-icon" src={this.state.itemIcon} alt={this.item + "-icon"}/> : undefined}{this.item}</li>
    }
}

export default MenuItem