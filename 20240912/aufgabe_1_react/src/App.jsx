import logo from "/logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} width="150px" className="App-logo" alt="logo" />
                        <div>
                            <h1>Hello, React!</h1>
                        </div>
                    </header>
                    <Link to="/">Home</Link>
                    <span> | </span>
                    <Link to="/aboutme">About Me</Link>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/aboutme" element={<Aboutme />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
