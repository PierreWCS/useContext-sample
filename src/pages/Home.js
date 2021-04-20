import { useContext } from 'react';
import { UserContext } from '../UserContext';

import { Link } from 'react-router-dom';

const Home = () => {
  const { user, updateUser } = useContext(UserContext);

  console.log('user: ', user);
  return (
    <div>
      <h1>Home page</h1>
      <button
        style={{ marginRight: '2rem' }}
        onClick={() =>
          updateUser({
            ...user,
            ...{
              email: 'pierredubois@gmail.com',
              firstname: 'Pierre',
              lastname: 'Dubois',
            },
          })
        }
      >
        Login
      </button>
      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default Home;
