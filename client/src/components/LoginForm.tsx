import { SubmitHandler, useForm } from 'react-hook-form';
import { login } from '../apis';
import { LoginProps } from '../types';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<LoginProps> = async data => {
    // TODO:추가적인 data 밸리데이션

    const res = await login(data);
    console.log('res: ', res);
  };

  return (
    <div>
      <p role='heading'>관리자 로그인</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='userId'>ID</label>
          <input
            type='text'
            id='userId'
            {...register('userId', { required: true })}
          />
          {errors.userId && (
            <p className='text-xs mt-1.5 text-red-500'>
              *id 입력이 필요합니다.
            </p>
          )}
        </div>
        <div>
          <label htmlFor='pw'>PW</label>
          <input
            type='password'
            id='pw'
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
