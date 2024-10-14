import { useForm } from 'react-hook-form';

import { addResearcher } from '../apis';
import { AddResearcherProps } from '../types';

interface ResearcherRegistrationFormProps {
  onRegistrationSuccess: () => Promise<void>;
}

const ResearcherRegistrationForm: React.FC<ResearcherRegistrationFormProps> = ({
  onRegistrationSuccess,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddResearcherProps>({
    defaultValues: {
      name: '',
      phoneNumber: '',
      organization: '',
    },
  });

  const onSubmit = async (researcherInput: AddResearcherProps) => {
    // TODO: 필요시 추가적인 researcherInput 밸리데이션
    try {
      const res = await addResearcher(researcherInput);

      alert(res.data.Msg);
      onRegistrationSuccess();

      reset();
    } catch (err) {
      alert('등록 실패. 정보를 확인해주세요.');
    }
  };

  return (
    <div>
      <p role='heading'>Researcher 등록</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='name'>이름</label>
          <input
            type='text'
            id='name'
            {...register('name', { required: true })}
          />
          {errors.name && (
            <p className='text-xs mt-1.5 text-red-500'>
              *이름 입력이 필요합니다.
            </p>
          )}
        </div>
        <div>
          <label htmlFor='phoneNumber'>전화번호</label>
          <input
            type='text'
            id='phoneNumber'
            {...register('phoneNumber', { required: true })}
          />
          {errors.phoneNumber && (
            <p className='text-xs mt-1.5 text-red-500'>
              *전화번호 입력이 필요합니다.
            </p>
          )}
        </div>
        <div>
          <label htmlFor='PW'>소속기관</label>
          <input
            type='text'
            id='organization'
            {...register('organization', { required: true })}
          />
          {errors.organization && (
            <p className='text-xs mt-1.5 text-red-500'>
              *기관 입력이 필요합니다.
            </p>
          )}
        </div>
        <input type='submit' value='등록' />
      </form>
    </div>
  );
};

export default ResearcherRegistrationForm;
