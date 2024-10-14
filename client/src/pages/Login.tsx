import { useNavigate } from 'react-router-dom';

import LoginForm from '../components/LoginForm';

import { useAuth } from '../hooks/useAuth';
import { logout } from '../apis';

const Login: React.FC = () => {
  const { auth, saveAuthInfo, deleteAuthInfo } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      if (auth.userId) {
        await logout(auth.userId);
        alert('로그아웃 되었습니다.');
        deleteAuthInfo();
      }
    } catch (err) {
      console.error('ERROR', err);
    }
  };

  return !auth.isLoggedIn ? (
    <LoginForm saveAuthInfo={saveAuthInfo} />
  ) : (
    <>
      <p>이미 로그인되어 있습니다.</p>
      <button onClick={() => navigate('/researcher')}>
        관리자 페이지로 이동
      </button>
      <button onClick={handleLogout}>로그아웃</button>
    </>
  );
};

export default Login;
