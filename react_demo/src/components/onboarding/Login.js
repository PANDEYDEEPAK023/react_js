import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../dashboard/MyContext";

function Login() {
    const navigate = useNavigate();
    const addToLogin = () => {
        navigate('/user/10')
    }
    const { color, setColor } = useContext(MyContext);


    console.log('color11', color);
    return (
        <form>
            <input type="email" />
            <br />   <br />
            <input type="password" />
            <br />   <br />
            <Link to="/signup">Sign UP</Link>

            <button type="button" onClick={addToLogin}> LogIn</button>
        </form>
    );
}

export default Login;