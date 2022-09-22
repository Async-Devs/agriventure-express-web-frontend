import React from "react";
import {useState} from "react";
import style from "./dashboard.module.css"
import Sidebar from "../../components/Sidebar.js"

function Dashboard(){

    // states
    const [name,setName] = useState("Ransika");


    //data access from axios

    //function
    function changeName(){
        setName("Achira");
    }


    return(
        <div>
            <Sidebar/>
            <div>{name}</div>
            <div className={style}>
                <button onClick={changeName}>Change Name</button>
                <img src={"https://lh4.googleusercontent.com/yVQ4QNgv8jAOZ-06Vpgvvyq6M_Df-CaKewWhE6cwJ-QMUFz-Iz3JIhy_IiAbgre9Rpc=w2400"} alt="sample" width="80%"/>
            </div>
        </div>

    );
}

export default Dashboard;