import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';

import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

const BASE_PATH = '/ecommerce-clothing-react'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={BASE_PATH} component={Homepage} />
        <Route  path={`${BASE_PATH}/shop`} component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App;
