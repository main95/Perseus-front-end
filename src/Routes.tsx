import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import DashboardLayout from './layouts/dashboard'
import TablesPage from './pages/TablesPage'
import OrderPage from './pages/OrderPage'

const router = createBrowserRouter([
  {
    path: 'xseo',
    element: <DashboardLayout />,
    children: [
      { element: <Navigate to='/xseo/tables' />, index: true },
      { path: 'tables', element: <TablesPage /> },
      { path: 'order', element: <OrderPage /> },
      // { path: 'books/new-book', element: <NewBookPage /> },
      { path: 'authors', element: <div>Authors page</div> },
      { path: 'users', element: <div>Users page</div> },
    ],
  },
  {
    path: 'login',
    element: <div>Login page</div>,
  },
  {
    element: <div>Default page</div>,
    children: [
      // this redirect doesn't work
      { element: <Navigate to='/xseo' />, index: true },
      { path: '404', element: <>404 page</> },
      { path: '/', element: <Navigate to='/dashboard/app' />, index: true },
      { path: '*', element: <Navigate to='/404' /> },
    ],
  },
  {
    path: '*',
    element: <Navigate to='/404' replace />,
  },
])

const Routes: React.FC = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Routes
