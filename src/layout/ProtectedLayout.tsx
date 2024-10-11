import { Link, Outlet, useOutletContext } from 'react-router-dom';

/**
 * isLoggedIn 여부에 따라 보호된 라우트로의 라우팅 여부를 결정한다.
 */
const ProtectedLayout = () => {
  const { isLoggedIn, setIsLoggedIn } = useOutletContext();

  return !isLoggedIn ? (
    <div>
      <p>로그인이 필요한 서비스입니다.</p>
      <Link to='/login'>로그인 하러 가기</Link>
    </div>
  ) : (
    <Outlet context={{ isLoggedIn, setIsLoggedIn }} />
  );
};

export default ProtectedLayout;
