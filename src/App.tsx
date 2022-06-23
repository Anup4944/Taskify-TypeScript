import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import ToDoList from "./components/ToDoList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useState<Todo[]>([]);

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (toDo) {
      setToDos([...toDos, { id: Date.now(), todo: toDo, isDone: false }]);
      setToDo("");
    }
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField
        toDo={toDo}
        setToDo={setToDo}
        handleOnSubmit={handleOnSubmit}
      />
      <ToDoList toDos={toDos} setToDos={setToDos} />
    </div>
  );
};

export default App;
