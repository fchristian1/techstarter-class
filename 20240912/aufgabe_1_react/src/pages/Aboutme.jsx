import { fetchTest } from "../services/fetch";

function Aboutme() {
    let test = fetchTest();
    return (
        <div>
            <h1>About Me</h1>
            <h2>My name is Christian and I'm a web developer.</h2>
            {test}
        </div>
    );
}

export default Aboutme;
