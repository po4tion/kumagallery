import './App.css';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Mention from './components/Mention/Mention';
import Profile from './components/Profile/Profile';
import Kumastagram from './components/Kumastagram/Kumastagram';

function App() {
  return (
    <>
      <Navbar />
      <Mention />
      <hr />
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/kumastagram" component={Kumastagram} />
      </Switch>
    </>
  );
}

export default App;
