import { useState } from "react";

import Navbar from "./components/Navbar";
import Container from "./components/Container";
import FormInput from "./components/FormInput";
import Info from "./components/Info";
import Todos from "./components/Todos";
import EmptyTodo from "./components/EmpyTodos";

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

      <Container>
        <FormInput
          handleFormSubmit={handleFormSubmit}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <Info
          todosLength={todos.length}
          totalCounts={getTotalCounts()}
          onDelete={() => setTodos([])}
        />

        {todos.length > 0 ? (
          <Todos
            todos={todos}
            onSubstraction={(index) => handleSubstractionCount(index)}
            onAddition={(index) => handleAdditionCount(index)}
          />
        ) : (
          <EmptyTodo />
        )}
      </Container>
    </>
  );
}

export default App;
