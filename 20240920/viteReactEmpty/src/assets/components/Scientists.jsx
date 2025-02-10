import { people } from "./data.js";
import { getImageUrl } from "./utils.js";

export default function List() {
    const professionFilter = (profession, list) => {
        return [
            list.filter((p) => p.profession === profession),
            list.filter((p) => p.profession !== profession),
        ];
    };
    const profession = (profession) => professionFilter(profession, people);
    const listRender = (persons) => {
        return persons.map((person) => (
            <li key={person.id}>
                <img src={getImageUrl(person)} alt={person.name} />
                <p>
                    <b>{person.name}:</b>
                    {" " + person.profession + " "}
                    known for {person.accomplishment}
                </p>
            </li>
        ));
    };
    return (
        <article>
            <h1>Chemist Scientists</h1>
            <ul>{listRender(profession("chemist")[0])}</ul>
            <h1>All other Scientists</h1>
            <ul>{listRender(profession("chemist")[1])}</ul>
        </article>
    );
}
