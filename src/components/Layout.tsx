import { Outlet } from 'react-router-dom'
import { TransitionLink } from '~/modules/view-transitions'

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <TransitionLink to='/'>Home</TransitionLink>
          </li>
          <li>
            <TransitionLink to='/about/'>About</TransitionLink>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
