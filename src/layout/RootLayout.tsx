import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

/**
 * Root 페이지 설명은 없으므로 login 페이지로 강제 이동한다.
 */
const RootLayout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<0 | 1>(1);
  const location = useLocation();

  return (
    <div>
      <Outlet context={{ isLoggedIn, setIsLoggedIn }} />
      {location.pathname === '/' && <Link to='/login'>로그인</Link>}
    </div>
  );
};

export default RootLayout;
