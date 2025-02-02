import { Link } from 'react-router';
import { useLocation, useNavigate } from 'react-router';

import { Button } from '../../views/button';
import useSession from '../../hooks/useSession';

function Profile() {
  const { signOut, session } = useSession();
  const navigate = useNavigate();
  const location = useLocation();

  const isProfilePage = location.pathname === '/profile';
  const isLoginOrRegisterPage = location.pathname === '/login' || location.pathname === '/register';

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  const renderContent = () => {
    if (session) {
      return (
        <>
          <div className="w-[40px] h-[40px] rounded-full mr-5 border-2 flex items-center justify-center">
            <p className="text-black text-sm">{session?.fullName?.charAt(0) || ''}</p>
          </div>
          {isProfilePage ? (
            <Button
              variant="destructive"
              onClick={handleSignOut}
              type="button"
              data-qa-id="logout_button"
            >
              Выход
            </Button>
          ) : (
            <Link to="/profile" data-qa-id="profile_page_button">
              <Button type="button">Профиль</Button>
            </Link>
          )}
        </>
      );
    }

    if (isLoginOrRegisterPage) return null;

    return (
      <Link to="/login" data-qa-id="login_page_button">
        <Button type="button">Войти</Button>
      </Link>
    );
  };

  return (
    <div className="flex items-center mr-0 ml-auto">
      {renderContent()}
    </div>
  );
}

export default Profile;
