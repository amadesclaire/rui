import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "./components/Button/Button";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import Hero from "./components/Hero/Hero";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import WidthContainer from "./components/WidthContainer/WidthContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <WidthContainer>
        <Breadcrumbs />
      </WidthContainer>
      <Hero
        title={"Welcome to GovDesignReact"}
        subtitle={
          "The best place to find government design components built in react"
        }
        children={<h3>Simpler, clearer, faster</h3>}
      />
      <ButtonGroup>
        <Button text="primary" />
        <Button variant="secondary" text="secondary" />
        <Button variant="warning" text="warning" />
        <Button variant="link" text="link" />
      </ButtonGroup>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  );
}

export default App;
