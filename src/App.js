import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import HomePage from './components/HomePage';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import CreatePage from './components/CreatePage';
import 'antd/dist/antd.css'
import CreatePageContainer from './container/CreatePageContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <span style={{display: 'inline-block' }}>
          <h1 id="appName"><img src={logo} width="60" alt="logo" />MinuteMan</h1>
        </span>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/create" component={CreatePageContainer} />

        </Switch>

      </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
