import { useContext, useEffect, useMemo, useRef, useState } from "react";
import useArithmetic from "../custom-hooks/useArithmetic";
import { MyContext } from "./MyContext";
import { useNavigate } from "react-router-dom";

function Sidebar() {
    const setCount = useRef();

    const navigate = useNavigate();
    const [count, increaseCount] = useState(0);
    const [value, setValue] = useState(10);
    const { color, setColor } = useContext(MyContext);


    console.log('color', color);


    const { add, subtract } = useArithmetic();
    // console.log('useArithmetic();useArithmetic();', add(1, 1), subtract(2, 1));


    const addCount = () => {
        console.log("call1 called");
        increaseCount(1);
        setCount.current.focus();
    }

    useEffect(() => {
        // if (count === 0) {
        console.log('akdasdj', count);

        const interval = setInterval(() => {
            console.log("Tick");
        }, 1000);

        // Cleanup funtion used only in react this way (Important thing)
        return () => {
            clearInterval(interval);
            console.log("Cleanup on unmount or before re-run");
        };
        // }
    }, []);



    const expensiveCalc = useMemo(() => {
        console.log("Memo called");
        return count * 100; // Simulating computation
    }, [count]);



    const contextColorChange = () => {
        setColor('red');
        navigate('/')
    }






    return (

        <div>
            {console.log('tststststst')}
            Count: {count} — Computed: {expensiveCalc}
            incresed count is : {count} <br /> <br />
            <input type="text" ref={setCount} /><br /> <br />
            <button onClick={addCount}>Increase count</button>

            <button onClick={contextColorChange}>Change color</button>


        </div>
    );
}

export default Sidebar;