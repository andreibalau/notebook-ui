import React from "react";
import "./App.css";
import AccountPageContainer from "./containers/account-page-container/account-page-container";

class App extends React.Component {

  render() {
    return (
      <div className="appContainer">
        <AccountPageContainer />
      </div>
    );
  }
}

export default App;
