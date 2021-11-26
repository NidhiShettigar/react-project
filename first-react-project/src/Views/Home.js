import React from "react";
import HelloWorld from "../Components/HelloWorld";

function Home() {
    return(
        <div>
            <HelloWorld name="Nidhi"/>
            <h1 className="font-bold text-2xl">This is home page</h1>
        </div>
    )
}

export default Home