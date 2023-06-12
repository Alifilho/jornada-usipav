import React from 'react';

import data from "../../../sample/silo-history.json"

const ReportTable = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Data</th>
          <th>Tempo Aberto</th>
          <th>Precisão</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{item.accuracy}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ReportTable;