import React from 'react';
import Header from '../component/header';
import { Outlet } from 'react-router-dom';


const MainLayout = ()=> {
    return(
        <div className="wraper">
            <Header/>
            <div className="line"></div>
            <Outlet/>
        </div> 
    )
}

export default MainLayout;