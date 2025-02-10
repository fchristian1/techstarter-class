import { recipes } from "./data.js";

function Recipe({ id, name, ingredients }) {
    return (
        <>
            <h2>{name}</h2>
            <ul>
                {ingredients.map((ingredient) => (
                    <li key={ingredient}>{ingredient}</li>
                ))}
            </ul>
        </>
    );
}

export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map((recipe) => (
                <div>
                    <Recipe
                        key={recipe.id}
                        name={recipe.name}
                        ingredients={recipe.ingredients}
                    />
                </div>
            ))}
        </div>
    );
}
