import React from 'react';

const data = [
  {
    date: '2023-06-01 09:23:00',
    time: '1h 32m',
    accuracy: '78%',
  },
  {
    date: '2023-06-02 14:45:00',
    time: '58m',
    accuracy: '91%',
  },
];

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