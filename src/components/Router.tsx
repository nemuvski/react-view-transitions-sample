import { BrowserRouter, Navigate, useRoutes } from 'react-router-dom'
import Layout from '~/components/Layout.tsx'

const _Routes = () => {
  return useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <>Home</>,
        },
        {
          path: '/about/',
          element: <>About</>,
        },
        // fallback
        {
          path: '*',
          element: <Navigate to='/' />,
        },
      ],
    },
  ])
}

const Router = () => {
  return (
    <BrowserRouter>
      <_Routes />
    </BrowserRouter>
  )
}

export default Router
