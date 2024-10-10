import { SubmitHandler, useForm } from 'react-hook-form';

const RegisterResearcherForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler = data => console.log(data);

  return (
    <div>
      <p role='heading'>Researcher 등록​</p>
      <form action='' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='name'>이름</label>
          <input
            type='text'
            id='name'
            placeholder='이름'
            {...register('name', { required: true })}
          />
          {errors.name && (
            <p className='text-xs mt-1.5 text-red-500'>
              *이름 입력이 필요합니다.
            </p>
          )}
        </div>
        <div>
          <label htmlFor='phone'>전화번호</label>
          <input
            type='text'
            id='phone'
            placeholder='전화번호'
            {...register('phone', { required: true })}
          />
          {errors.phone && (
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
            placeholder='소속기관'
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

export default RegisterResearcherForm;
