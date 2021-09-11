import React from "react";
import { IState as IProps } from "../App";

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((p, i) => (
      <li className="List" key={i}>
        <div className="List-header">
          <img className="List-img" src={p.url} alt="" />
          <h2>{p.name}</h2>
        </div>
        <p>{p.age} years old</p>
        <p className="List-note">{p.note}</p>
      </li>
    ));
  };
  return <ul>{renderList()}</ul>;
};

export default List;
