import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./components/onboarding/Login";
import Signup from "./components/onboarding/Signup";
import UserProfile from "./components/users/UserProfile";
import Dashboard from "./components/dashboard/Dashboard";
import Sidebar from "./components/dashboard/Sidebar";
import NotFound from "./components/not-found/NotFound";
import Forms from "./components/dashboard/Forms";

function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/signup" element={<Signup />}></Route>
                <Route path="/user/:id" element={<UserProfile />}></Route>
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="sidebar" element={<Sidebar />}></Route>
                </Route>
                <Route path="/form" element={<Forms />}></Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
