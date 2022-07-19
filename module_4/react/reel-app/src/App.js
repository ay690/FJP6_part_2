// npm install react-router-dom@5.3.1

import './App.css';
import Feed from "./components/Feed"
import Login from "./components/Login"
import PageNotFound from "./components/PageNotFound"
import Profile from "./components/Profile"
import Signup from "./components/Signup"
import {Switch,Route,Redirect } from "react-router-dom"
import { AuthContextProvider } from './context/AuthContext';
import { useContext } from 'react';
import { auth } from './firebase';



function App() {
  return (
    <AuthContextProvider>
    <Switch>
      <PrivateRoute path = "/feed" comp = {Feed}>

      </PrivateRoute>
      {/* <Route path="/feed">
       <Feed></Feed>
      </Route> */}
      <Route path="/login">
       <Login></Login>
      </Route>
      <Route path="/signup">
       <Signup></Signup>
      </Route>

      <PrivateRoute path = "/profile" comp = {Profile}>

      </PrivateRoute>
      {/* <Route path="/profile">
       <Profile></Profile>
      </Route> */}
      <Route >
       <PageNotFound></PageNotFound>
      </Route>
    </Switch>
    </AuthContextProvider>
  );
}

function PrivateRoute(props){
 let Component = props.comp;
 let cUser = useContext(auth);

 return(
  <Route
  {...props}
  render={
    (props) =>{
      return cUser!=null ?<Component {...props}></Component>:<Redirect {...props} to="/login"></Redirect>
    }
  }></Route>
 )
}

export default App;