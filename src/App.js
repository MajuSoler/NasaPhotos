import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
