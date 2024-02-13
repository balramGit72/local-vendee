import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router, Navigate } from 'react-router-dom';
import { routes } from './routes';
import { gapi } from 'gapi-script';
import { useDispatch, useSelector } from 'react-redux';
import { setLatAndLon } from './redux/AuthRedux/auth';
import './App.css';


function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(async () => {
      if (navigator.geolocation) {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        const { latitude, longitude } = position.coords;
        dispatch(setLatAndLon({ myLat: latitude, myLon: longitude }));
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [dispatch]);
  const getComponent = (component) => {
    return React.createElement(component, {});
  }
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: '1009962957539-omcfep2ilpos3igq7crknrf440o4v7ac.apps.googleusercontent.com',
        scope: ''
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  // const isLoggedIn = 

  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((route, index) => {
            if (route.isPrivate === 0 && auth.token === '') {
              return (<Route
                key={index}
                path={route.path}
                element={getComponent(route.element)}
                exact={route.exact}
              />);
            }  else if(route.isPrivate === 1 && auth !== '') {
              return (<Route
                key={index}
                path={route.path}
                element={getComponent(route.element)}
                exact={route.exact}

              />)
            }  else if(route.isPrivate === 2) {
              return (<Route
                key={index}
                path={route.path}
                element={getComponent(route.element)}
                exact={route.exact}

              />)
            }
          }
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
