import React from "react";
import "./accountcard.scss";
const AccountCard = ({ account: { type, amount, number } }) => {
  return (
    <div className="account-card">
      <div className="account-card__header">
        <div>
          <h3 className="account-card__heading">{type} account</h3>
          <p className="account-card__number">{number}</p>
        </div>
        <div className={`${type} icon`}>
          <img src={`${type}-account.svg`} alt={`${type} account`} />
        </div>
      </div>
      <p className="account-card__amount">₦{amount}</p>
    </div>
  );
};

export default AccountCard;
