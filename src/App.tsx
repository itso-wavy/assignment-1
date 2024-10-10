import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import ProtectedLayout from './layout/ProtectedLayout';
import Login from './pages/Login';
import Researcher from './pages/Researcher';
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
        children: [{
          path: 'researcher',
          element: <Researcher />
        }]
      }
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}