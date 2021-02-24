import React from 'react';
import App from './App';

const routes = [
  {
    path: '/',
    component: App,
    name: 'Home',
  },
];

const Routes = () => (
  <div>
    {console.log(routes)}
  </div>
);

export default Routes;
