import React from 'react';
// import logo from './logo.svg';
import './extra/App.css';
import './extra/reset.css';

import Nav from './Components/Usables/Nav';
import routes from './routes';

function App() {
  return (
    <div className="app">
      <Nav />
      {routes}
    </div>
  );
}

export default App;
