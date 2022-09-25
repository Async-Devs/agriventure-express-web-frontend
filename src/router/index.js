import React from "react";
import {Routes,Route,BrowserRouter} from "react-router-dom";

import Dashboard from "../pages/dashboard/dashboard";
import AgriDataEntry from "../pages/agriDataEntry";
import ProducerDashboard from "../pages/producerDashboard";


function AppRouter(){


    return(
        <BrowserRouter>
            <>
                <Routes>
                    <Route path = "" element={<Dashboard />} ></Route>
                    <Route path = "agridataentry" element={<AgriDataEntry />} ></Route>
                    <Route path = "producerdashboard" element={<ProducerDashboard />} ></Route>

                </Routes>
            </>
        </BrowserRouter>
    )
}

export default AppRouter;
