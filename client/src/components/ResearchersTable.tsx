import { useState } from 'react';
import { deleteResearcher, resetResearchersPassWord } from '../apis';

const ResearchersTable = ({ researchers }) => {
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
            <tr key={researcher.pin}>
              <td>{index + 1}</td>
              <td>{researcher.name}</td>
              <td>{researcher.organization}</td>
              <td>{researcher.pin}</td>
              <td>
                <button
                  onClick={() =>
                    resetResearchersPassWord({
                      pin: researcher.pin,
                      pw: researcher.password,
                    })
                  }
                >
                  초기화
                </button>
              </td>
              <td>
                <button
                  onClick={() => deleteResearcher({ pin: researcher.pin })}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResearchersTable;
