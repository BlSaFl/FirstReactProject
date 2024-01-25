export const History = ({ history }) => (
  <div id="history">
    <button  /*onClick= {onOrderHistoryClick}*/>Order History</button>
    <ol /*style={history.styleOrderHistoryList}*/>
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
