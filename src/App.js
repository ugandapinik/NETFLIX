import React, { useEffect } from "react";
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import "./App.css";
import {useDispatch} from 'react-redux'
import { login, logout } from "./features/userSlice";
import { auth } from "./firebase";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";


function App() {

  const user = null
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      }else{
        // Logged out
        dispatch(logout)
      }
    })

    return unsubscribe;

  }, [])

  return (
    <div className="app">
      <Router>
        { !user ? (
          <LoginScreen />
        ): (
          <Switch>
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
