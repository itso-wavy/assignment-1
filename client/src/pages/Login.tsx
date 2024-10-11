import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { logout } from '../apis';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const { auth, saveAuthInfo, deleteAuthInfo } = useAuth();
  const navigate = useNavigate();

  return !auth.isLoggedIn ? (
    <LoginForm
    // TODO:props???
    />
  ) : (
    <div>
      <p>이미 로그인되어 있습니다.</p>
      <button onClick={() => navigate('/researcher')}>
        관리자 페이지로 이동
      </button>
      <button
        onClick={async () => {
          try {
            const userId = await logout(auth.userId!);
            if (userId) deleteAuthInfo();
          } catch (err) {
            console.error('ERROR', err);
          }
        }}
      >
        로그아웃
      </button>
    </div>
  );
};

export default Login;
