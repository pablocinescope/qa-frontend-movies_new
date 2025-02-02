import useSession from '../../hooks/useSession';
import { Role } from '../../api/types';
import { Link } from 'react-router';
import { useLocation } from 'react-router';

function Navbar() {
  const location = useLocation();
  const { session } = useSession();
  const isAdmin = session?.roles.includes(Role.ADMIN);
  const isDashboardPage = location.pathname.includes('/dashboard');
  const isProfilePage = location.pathname.includes('/profile');

  return (
    <nav className="ml-10 flex items-center">
      <ul className="flex">
        <li>
          {isDashboardPage ? (
            <Link to="/">Вернуться на главную</Link>
          ) : (
            <Link to="/movies?page=1">Все фильмы</Link>
          )}
        </li>
        {isAdmin && isProfilePage && (
          <li className="ml-5">
            <Link to="/dashboard">Админ панель</Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
