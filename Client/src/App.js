import logo from './logo.svg';
// import './App.css';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Main from './components/Main';
import Details from './components/Details';
import Create from './components/Create';
import Update from './components/Update'
import style from "./components/style.css"

function App() {
  return (
    <div className="App">
      <Switch>
        {/* route long to short */}
        <Route path="/projects/new">
          <Create />
        </Route>
        <Route path="/projects/:id/edit">
            <Update />
          </Route>
        <Route path="/projects/:id">
          <Details />
        </Route>
        <Route path="/projects/">
          <Main />
        </Route>
        <Route path="/">
          <Redirect to="/projects" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
