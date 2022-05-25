import React, { useState } from 'react';
const HookExample = () => {
    const [fruit, setFruit] = useState("Mango");
    return (
        <>
            <h1>useState Hook Example</h1>
            <h3>{fruit}</h3>
            <button onClick={() => setFruit("Apple")}>Apple</button>
            <button onClick={() => setFruit("Orange")}>Orange</button>
        </>
    )
}
export default HookExample