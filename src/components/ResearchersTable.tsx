import { useState } from 'react';

const ResearchersTable = ({ researchers }) => {
  const [selected, setSelected] = useState();

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Organization</th>
            <th>PIN</th>
            <th>init</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {researchers.map((researcher, index) => (
            <tr key={researcher.id}>
              <td>{index}</td>
              <td>{researcher.name}</td>
              <td>{researcher.organization}</td>
              <td>{researcher.pin}</td>
              <td>
                <button>초기화</button>
              </td>
              <td>
                <button>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResearchersTable;
