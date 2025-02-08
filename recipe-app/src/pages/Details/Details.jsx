import { useContext } from "react";
import { GlobalContext } from "../../context";
import { BackButton } from "../../components";

const Details = () => {
  const { recipeData, setRecipeData, loading } =
    useContext(GlobalContext);

  return (
    <div className="flex flex-col w-full">
      <div className="flex lg:flex-row flex-col items-center w-full h-full">
        <div className="flex flex-1 flex-col justify-center items-center relative w-full h-full lg:min-h-[93.55vh] min-h-[46.8] lg:py-0 pt-20 py-10 lg:px-10 px-5 bg-red-200">
          <BackButton
            onClick={() => {
              setRecipeData(null);
            }}
          ></BackButton>
          <h1 className="w-full max-w-[30rem] text-center text-3xl font-bold">
            {recipeData && !loading ? recipeData.data.recipe.title : null}
          </h1>
          <h2 className="mt-5 text-left text-xl font-bold text-red-400">
            By:{" "}
            {recipeData && !loading ? recipeData.data.recipe.publisher : null}
          </h2>
          <h3 className="mt-7 text-2xl font-semibold">Ingredients:</h3>

          <ul className="mt-2 text-lg">
            {recipeData &&
            recipeData.data.recipe.ingredients.length &&
            !loading ? (
              recipeData.data.recipe.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <p className="text-center text-lg">
                    {ingredient.quantity} {ingredient.unit}{" "}
                    {ingredient.description}
                  </p>
                </li>
              ))
            ) : (
              <p className="text-lg font-bold">Ingredient Data Not Found</p>
            )}
          </ul>
        </div>
        <div className="flex flex-[0.75] lg:justify-center justify-center items-center w-full h-full lg:min-h-[93.55vh] min-h-[46.8] lg:py-0 py-10 lg:px-10 px-5 bg-red-400">
          <img
            className="w-full max-w-[30rem] aspect-square object-cover mt-7 rounded-full"
            src={
              recipeData && !loading ? recipeData.data.recipe.image_url : null
            }
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Details;
