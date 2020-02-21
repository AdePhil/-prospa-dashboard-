import React, { useEffect } from "react";
import "./sidebar.scss";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import { NavLink, useHistory } from "react-router-dom";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";

const Sidebar = ({ items, setSideBarItems, active, sidebarRef }) => {
  let history = useHistory();
  function toggleCollapse(id) {
    setSideBarItems(items => {
      return items.map(item => {
        if (item.id === id) {
          return { ...item, open: !item.open };
        }
        return item;
      });
    });
  }

  return (
    <aside
      className={`${active ? "active" : ""} dashboard__side-nav`}
      ref={sidebarRef}
    >
      <div className="logo">
        <img src="/logo2.svg" alt="Prospa logo" />
        <h3>Prospa</h3>
      </div>
      <nav className="side-nav">
        <List disablePadding dense>
          {items.map(
            ({ label, id, name, link, items: subItems, open, ...rest }) => (
              <li key={id}>
                <ListItem
                  {...rest}
                  component={NavLink}
                  activeClassName="active"
                  className="side-nav-item"
                  exact
                  to={link}
                  onClick={() => toggleCollapse(id, link)}
                >
                  <img src={`/${name}.svg`} alt="Accounts" />
                  <span>{label}</span>
                  {!Array.isArray(subItems) ? null : open ? (
                    <div className="drop-down">
                      <ExpandLess />
                    </div>
                  ) : (
                    <div className="drop-down">
                      <ExpandMore />
                    </div>
                  )}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  {Array.isArray(subItems) ? (
                    <List disablePadding>
                      {subItems.map(subItem => (
                        <ListItem
                          key={subItem.id}
                          component={NavLink}
                          activeClassName="active"
                          className="side-nav-item"
                          exact
                          to={subItem.link}
                          style={{ paddingLeft: "58px" }}
                        >
                          {/* <img src={`/${subItem.name}.svg`} alt="Accounts" /> */}
                          <span>{subItem.label}</span>
                        </ListItem>
                      ))}
                    </List>
                  ) : null}
                </Collapse>
              </li>
            )
          )}
        </List>
        <div className="circle">
          <img src="/circle.svg" alt="circle" />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
