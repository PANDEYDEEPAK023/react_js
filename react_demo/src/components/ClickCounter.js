import { useState } from "react";


function ClickCounter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>count : {count}</div>
            <button onClick={()=> setCount(count + 1)}>click me</button>
        </>
    )
}

export default ClickCounter;