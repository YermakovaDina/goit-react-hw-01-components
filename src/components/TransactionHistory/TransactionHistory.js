import PropTypes from 'prop-types';
import './TransactionHistory.css';

export default function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr className="t-row">
          <th className="table head">Type</th>
          <th className="table head">Amount</th>
          <th className="table head">Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className="t-row">
              <td className="table">{type}</td>
              <td className="table">{currency}</td>
              <td className="table">{amount}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
