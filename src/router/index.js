import React from "react";
import {Routes,Route,BrowserRouter} from "react-router-dom";

import Dashboard from "../pages/dashboard/dashboard";


function AppRouter(){

    let userType = 1; //todo: usertype should get from jwt token

    return(
        <BrowserRouter>
            <>
                <Routes>
                    <Route path = "" element={<Dashboard />} ></Route>


                </Routes>
            </>
        </BrowserRouter>
    )
}

export default AppRouter;