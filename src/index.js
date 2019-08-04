import Home from "./pages/home/index"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
    return
    <Router>
        <Route path="/" exact component={Home} />
        <Route path="/Profile/" component={Profile} />
    </Router>
}

ReactDOM.render(<App />, document.getElementById('app'))