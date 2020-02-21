import React, { useState } from "react";
import Table from "../../Components/Table";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import ExpandMore from "@material-ui/icons/ExpandMore";
import "./accounts.scss";
const Accounts = ({ type }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [viewTransaction, setViewTransaction] = useState(false);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const showView = () => {
    setViewTransaction(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="account">
      <div className="account__details pd">
        <p>{type} account</p>
        <p>Sort code 12-20-10 Account no: 11223344</p>
        <div className="account__amount">
          <h1 className="account__amount-heading">₦250,234.96</h1>
          <button className="btn account__amount-btn">Make payment</button>
        </div>
        <Table
          data={{ date: "Friday 15 July 2019", isExportable: true }}
          setViewTransaction={showView}
        />
        <Table
          data={{ date: "Thursday 14 July 2019", isExportable: false }}
          setViewTransaction={showView}
        />
      </div>
      <div
        className={`${viewTransaction ? "active" : ""} account__transaction`}
      >
        <p className="account__transaction-text text-blue">Transfer</p>
        <p className="account__transaction-text">9:14PM, Feb 15, 2019</p>
        <button
          className="btn btn-close"
          onClick={() => setViewTransaction(false)}
        >
          &times;
        </button>
        <div className="account__transaction-details">
          <div className="account__transaction-details-icon">
            <img src="/house.svg" alt="House" />
          </div>
          <h3 className="account__transaction-amount">₦250,234.96</h3>
          <p className="account__transaction-text text-center">
            Rental Company
          </p>
          <div className="center-tag">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
              fontFamily={"Gilroy"}
              className="tag"
            >
              Office rent
              <ExpandMore />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose} fontFamily={"Gilroy"}>
                Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>

          <div className="account__transaction-user">
            <img src="/user.svg" alt="user" />
            <div>
              <p className="name">Jason Martins</p>
              <p className="designation">Office Manager</p>
            </div>
          </div>
          <div className="account__transaction-other-details">
            <div>
              <p className="label">IBAN:</p>
              <p className="value">FR14 2004 1010 0505 0001 2M02 606</p>
            </div>
            <div>
              <p className="label">BIC:</p>
              <p className="value">CMBRFR2B</p>
            </div>
            <div>
              <p className="label">IBAN:</p>
              <p className="value">March 2019 Office Rental</p>
            </div>
          </div>
          <div className="btn-wrapper">
            <button className="btn receipt">
              <img src="/export.svg" alt="Export" />
              <span>Download Receipt</span>
            </button>
          </div>
        </div>
        <div className="account__transaction-add-note">
          <p>Add a note</p>
          <input type="text" placeholder="Type here to put a note" />
        </div>
        <div className="account__transaction-notes">
          <h4 className=" text-blue">You and rental company</h4>
          <div className="account__transaction-note">
            <p>
              <img src="/calendar.svg" alt="Calendar" />
              <span>February total spent</span>
            </p>
            <p>₦156,650.12</p>
          </div>
          <div className="account__transaction-note">
            <p>
              <img src="/calendar.svg" alt="Calendar" />
              <span>February total spent</span>
            </p>
            <p>₦156,650.12</p>
          </div>
          <div className="account__transaction-note">
            <p>
              <img src="/calendar.svg" alt="Calendar" />
              <span>February total spent</span>
            </p>
            <p>₦156,650.12</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
