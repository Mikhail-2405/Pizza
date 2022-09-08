import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";

import Home from "./pages/Home";
// import NotFound from "./pages/NotFound";

import '../src/css/style.css';

import MainLayout from "./layouts/MainLayout";

const Cart = React.lazy(() => import(/* webpackChunkName: "Cart"*/'./pages/Cart'));
const FullPizza = React.lazy(() => import(/* webpackChunkName: "FullPizza"*/'./pages/FullPizza'));


const App: React.FC = () => {

  return (

    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="" element={<Home/>} />
        
        <Route path="cart" element={
          <Suspense fallback={<div>Идет загрузка корзины ...</div>}>
          <Cart />
          </Suspense>}/>

        <Route path="pizza/:id" element={
          <Suspense>
            <FullPizza />
          </Suspense>} />
        {/* <Route path="*" element={<NotFound />}/>  */}  
      </Route>
    </Routes> 
  );
}

export default App;
