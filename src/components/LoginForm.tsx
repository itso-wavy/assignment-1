import { SubmitHandler, useForm } from 'react-hook-form';
import { login } from '../apis';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler = data => {
    // data 타입 검증
    //
    login(data);
  };

  return (
    <div>
      <p role='heading'>관리자 로그인</p>
      <form action='' onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='ID'>ID</label>
          <input
            type='text'
            id='ID'
            placeholder='ID'
            {...register('id', { required: true })}
          />
          {errors.id && (
            <p className='text-xs mt-1.5 text-red-500'>
              *id 입력이 필요합니다.
            </p>
          )}
        </div>
        <div>
          <label htmlFor='PW'>PW</label>
          <input
            type='password'
            id='PW'
            placeholder='PW'
            {...register('pw', { required: true })}
          />
          {errors.id && (
            <p className='text-xs mt-1.5 text-red-500'>
              *pw 입력이 필요합니다.
            </p>
          )}
        </div>
        <input type='submit' value='로그인' />
      </form>
    </div>
  );
};

export default LoginForm;
