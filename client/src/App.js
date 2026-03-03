import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from "./components/layout/Navbar";
import Topbar from "./components/layout/Topbar";
import Home from "./components/layout/Home";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { loadUser } from './actions/auth';
import setAuthToken from './helpers/setAuthToken';
//Redux
import {Provider} from 'react-redux'
import store from "./store"

// run setAuthToken
  if(localStorage.token){
    setAuthToken(localStorage.token);
  }

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);


  return (
    <Provider store={store}>
      <Router>
        <div>
          <Navbar/>
          <div className="main">
            <Topbar title="Tổng quan hệ thống" />
            <div className="page-content">
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/register" element={<Register/>} />
                  <Route path="/login" element={<Login/>} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
