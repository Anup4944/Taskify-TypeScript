import React from "react";
import "./styles.css";

interface Props {
  toDo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ toDo, setToDo }: Props) => {
  return (
    <form className="input">
      <input placeholder="Enter a task" className="inputBox" />
      <button className="inputSubmit" type="submit">
        ADD
      </button>
    </form>
  );
};

export default InputField;
