import { Outlet } from "react-router-dom";
import { MyContext } from "./MyContext";
import { useState } from "react";

function Dashboard() {
    const [color, setColor] = useState('grey');
    return (
        <div>
            <MyContext.Provider value={{ color, setColor }}>
                <Outlet />
            </MyContext.Provider>
        </div>
    );
}

export default Dashboard;