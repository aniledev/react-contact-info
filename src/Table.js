import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  // once the data is accessed by the TableBody component it can be mapped over and used to create dynamic table rows
  const rows = props.characterData.map((row, index) => {
      return (
        {/* Keys are used to give list items unqiue indentifiers*/}
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    );
  });
  return <tbody>{rows}</tbody>;
};

class Table extends Component {
  render() {
    // characterData is a property of the Table component
    const { characterData } = this.props;
    return (
      <table>
        <TableHeader />
        {/* property has to passed from App -> Table -> TableBody*/}
        <TableBody characterData={characterData} />
      </table>
    );
  }
}

export default Table;
