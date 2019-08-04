import Home from "~/pages/home/index"
// import Profile from "~/pages/profile/index"
import { Router, Route, Switch } from "react-router"

function Lala() {
    return <h1>123</h1>
}

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/profile" component={Lala} />
            </Switch>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))