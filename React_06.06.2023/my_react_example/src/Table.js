import React from "react";

function Table({ tableData }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((link,index) => (
          <tr key={index}>
            <td>{link.id}</td>
            <td>{link.name}</td>
            <td>{link.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;



