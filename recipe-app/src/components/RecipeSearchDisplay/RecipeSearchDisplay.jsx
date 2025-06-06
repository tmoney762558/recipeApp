import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context";
import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const RecipeSearchDisplay = () => {
  const {
    apiData,
    loading,
    setRecipeId,
    setRecipeName,
    isSaved,
    handleLoadRecipe,
    setSavedRecipes,
    setPreviousLink,
  } = useContext(GlobalContext);

  const [recipesDisplayed, setRecipesDisplayed] = useState(9);

  useEffect(() => {
    setRecipesDisplayed(9);
  }, [apiData]);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[3rem] max-w-[100rem] mt-20 lg:px-10 px-5 pb-[3rem]">
      {apiData && apiData.data.recipes.length && !loading
        ? apiData.data.recipes.map((data, index) =>
            index < recipesDisplayed ? (
              <div className="relative col-span-1 slide-in-bottom" key={index}>
                {!isSaved(data.id) ? (
                  <FaHeart
                    className="absolute top-5 right-5 cursor-pointer"
                    fontSize={"2rem"}
                    onClick={() => {
                      setSavedRecipes((prevSavedRecipes) => [
                        ...prevSavedRecipes,
                        {
                          id: data.id,
                          name: data.title,
                          publisher: data.publisher,
                          image: data.image_url,
                        },
                      ]);
                    }}
                  ></FaHeart>
                ) : (
                  <FaHeart
                    className="absolute top-5 right-5 cursor-pointer"
                    fontSize={"2rem"}
                    fill="rgb(254 202 202)"
                    onClick={() => {
                      setSavedRecipes((prevSavedRecipes) =>
                        prevSavedRecipes.filter(
                          (recipe) => recipe.id !== data.id
                        )
                      );
                    }}
                  ></FaHeart>
                )}
                <NavLink
                  to={`/recipe-details`}
                  onClick={() => {
                    setPreviousLink("");
                    setRecipeId(data.id);
                    setRecipeName(data.title);
                    handleLoadRecipe(data.id);
                  }}
                >
                  <img
                    className="w-full aspect-[2/1.3] object-cover rounded-t-lg shadow-md shadow-black"
                    src={data.image_url}
                  ></img>
                  <div className="w-full aspect-[1/0.5] p-5 rounded-b-lg bg-red-200 shadow-md shadow-black">
                    <h2 className="text-2xl text-center font-bold font-mono">
                      {data.title}
                    </h2>
                    <h3 className="text-center font-semibold">
                      By {data.publisher}
                    </h3>
                  </div>
                </NavLink>
              </div>
            ) : null
          )
        : null}
      {apiData && apiData.data.recipes.length > recipesDisplayed && !loading ? (
        <div className="flex justify-center w-full lg:col-span-3 md:col-span-2 col-span-1">
          <button
            className=" lg:w-1/2 w-full py-2 bg-red-300 border-4 border-red-200 text-lg font-bold"
            onClick={() => setRecipesDisplayed((prev) => prev + 9)}
          >
            Load More
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default RecipeSearchDisplay;
