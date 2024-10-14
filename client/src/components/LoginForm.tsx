import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { login } from '../apis';
import { LoginProps } from '../types';

interface LoginFormProps {
  saveAuthInfo: (userId: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ saveAuthInfo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { userId: '', pw: '' } });

  const navigate = useNavigate();
  const onSubmit = async (loginInput: LoginProps) => {
    // TODO: 필요시 추가적인 loginInput 밸리데이션
    try {
      const res = await login(loginInput);

      alert(res.data.Msg);
      saveAuthInfo(loginInput.userId);

      navigate('/researcher');
    } catch (err) {
      alert('로그인 실패. 정보를 확인해주세요.');
    }
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
          {errors.userId && (
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
