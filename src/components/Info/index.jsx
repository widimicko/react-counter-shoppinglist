import "./style.css";

const Info = ({ todosLength, totalCounts, onDelete }) => {
  return (
    <div className="info">
      <div className="info-total">
        <p>Total List {todosLength}</p>
      </div>
      <div className="info-total">
        <p>Total Count {totalCounts}</p>
      </div>

      <button onClick={onDelete} className="delete-all-button">
        Delete All List
      </button>
    </div>
  );
};

export default Info;
