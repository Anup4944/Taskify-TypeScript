import React, { useRef } from "react";
import "./styles.css";

interface Props {
  toDo: string;
  setToDo: React.Dispatch<React.SetStateAction<string>>;
  handleOnSubmit: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({
  toDo,
  setToDo,
  handleOnSubmit,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleOnSubmit(e);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        placeholder="Enter a task"
        className="inputBox"
        value={toDo}
        name="toDo"
        onChange={(e) => setToDo(e.target.value)}
      />
      <button className="inputSubmit" type="submit">
        ADD
      </button>
    </form>
  );
};

export default InputField;
