import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

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
    <Container>
      <h1>Healthy food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodInput></FoodInput>
      <FoodItems items={foodItems}></FoodItems>
      </Container>
      {/* <Container>
        <p>
          Above is the list of healthy food for your health and well being.
        </p>
      </Container> */}
    </>
  );
}

export default App;
