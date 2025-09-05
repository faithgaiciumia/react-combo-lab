import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <h1>React Comp Lab</h1>
      <nav>
        <Link to={"/"} className="mx-2">Home</Link>
        <Link to={"/github"} className="mx-2">Github Page</Link>
      </nav>
    </div>
  );
}

export default App;
