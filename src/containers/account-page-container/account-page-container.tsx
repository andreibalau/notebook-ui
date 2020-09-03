import React from "react";
import "./account-page-container.css";
import HeaderNavBar from "../../components/account-page-components/header-navbar/header-navbar";
import MenuListNavBar from "../../components/account-page-components/menulist-navbar/menulist-navbar";

class AccountPageContainer extends React.Component {
  render() {
    return (
        <div className="accountContainer">
            <div className="navigationBar">
                <div className="headerNavBar">
                    <HeaderNavBar />
                </div>
                <div className="menuListNavBar">
                    <MenuListNavBar />
                </div>
                <div className="footerNavBar"> Footer Nav Bar</div>
            </div>
            <div className="accountContent">content</div>
        </div>
        );
  }
}

export default AccountPageContainer;