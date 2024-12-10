import { useState } from "react";
import styles from "./App.module.css";
import Display from "./components/Display.jsx";
import ButtonsContainer from "./components/ButtonsContainer.jsx";

function App() {
  let [calVal, setCalVal] = useState();

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer></ButtonsContainer>
    </div>
  );
}

export default App;
