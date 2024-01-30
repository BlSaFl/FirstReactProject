export const History = ({ history, onOrderHistoryClick }) => (
  <div id="history">
    <button  onClick= {onOrderHistoryClick}>Order History</button>
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
