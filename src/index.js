import Home from "~/pages/home/index"
import Profile from "~/pages/profile/index"
import { BrowserRouter as Router, Route, } from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <div>123</div>
                <Route path="/" exact component={Home} />
                <Route path="/profile" component={Profile} />
            </div>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))