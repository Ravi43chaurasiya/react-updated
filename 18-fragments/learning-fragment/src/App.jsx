import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  //   return <React.Fragment>    <h1>Healthy food</h1>
  //   <ul class="list-group">
  // <li class="list-group-item">An item</li>
  // <li class="list-group-item">A second item</li>
  // <li class="list-group-item">A third item</li>
  // <li class="list-group-item">A fourth item</li>
  // <li class="list-group-item">And a fifth one</li>
  // </ul></React.Fragment>
  //let foodItem=[];
  let foodItems=['dal','chawal','paneer','mushroom','juice'];
return(
    <>
    
      <h1>Healthy food</h1>
      {/* {foodItems.length===0?<h3>i m still hungry</h3>:null} */}
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
  
    </>
  );
}

export default App;
