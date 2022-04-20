import { useState } from "react";

import Navbar from "./components/navbar";

import plusIcon from "./image/plus-icon.svg";
import minusIcon from "./image/minus-icon.svg";

import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const [todos, setTodos] = useState([
    { title: "Susu Ultra", count: 1 },
    { title: "Susu Beruang", count: 1 },
    { title: "Susu Murni", count: 1 },
  ]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!value) {
      alert("Input field required");
      return;
    }

    setTodos([...todos, { title: value, count: 1 }]);
    setValue("");
  };

  const handleAdditionCount = (index) => {
    const newTodos = [...todos];

    newTodos[index].count = newTodos[index].count + 1;
    setTodos(newTodos);
  };

  const handleSubstractionCount = (index) => {
    const newTodos = [...todos];

    if (newTodos[index].count > 0) {
      newTodos[index].count = newTodos[index].count - 1;
    } else {
      newTodos.splice(index, 1);
    }

    setTodos(newTodos);
  };

  const getTotalCounts = () => {
    const totalCounts = todos.reduce((total, num) => {
      return total + num.count;
    }, 0);

    return totalCounts;
  };

  return (
    <>
      <Navbar />

      <section className="container">
        <form onSubmit={handleFormSubmit} className="form">
          <input
            type="text"
            onChange={(e) => {
              setValue(e.target.value);
            }}
            value={value}
            className="input"
            placeholder="List"
          />
          <button className="add-button" type="submit">
            Add
          </button>
        </form>

        <div className="info">
          <div className="info-total">
            <p>Total List {todos.length}</p>
          </div>
          <div className="info-total">
            <p>Total Count {getTotalCounts()}</p>
          </div>

          <button onClick={() => setTodos([])} className="delete-all-button">
            Delete All List
          </button>
        </div>

        {todos.length > 0 ? (
          <div className="todos">
            {todos.map((todo, index, arr) => {
              return (
                <div
                  key={index}
                  className={`todo ${
                    !(arr.length === index + 1) && "todo-divider"
                  }`}
                >
                  {todo.title}

                  <div className="todo-icon-wrapper">
                    <div className="todo-count">{todo.count}</div>
                    <button
                      onClick={() => handleSubstractionCount(index)}
                      className="todo-action-button"
                    >
                      <img src={minusIcon} alt="minus" />
                    </button>
                    <button
                      onClick={() => handleAdditionCount(index)}
                      className="todo-action-button"
                    >
                      <img src={plusIcon} alt="plus" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>There are no shopping list</div>
        )}
      </section>
    </>
  );
}

export default App;
