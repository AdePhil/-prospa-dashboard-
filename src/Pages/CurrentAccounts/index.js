import React from "react";
import Table from "../../Components/Table";
import "./currentaccounts.scss";
const CurrentAccounts = () => {
  return (
    <div className="account">
      <div className="account__details">
        <p>Current account</p>
        <p>Sort code 12-20-10 Account no: 11223344</p>
        <div className="account__amount">
          <h1 className="account__amount-heading">₦250,234.96</h1>
          <button className="btn account__amount-btn">Make payment</button>
        </div>
        <Table data={{ date: "Friday 15 July 2019", isExportable: true }} />
        <Table data={{ date: "Thursday 14 July 2019", isExportable: false }} />
      </div>
      <div className="account__transaction">
        <p className="account__transaction-text text-blue">Transfer</p>
        <p className="account__transaction-text">9:14PM, Feb 15, 2019</p>
        <button className="btn btn-close">&times;</button>
        <div className="account__transaction-details">
          <div className="account__transaction-details-icon">
            <img src="/house.svg" alt="House" />
          </div>
          <h3 className="account__transaction-amount">₦250,234.96</h3>
          <p className="account__transaction-text text-center">
            Rental Company
          </p>
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
        <p>You and rental company</p>
      </div>
    </div>
  );
};

export default CurrentAccounts;
