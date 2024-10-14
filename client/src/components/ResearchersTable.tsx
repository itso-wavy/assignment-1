import { deleteResearcher, resetResearchersPassword } from '../apis';
import { Researcher } from '../types';

interface ResearchersTableProps {
  researchers: Researcher[];
  onDataChange: () => Promise<void>;
}

const ResearchersTable: React.FC<ResearchersTableProps> = ({
  researchers,
  onDataChange,
}) => {
  const handleResetPassWord = async (researcher: Researcher) => {
    const res = await resetResearchersPassword({
      pin: researcher.pin,
      password: '0000',
    });

    alert(res.data.Msg);

    onDataChange();
  };

  const handleDeleteResearcher = async (researcher: Researcher) => {
    const res = await deleteResearcher({
      pin: researcher.pin,
    });

    alert(res.data.Msg);

    onDataChange();
  };

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
                <button onClick={() => handleResetPassWord(researcher)}>
                  초기화
                </button>
              </td>
              <td>
                <button onClick={() => handleDeleteResearcher(researcher)}>
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
