import "./App.css";
import Counter from "./components/Counter";
import ExponentTwo from "./components/ExponentTwo";
import ExponentThree from "./components/ExponentThree";
import ExponentFour from "./components/ExponentFour";
import ExponentFive from "./components/ExponentFive";
import ExponentSix from "./components/ExponentSix";
import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  const decrement = () => setCount((prevCount) => prevCount - 1);
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <div className="App">
      <h2>
        <em>Counter</em>
      </h2>

      <Counter count={count} decrement={decrement} increment={increment} />

      <br />
      <h2>
        <em>Exponents</em>
      </h2>

      <div className="container">
     <ExponentTwo count={count} />
        <ExponentThree count={count} />
        <ExponentFour count={count} />
        <ExponentFive count={count} />
        <ExponentSix count={count} />    

        {/* Al hacer el bonus, me daba un error por importar exponentes que no usaba, por eso lo hice, y lo comenté para evitar errores.*/}
         {/*BONUS
        <Exponent count={count} exponent = {2} />
        <Exponent count={count} exponent = {3} />
        <Exponent count={count} exponent = {4} />
        <Exponent count={count} exponent = {5} />       
        <Exponent count={count} exponent = {6} />
        <Exponent count={count} exponent = {7} /> */}


      </div>
    </div>
  );
}

export default App;
