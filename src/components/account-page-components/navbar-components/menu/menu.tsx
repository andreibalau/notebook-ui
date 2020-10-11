import "./menu.css";
import React from "react";
import MenuItem from "./menu-item/menu-item";

interface MenuProps {
    items: string[]
    itemslogo?: string[] 
}
interface MenuState {}

class Menu extends React.Component<MenuProps,MenuState>{
    private items:string[];
    private itemsLogo?: string[];
    constructor(props: MenuProps){
        super(props);
        this.items = props.items;
        this.itemsLogo = props.itemslogo;
    }

    private hasItemsLogo = (list: string[]|undefined):boolean => {
        if(list !== undefined && list.length>0){
            return true;
        }else {
            return false;
        }
    };

    render(){
        return <ul id="menu-ul">
                    { this.items.map(item => <MenuItem key={"menu-key-id-" + item} item={item} 
                        itemsLogo={this.hasItemsLogo(this.itemsLogo) ? this.itemsLogo![this.items.indexOf(item)] : undefined}/>) }
                </ul>   
    }
}

export default Menu;