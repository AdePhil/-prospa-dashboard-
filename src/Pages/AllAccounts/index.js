import React from "react";
import AccountCard from "../../Components/AccountCard";
import "./allaccounts.scss";
const accounts = [
  {
    id: 1,
    type: "current",
    amount: "2,650,234.96",
    number: "00-00-00 18361554"
  },
  {
    id: 2,
    type: "savings",
    amount: "1,050,234.33",
    number: "00-00-00 18361554"
  },
  { id: 3, type: "tax", amount: "589,879.00", number: "00-00-00 18361554" }
];
const AllAccounts = () => {
  return (
    <div className="all-accounts">
      <h1 className="all-accounts__heading">All Accounts</h1>
      <div className="all-accounts__cards">
        {accounts.map(account => (
          <AccountCard account={account} key={account.id} />
        ))}
        <div className="add-more">
          <img src="./add-more.svg" alt="Add more accounts" />
          <p>Add a new account</p>
        </div>
      </div>
    </div>
  );
};

export default AllAccounts;
