export const History = ({ history, onOrderHistory }) => (
  <div id="history">
    <button onClick={onOrderHistory}>Order History</button>
    <ol>
      {history.map(({ move, currentMove, onHistoryClick, description }) => (
        <li key={move}>
          <button disabled={currentMove == move} onClick={onHistoryClick}>
            {description}
          </button>
        </li>
      ))}
    </ol>
  </div>
);
