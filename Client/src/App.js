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
import CreateTask from './components/CreateTask';
import UpdateTask from './components/UpdateTask';
import DetailTask from './components/DetailTask';
import style from "./components/style.css"

function App() {
  return (
    <div className="App">
      <Switch>
        {/* project create */}
        <Route path="/projects/new">
          <Create />
        </Route>
        {/* task create */}
        <Route path="/projects/:id/task/new">
          <CreateTask />
        </Route>
        {/* project update */}
        <Route path="/projects/:id/edit">
          <Update />
        </Route>
        {/* project review */}
        <Route path="/projects/:id">
          <Details />
        </Route>
        {/* dashboard */}
        <Route path="/projects/">
          <Main />
        </Route>
        {/* task update */}
        <Route path="/task/:id/edit">
          <UpdateTask />
        </Route>
        {/* task review */}
        <Route path="/task/:id">
          <DetailTask />
        </Route>
        {/* in case of random routes */}
        <Route path="/">
          <Redirect to="/projects" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
