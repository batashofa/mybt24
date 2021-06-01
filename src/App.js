import './App.css';
import Form from './components/form/form';
import Main from './components/main/main';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/form" component={Form}/>
            </Switch>
        </Router>
    );
}

export default App;
