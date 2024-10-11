import { useNavigate, useOutletContext } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useOutletContext();
  const navigate = useNavigate();

  return !isLoggedIn ? (
    <LoginForm />
  ) : (
    <div>
      <p>이미 로그인되어 있습니다.</p>
      <button onClick={() => navigate('/researcher')}>
        관리자 페이지로 이동
      </button>
      <button onClick={() => setIsLoggedIn(0)}>로그아웃</button>
    </div>
  );
};

export default Login;
