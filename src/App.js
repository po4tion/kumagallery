import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Mention from './components/Mention/Mention';
import home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Kumastagram from './components/Kumastagram/Kumastagram';
import Footer from './container/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Mention />
      <hr />
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/profile" component={Profile} />
        <Route path="/kumastagram" component={Kumastagram} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
