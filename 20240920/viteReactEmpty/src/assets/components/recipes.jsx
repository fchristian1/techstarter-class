import { recipes } from "./data.js";

export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>

            {recipes.map((r) => {
                return (
                    <>
                        <h1>{r.name}</h1>
                        <ul>
                            {r.ingredients.map((i) => (
                                <li>{i}</li>
                            ))}
                        </ul>
                    </>
                );
            })}
        </div>
    );
}
