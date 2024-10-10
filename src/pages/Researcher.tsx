import RegisterResearcherForm from '../components/RegisterResearcherForm';
import ResearchersTable from '../components/ResearchersTable';

const Researcher = () => {
  const researchers = [
    {
      pin: '1234ASDF',
      organization: '서울대학교병원',
      password: '0000',
      phoneNumber: '010-0000-0000',
      name: '김댕댕',
    },
  ];

  return (
    <>
      <RegisterResearcherForm />
      <ResearchersTable researchers={researchers} />
    </>
  );
};

export default Researcher;
