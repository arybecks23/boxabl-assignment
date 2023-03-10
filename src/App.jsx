import { useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import Header from "./components/layout/Header";
import LoginForm from "./components/LoginForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <LoginForm />
    </div>
  );
}

export default App;
