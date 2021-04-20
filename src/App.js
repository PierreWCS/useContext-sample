import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import { UserContextProvider } from './UserContext';

const App = () => {
  return (
    <Router>
      <UserContextProvider>
        <Route component={Home} exact path="/" />
        <Route component={Profile} path="/profile" />
      </UserContextProvider>
    </Router>
  );
};

export default App;
