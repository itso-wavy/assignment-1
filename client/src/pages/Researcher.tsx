import { Suspense } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { getResearchers } from '../apis';
import ResearcherRegistrationForm from '../components/ResearcherRegistrationForm';
import ResearchersTable from '../components/ResearchersTable';

const ResearcherPage = () => {
  const response = useLoaderData();

  return (
    <>
      <ResearcherRegistrationForm />
      <Suspense fallback={<p>로딩 중...</p>}>
        <Await resolve={getResearchers}>
          {<ResearchersTable researchers={response.data} />}
        </Await>
      </Suspense>
    </>
  );
};

export default ResearcherPage;
