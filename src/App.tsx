import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout, ProtectedLayout } from './layout';
import { Login, Researcher } from './pages';
// import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <p>404 Not Found</p>,
    children: [
      { path: 'login', element: <Login /> },
      {
        element: <ProtectedLayout />, // Researcher 페이지를 포함, 다른 페이지도 보호할 수 있도록 레이아웃화
        children: [
          {
            path: 'researcher',
            element: <Researcher />,
          },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
