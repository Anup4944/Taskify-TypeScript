import React from "react";
import "./styles.css";
import { Todo } from "../model";
import Single from "./Single";

interface Props {
  toDos: Todo[];
  setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList: React.FC<Props> = ({ toDos, setToDos }: Props) => {
  return (
    <div className="toDoList">
      {toDos.map((todo) => (
        <Single todo={todo} key={todo.id} toDos={toDos} setToDos={setToDos} />
      ))}
    </div>
  );
};

export default ToDoList;
