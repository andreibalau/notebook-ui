import React from "react";
import "./account-page-container.css";
import NavBarContainer from './navbar-container/navbar-container';

class AccountPageContainer extends React.Component {
  render() {
    return (
        <div className="accountContainer">
            <div className="navigationBar">
                <NavBarContainer/>
            </div>
            <div className="accountContent">content</div>
        </div>
        );
  }
}

export default AccountPageContainer;