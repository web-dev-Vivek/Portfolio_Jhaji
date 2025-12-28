import Left from "./components/LeftSection";
import Right from "./components/RightSection";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col-reverse md:flex-row w-screen h-screen">
      <Left />
      <Right />
    </div>
  );
}

export default App;
