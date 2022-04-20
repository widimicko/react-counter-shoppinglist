import plusIcon from "../../image/plus-icon.svg";
import minusIcon from "../../image/minus-icon.svg";

import "./style.css";

const Todos = ({ todos, onSubstraction, onAddition }) => {
  return (
    <div className="todos">
      {todos.map((todo, index, arr) => {
        return (
          <div
            key={index}
            className={`todo ${!(arr.length === index + 1) && "todo-divider"}`}
          >
            {todo.title}

            <div className="todo-icon-wrapper">
              <div className="todo-count">{todo.count}</div>
              <button
                onClick={() => onSubstraction(index)}
                className="todo-action-button"
              >
                <img src={minusIcon} alt="minus" />
              </button>
              <button
                onClick={() => onAddition(index)}
                className="todo-action-button"
              >
                <img src={plusIcon} alt="plus" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
