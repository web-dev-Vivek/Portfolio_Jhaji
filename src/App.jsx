import { useState } from "react";
import Left from "./components/LeftSection";
import Right from "./components/RightSection";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex md:flex-row flex-col w-screen h-screen">
      <Left />
      <Right />
    </div>
  );
}

export default App;
