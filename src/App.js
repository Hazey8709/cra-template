// import { Route, Routes } from "react-router-dom"
// import Nav from "./components/navComp/Nav"

//!  Delete imports below when start Project
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noOpener noreferrer'
                >
                    Learn React
                </a>
            </header>
            {/* <Routes>
                <Route path='/' element={} />
                <Route path='' element={} />
                <Route path='' element={} />
                <Route path='' element={} />
                <Route path='' element={} />
                <Route path='' element={} />

                <Route path='Menu' element={} />
                <Route path='' element={} />
                <Route path='' element={} />
                <Route path='' element={} />
                <Route path='' element={} />
            </Routes> */}
        </div>
    );
}

export default App;
