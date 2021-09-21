import React, { useState } from "react";
import CheckBox from "../custom-components/CheckBox";

export default function BoxWithSearch(props) {
  const properties = props.property;
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="search-w-box card">
      <div className="card-header">
        <input
          type="text"
          className="form-control"
          placeholder={`Search ${props.type}`}
          aria-label="Recipient's username"
          onChange={event => {setSearchTerm(event.target.value)}}
        ></input>
      </div>
      <div className="card-body">
      <CheckBox key={"company-all"} text={"All"} />
        {properties &&
          properties.filter((property)=> {
            if(searchTerm === "") {
              return property;
            } else if(property.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              return property;
            }
          }).map((property) => {
            return <CheckBox key={property.account} text={property.name} />
          }
        )}
      </div>
    </div>
  );
}
