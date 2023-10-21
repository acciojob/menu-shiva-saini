import React, { useState } from "react";
import MenuDisplay from './MenuDisplay'
import Navbar from './Navbar'
import "../styles/App.css"
const App = () => {

    const [selectedCategory,setSelectedCategory] = useState("all");
    return (
        <div>
           <Navbar updateCategory={setSelectedCategory}/>
           <MenuDisplay selectedCategory={selectedCategory}/>
        </div>
    )
}


export default App;


