import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Profile page</h1>
      <p>firstname: {user.firstname ? user.firstname : 'undefined'}</p>
      <p>lastname: {user.lastname ? user.lastname : 'undefined'}</p>
      <p>email: {user.email ? user.email : 'undefined'}</p>

      <Link to="/">Home</Link>
    </div>
  );
};

export default Profile;
