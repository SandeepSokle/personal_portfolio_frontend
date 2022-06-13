import { Portfolio } from "./Portfolio";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./Components/Login";
import { AdminPanel } from "./Components/AdminPanel";
import  Blogs  from "./Components/Blogs";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/admin">
            <AdminPanel />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/main">
            <Portfolio />
          </Route>
          <Route>
            <Portfolio />
          </Route>
        </Switch>
      </Router>
      {/* <Portfolio /> */}
    </div>
  );
}

export default App;
