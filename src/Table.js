import React from "react";
import "./index.css";
import "./Table.css";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>{}</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  // once the data is accessed by the TableBody component it can be mapped over and used to create dynamic table rows
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        {/* keys are used as uniquqe identifiers to list items in React component */}
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  // characterData & removeCharacter() is a property of the Table component

  const { characterData, removeCharacter } = props;

  return (
    <table>
      <TableHeader />
      {/* property has to passed from App -> Table -> TableBody*/}
      <TableBody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  );
};

export default Table;
