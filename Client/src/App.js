import logo from './logo.svg';
import './App.css';
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Main from './components/Main';
import Details from './components/Details';
import Create from './components/Create';
import Update from './components/Update';
import {NewTask} from './components/NewTask';
import {UpdateTask} from './components/UpdateTask';
import {ViewOneTask} from './components/ViewOneTask';
import style from "./components/style.css"
import { Login } from './components/login';
import { Register } from './components/register';
import { Profile } from './components/profile';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* route long to short */}
        {/* <Routes> */}

        <Route exact path="/task/update/:id">
          <UpdateTask />
        </Route>
        
        <Route exact path="/tasks/:projectId">
          <NewTask />
        </Route>

        <Route exact path="/task/:id">
          <ViewOneTask />
        </Route>

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

        <Route exact path={"/register"}>
          <Register />
        </Route>
        <Route exact path={"/login"} >
          <Login />
        </Route>
        <Route exact path={"/profile"} >
          <Profile/>
        </Route>
        {/* </Routes> */}
      </Switch>
    </div>
  );
}

export default App;
