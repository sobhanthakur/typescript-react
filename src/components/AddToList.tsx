import React, { useState } from "react";
import { IState as Props } from "../App";
interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: 0,
    note: "",
    url: "",
  });
  const changeFormData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => setInput({ ...input, [e.target.name]: e.target.value });

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    e.preventDefault();
    setPeople([...people, input]);
  };
  return (
    <div className="AddToList">
      Add to List Component
      <input
        name="name"
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={(e) => changeFormData(e)}
      ></input>
      <input
        name="age"
        type="number"
        placeholder="Age"
        className="AddToList-input"
        value={Number(input.age)}
        onChange={(e) => changeFormData(e)}
      ></input>
      <textarea
        name="url"
        placeholder="URL"
        className="AddToList-input"
        value={input.url}
        onChange={(e) => changeFormData(e)}
      ></textarea>
      <input
        name="note"
        type="text"
        placeholder="Note"
        className="AddToList-input"
        value={input.note}
        onChange={(e) => changeFormData(e)}
      ></input>
      <button className="AddToList-btn" onClick={(e) => handleClick(e)}>
        Add To List
      </button>
    </div>
  );
};

export default AddToList;
