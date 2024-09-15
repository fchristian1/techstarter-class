import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";
import "./App.css";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Homepage</h1>
            <Router>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<FOF />} />
                    </Route>
                </Routes>
            </Router>
        </>
    );
}

function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <hr />
            <main>
                <Outlet />
            </main>
        </>
    );
}

function Home() {
    return (
        <>
            <h1>Home</h1>
            <a href="/nothing/test">404 testlink</a>
        </>
    );
}
function About() {
    return (
        <>
            <h1>About</h1>
        </>
    );
}
function Contact() {
    return (
        <>
            <h1>Contact</h1>
        </>
    );
}
function FOF() {
    return (
        <>
            <h1>404</h1>
            <p>nothing here</p>
        </>
    );
}
