/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from "react";
import "./dashboardlayout.scss";
import AllAccounts from "../../Pages/AllAccounts";
import {
  Switch,
  Route,
  useLocation,
  Redirect,
  useHistory,
  Link
} from "react-router-dom";
import Invoicing from "../../Pages/Invoicing";
import Sidebar from "../Sidebar";
import { useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import ExpandMore from "@material-ui/icons/ExpandMore";
import CurrentAccounts from "../../Pages/CurrentAccounts";
import SavingsAccounts from "../../Pages/SavingsAccounts";
import TaxAccounts from "../../Pages/TaxAccounts";
import Security from "../../Pages/Security";
import Support from "../../Pages/Support";
import Profile from "../../Pages/Profile";
import Settings from "../../Pages/Settings";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import useOutsideClicks from "../../hooks/useOutsideClicks";

const initialSideBarItems = [
  {
    id: 1,
    name: "accounts",
    label: "Accounts",
    link: "/",
    open: false,
    items: [
      { id: 10, name: "all", label: "All", link: "/accounts/all" },
      { id: 2, name: "current", label: "Current", link: "/accounts/current" },
      { id: 3, name: "savings", label: "Savings", link: "/accounts/savings" },
      { id: 4, name: "tax", label: "Tax", link: "/accounts/tax" }
    ]
  },
  {
    id: 5,
    name: "invoice",
    label: "Invoicing",
    link: "/invoicing",
    open: false
  },
  {
    id: 6,
    name: "account-management",
    label: "Account Management",
    link: "/account-management",
    open: false,
    items: [
      {
        id: 2,
        name: "settings",
        label: "Settings",
        link: "/settings"
      }
    ]
  },
  {
    id: 7,
    name: "profile",
    label: "My Profile",
    link: "/profile",
    open: false
  },
  {
    id: 8,
    name: "Profile",
    label: "Security",
    link: "/security",
    open: false
  },
  { id: 9, name: "support", label: "Support", link: "/support", open: false }
];

const DashboardLayout = () => {
  const [sideBarItems, setSideBarItems] = useState(initialSideBarItems);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showMenu, setShowMenu] = useState();
  let mobileRef = useRef(null);
  let testRef = useRef(null);
  const [isOutside, clickTarget] = useOutsideClicks([mobileRef, testRef]);
  let location = useLocation();
  let history = useHistory();

  useEffect(() => {
    setSideBarItems(items => {
      return items.map(item => {
        if (location.pathname.includes(item.name)) {
          return { ...item, open: true };
        }
        return item;
      });
    });
  }, [location.pathname]);

  useEffect(() => {
    if (isOutside) {
      setShowMenu(false);
    }
  }, [clickTarget, isOutside]);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <div className="mobile__container">
          <button
            className="btn mobile"
            onClick={() => setShowMenu(prev => !prev)}
            ref={testRef}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 125"
            >
              <path d="M63.8,55.5H19c-3,0-5.5-2.5-5.5-5.5v0c0-3,2.5-5.5,5.5-5.5h44.9c3,0,5.5,2.5,5.5,5.5v0C69.3,53,66.9,55.5,63.8,55.5z" />
              <path d="M44.4,86.9H19c-3,0-5.5-2.5-5.5-5.5v0c0-3,2.5-5.5,5.5-5.5h25.4c3,0,5.5,2.5,5.5,5.5v0C49.9,84.5,47.4,86.9,44.4,86.9z" />
              <path d="M81.3,24H19c-3,0-5.5-2.5-5.5-5.5v0c0-3,2.5-5.5,5.5-5.5h62.4c3,0,5.5,2.5,5.5,5.5v0C86.8,21.5,84.4,24,81.3,24z" />
            </svg>
          </button>
        </div>
        <button className="btn back" onClick={() => history.goBack()}>
          <img src="/back.svg" alt="Go back" />
        </button>
        <div className="dashboard__header-message">
          <img src="/envelop.svg" alt="Message" />
        </div>
        <div className="dashboard__header-user">
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            fontFamily={"Gilroy"}
          >
            <img src="/user.svg" alt="User" />
            <span>Victor Shiwani</span>
            <ExpandMore />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={Link} to={"/profile"}>
              Profile
            </MenuItem>
            <MenuItem onClick={handleClose} component={Link} to={"/settings"}>
              My Account
            </MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </header>
      <Sidebar
        items={sideBarItems}
        setSideBarItems={setSideBarItems}
        active={showMenu}
        sidebarRef={mobileRef}
        setShowMenu={setShowMenu}
        pathname={location.pathname}
      />
      <main className={`${showMenu ? "disabled" : ""} dashboard__main`}>
        <Route
          render={({ location }) => {
            return (
              <TransitionGroup component={null}>
                <CSSTransition
                  timeout={300}
                  classNames="fade"
                  key={location.key}
                >
                  <Switch>
                    <Route path="/" exact>
                      <AllAccounts />
                    </Route>
                    <Route path="/accounts/all" exact>
                      <AllAccounts />
                    </Route>
                    <Route path="/invoicing" exact>
                      <Invoicing />
                    </Route>
                    <Route path="/support" exact>
                      <Support />
                    </Route>
                    <Route path="/security" exact>
                      <Security />
                    </Route>
                    <Route
                      path="/account-management"
                      render={() => <Redirect to={"/settings"} />}
                    ></Route>
                    <Route path="/settings" exact>
                      <Settings />
                    </Route>
                    <Route path="/profile" exact>
                      <Profile />
                    </Route>
                    <Route path="/accounts/current" exact>
                      <CurrentAccounts />
                    </Route>
                    <Route path="/accounts/savings" exact>
                      <SavingsAccounts />
                    </Route>
                    <Route path="/accounts/tax" exact>
                      <TaxAccounts />
                    </Route>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
      </main>
    </div>
  );
};

export default DashboardLayout;
