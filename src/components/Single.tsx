import React, { useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete, AiOutlineFileDone } from "react-icons/ai";
import "./styles.css";

type Props = {
  todo: Todo;
  toDos: Todo[];
  setToDos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const Single = ({ todo, toDos, setToDos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);

  const [editToDo, setEditToDo] = useState<string>(todo.todo);

  const handleOnDone = (id: number) => {
    setToDos(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, isDone: !toDo.isDone } : toDo
      )
    );
  };

  const handleOnDelete = (id: number) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  };

  const handleOnEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setToDos(
      toDos.map((todo) => (todo.id === id ? { ...todo, todo: editToDo } : todo))
    );
    setEdit(false);
  };

  return (
    <form className="todoSingle" onSubmit={(e) => handleOnEdit(e, todo.id)}>
      {edit ? (
        <input
          value={editToDo}
          onChange={(e) => setEditToDo(e.target.value)}
          className="setTodos"
        />
      ) : todo.isDone ? (
        <s className="toDoText">{todo.todo}</s>
      ) : (
        <span className="toDoText">{todo.todo}</span>
      )}

      <div>
        <span
          className="icons"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icons" onClick={() => handleOnDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icons" onClick={() => handleOnDone(todo.id)}>
          <AiOutlineFileDone />
        </span>
      </div>
    </form>
  );
};

export default Single;
