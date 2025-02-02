import { Link } from 'react-router';
import { useLocation } from 'react-router';
import { Navbar, Profile } from '../';

function Header() {
  const location = useLocation();
  const isDashboardPage = location.pathname.includes('/dashboard');

  return (
    <header className="w-full border-b-2">
      <div className="py-5 px-10 max-w-[1200px] mx-auto flex items-center">
        {isDashboardPage ? (
          <Link className="text-3xl" to="/dashboard">
            Cinescope Admin
          </Link>
        ) : (
          <Link className="text-3xl" to="/">
            Cinescope
          </Link>
        )}
        <Navbar />
        <Profile />
      </div>
    </header>
  );
}

export default Header;
