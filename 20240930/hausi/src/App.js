import Button from "./components/Button";
import Greeting from "./components/Greeting";

function App() {
    const user = {
        name: "Ulli",
        age: 42,
    };
    return (
        <>
            <h1 className="text-4xl m-2">Hausis 30.09.2024</h1>
            <h2 className="text-2xl mx-2 my-1">Aufgabe 1</h2>
            <span className="mx-2 my-1 ">
                <Greeting user={user} />
            </span>
        </>
    );
}

export default App;
