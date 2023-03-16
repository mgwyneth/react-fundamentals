import { useAppContext } from './Navbar';

const UserContainer = () => {
  const { user, logout } = useAppContext();
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>hello there, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <p>please login</p>
      )}
    </div>
  );
};
export default UserContainer;
