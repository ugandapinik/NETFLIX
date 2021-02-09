import React, { useEffect } from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import "./App.css";
import {useDispatch, useSelector} from 'react-redux'
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";


function App() {

  // getting user information from the redux
  const user = useSelector(selectUser)
  console.log(user)
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else{

        dispatch(logout())
      }
    })

    return unsubscribe;

  }, [dispatch])

  return (
    <div className="app">
      <Router>
        { !user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/profile">
              <ProfileScreen />
            </Route>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
        
    </Router>
    </div>
  );
}

export default App;
