import logo from './logo.svg';
import './App.css';
import "./../src/Components/Tab"
import Tab from "./Components/Tab";

function App() {

    // todos
    let headers = ["Title One", "Title Two", "Title Three"]

    return (
        <div className="App">
            <Tab headers={headers}>
                <div>
                    <h2>Title One</h2>
                </div>
                <div>
                    <h2>Title Two</h2>
                </div>
                <div>
                    <h2>Title Three</h2>
                </div>
            </Tab>
        </div>
    );
}

export default App;
