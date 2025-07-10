import React from "react";
import { RiDeleteBack2Line } from "react-icons/ri";

const List = props => {
  return <ul>
    {
      props.data &&
      props.data.map(p =>
        <li key={p.id}>
          <Person {...p} removePerson={props.removePerson}></Person>
        </li>
      )
    }
  </ul>;
};

const Person = ({id, nome, stato, img, removePerson}) => {
  return <article>
    <img src={img} alt="person-img" className="person-img"/>
    <div className="person-info">
      <div className="person-action">
        <h4>{nome}</h4>
        <button className="btn" onClick={() => removePerson(id)}>Remove <RiDeleteBack2Line className="icon"/></button>
      </div>
      <p>{stato}</p>
    </div>
  </article>;
};

export default List;
