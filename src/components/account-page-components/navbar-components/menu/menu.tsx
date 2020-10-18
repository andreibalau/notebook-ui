import "./menu.css";
import React from "react";
import MenuItem from "./menu-item/menu-item";

interface MenuProps {
    items: string[],
    mediaTypeItemsIcons?: MenuMediaTypeScreenIcons
}
interface MenuState{
    itemsIcons: string[] 
}

export interface MenuMediaTypeScreenIcons {
    tablet: string[],
    laptop: string[], 
    s4k : string[]
}

class Menu extends React.Component<MenuProps,MenuState>{
    private items:string[];
    private mediaTypeItemsIcons?: MenuMediaTypeScreenIcons;
    
    constructor(props: MenuProps){
        super(props);
        this.items = props.items;
        this.mediaTypeItemsIcons = props.mediaTypeItemsIcons;
        this.state = {
            itemsIcons: this.mediaTypeItemsIcons ? this._responsiveFetchOfMenuIcons(this.mediaTypeItemsIcons) : []
        }
    }
    
    componentDidMount() {
        window.addEventListener('resize', this._updateIconItemsForMediaTypeScreen);
      }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this._updateIconItemsForMediaTypeScreen);
    }

    private _updateIconItemsForMediaTypeScreen = () => {
        if (this.mediaTypeItemsIcons!=null){
            this.setState({ itemsIcons : this._responsiveFetchOfMenuIcons(this.mediaTypeItemsIcons)});
        }
    };

    private _responsiveFetchOfMenuIcons = (iconItems:MenuMediaTypeScreenIcons): string[] => {
        if(window.innerWidth<=768){
            return iconItems.tablet;
        }else if(window.innerWidth<=1920 && window.innerWidth>768){
            return iconItems.laptop;
        }else if(window.innerWidth>1920){
            return iconItems.s4k;
        }else{
            return []
        }
      }

    render(){
        return <ul id="menu-ul">
                    { this.items.map(item => <MenuItem key={"menu-key-id-" + item} item={item} 
                        itemIcon={ this.state.itemsIcons[this.items.indexOf(item)] }/>) }
                </ul>   
    }
}

export default Menu;