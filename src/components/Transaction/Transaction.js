import React from 'react';
import s from './Transaction.module.scss';

const TransactionItem = ({ id, type, amount, currency }) => {
  return (
    <thead key={id}>
      <tr>
        <th>{type}</th>
        <th>{amount}</th>
        <th>{currency}</th>
      </tr>
    </thead>
  );
};

const TransactionHistory = ({ items }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr className={s.mainRowTable}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(TransactionItem)}
    </table>
  );
};

export default TransactionHistory;
