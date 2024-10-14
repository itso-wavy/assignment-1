import { Suspense, useState, useCallback } from 'react';
import { Await, useLoaderData } from 'react-router-dom';
import { AxiosResponse } from 'axios';

import ResearcherRegistrationForm from '../components/ResearcherRegistrationForm';
import ResearchersTable from '../components/ResearchersTable';

import { getResearchers } from '../apis';

const ResearcherPage = () => {
  const response = useLoaderData() as AxiosResponse<any>;
  const [researchers, setResearchers] = useState(response.data.researcher);

  const updateResearchers = useCallback(async () => {
    try {
      const newResponse = await getResearchers();

      setResearchers(newResponse.data.researcher);
    } catch (error) {
      console.error('목록 업데이트에 실패했습니다.:', error);
    }
  }, []);

  return (
    <>
      <ResearcherRegistrationForm onRegistrationSuccess={updateResearchers} />
      <Suspense fallback={<p>로딩 중...</p>}>
        <ResearchersTable
          researchers={researchers}
          onDataChange={updateResearchers}
        />
        {/*  <Await resolve={getResearchers}>
          {
            <ResearchersTable
              researchers={researchers}
              setResearchers={setResearchers}
            />
          }
        </Await> */}
      </Suspense>
    </>
  );
};

export default ResearcherPage;
