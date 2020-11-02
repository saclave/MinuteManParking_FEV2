import './App.css';
import Login from './components/Login';
import HomePage from './components/HomePage';
import ApplicationRoutesContainer from './containers/ApplicationRoutesContainer';
import ViewPage from './components/ViewPage';
import { BrowserRouter, Route,Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <ApplicationRoutesContainer />
    </div>
  );
}

export default App;
