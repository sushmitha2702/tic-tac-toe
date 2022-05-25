import React, { useEffect, useState } from 'react'

const Hooks = () => {
    const [emotion, setEmotion] = useState("Happy");
    const [secondaryEmotion, setSecondaryEmotion] = useState("Tired");

useEffect(()=>{
console.log(emotion);
},[emotion]);

useEffect(()=>{
    console.log(secondaryEmotion);
},[secondaryEmotion]);

    return (
        <>
            <div>React Hooks</div>
            <h3>UseState</h3>
            <h1>{emotion} and {secondaryEmotion}</h1>
            <button onClick={() => setEmotion("Curious")} >Curious</button>
            <button onClick={()=> setEmotion("Sad")}>Sad</button>
            <button onClick={()=> setSecondaryEmotion("Energetic")}>Energetic</button>
            <h3>UseEffect</h3>

        </>
    )
}

export default Hooks