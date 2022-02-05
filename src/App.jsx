import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Account from "components/Account/Account";
import Chains from "components/Chains";
import Wallet from "components/Wallet";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./App.css";
import "./style.css";
import MenuItems from "./components/MenuItems";
import Navbar from "view/Header/Navbar";
import Home from "pages/Home";
import About from "pages/About";

const App = () => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    const connectorId = window.localStorage.getItem("connectorId");
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading)
      enableWeb3({ provider: connectorId });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <>
      <Router>
        <Navbar
          MenuItems={<MenuItems />}
          Chains={<Chains />}
          Balance={<NativeBalance />}
          Account={<Account />}
        />

        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>
            <Route path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Login Button" button</>
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default App;
