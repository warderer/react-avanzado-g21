import { useAuth } from '@/hooks/useAuth'
import { NavLink } from 'react-router-dom'
import './Header.scss'

// Documentación de NavLink: https://reactrouter.com/en/main/components/nav-link

// NavLink es un tipo especial de Link, que me permite gestionar estilos en función de si la ruta está activa o no (isActive) o si esta cargando (isPending)

const linkIsActive = (isActive) => {
  if (isActive) return 'header__item-link header__item-link--is-active'
  else return 'header__item-link'
}

const Header = () => {
  const { isAuth, logout } = useAuth()

  return (
    <nav className='header'>
      <NavLink to='/' className='header__logo'>LOGO</NavLink>
      <ul className='header__nav-list'>

        <li className='header__list-item'>
          <NavLink
            to='/'
            className={({ isActive }) => linkIsActive(isActive)}
          >Home
          </NavLink>
        </li>

        <li className='header__list-item'>
          <NavLink
            to='/dashboard'
            className={({ isActive }) => linkIsActive(isActive)}
          >Dashboard
          </NavLink>
        </li>

        {isAuth
          ? (
            <>
              <li className='header__list-item'>
                <NavLink
                  to='/secret'
                  className={({ isActive }) => linkIsActive(isActive)}
                >Secret
                </NavLink>
              </li>

              <li className='header__list-item'>
                <NavLink
                  to='/'
                  className='header__item-link'
                  onClick={logout}
                >Logout
                </NavLink>
              </li>
            </>
            )
          : (
            <>
              <li className='header__list-item'>
                <NavLink
                  to='/login'
                  className={({ isActive }) => linkIsActive(isActive)}
                >Login
                </NavLink>
              </li>

              <li className='header__list-item'>
                <NavLink
                  to='/signup'
                  className={({ isActive }) => linkIsActive(isActive)}
                >Signup
                </NavLink>
              </li>
            </>
            )}

      </ul>
    </nav>
  )
}
export default Header
