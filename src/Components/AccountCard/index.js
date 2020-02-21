import React from "react";
import "./accountcard.scss";
import { useHistory } from "react-router-dom";
const AccountCard = ({ account: { type, amount, number } }) => {
  let history = useHistory();
  return (
    <div
      className="account-card"
      onClick={() => history.push(`/accounts/${type}`)}
    >
      <div className="account-card__header">
        <div>
          <h3 className="account-card__heading">{type} account</h3>
          <p className="account-card__number">{number}</p>
        </div>
        <div className={`${type} icon`}>
          <img src={`/${type}-account.svg`} alt={`${type} account`} />
        </div>
      </div>
      <p className="account-card__amount">₦{amount}</p>
    </div>
  );
};

export default AccountCard;
