import { Link, useLocation } from 'react-router-dom';

// Root 페이지 설명은 없으므로 login 페이지로 강제 이동한다.
const RootLayout: React.FC = () => {
  const location = useLocation();

  return (
    <>{location.pathname === '/' && <Link to='/login'>로그인 페이지로</Link>}</>
  );
};

export default RootLayout;
