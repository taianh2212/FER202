import React from 'react';

const NameList = ({ names }) => (
  <div>
    <ul>
      {names.map((name, index) => {
        return <li key={index}>{name}</li>;
      })}
    </ul>
  </div>
);

export default NameList;
    