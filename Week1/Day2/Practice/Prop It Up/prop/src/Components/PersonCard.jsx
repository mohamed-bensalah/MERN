import React from "react";

const puttingItTogether = (props) => {
  const { firstName, lastName, hair } = props;

  return (
    <div className="container">
      <h2>
        {lastName}, {firstName}
      </h2>
      <p>Age: {props.age}</p>
      <p>Hair Color: {hair}</p>
    </div>
  );
}

export default putting-it-together;