import { useEffect, useState } from "react";

function Ue2(){
    const [count,setCount] = useState(0);
    const [name,setName] = useState("Aman");

    useEffect(()=>{
        document.title = `This my Title ${count} ${name}`
    },[])

    return(
        <div>
            <h1>This is a Counter {count}</h1>
            <h1>{name}</h1>
            <button onClick={()=>setCount(count+1)}>+1</button>
            <button onClick={()=>setName("Aniket")}>ChangeName</button>
        </div>
    )
}

export default Ue2;