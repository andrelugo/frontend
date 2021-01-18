import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import { StoreList, Login } from './pages/';
import { AppBar } from './components/';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/store'>
          <AppBar title='Store xpto' />
          <Container>
            <StoreList />
          </Container>
        </Route>
        <Route path='/'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
