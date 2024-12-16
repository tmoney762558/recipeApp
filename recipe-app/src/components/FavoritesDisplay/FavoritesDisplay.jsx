import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import { NavLink } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const FavoritesDisplay = () => {
  const {
    recipeId,
    setRecipeId,
    recipeName,
    setRecipeName,
    handleLoadRecipe,
    savedRecipes,
    setSavedRecipes,
    setPreviousLink,
  } = useContext(GlobalContext);
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[3rem] mt-20 lg:px-10 px-5">
      {savedRecipes.map((data, index) => (
        <div className="relative slide-in-bottom" key={index}>
          <FaHeart
            className="absolute top-5 right-5 cursor-pointer"
            fontSize={"2rem"}
            fill="rgb(254 202 202)"
            onClick={() => {
              setSavedRecipes((prevSavedRecipes) =>
                prevSavedRecipes.filter((recipe) => recipe.id !== data.id)
              );
            }}
          ></FaHeart>
          <NavLink
            to={`/recipe-details`}
            onClick={() => {
              setPreviousLink("favorites");
              setRecipeId(data.id);
              setRecipeName(data.title);
              handleLoadRecipe(data.id);
            }}
          >
            <img
              className="w-full aspect-[2/1.3] object-cover rounded-t-lg shadow-md shadow-black"
              src={data.image}
              alt={data.name}
            ></img>
            <div className="w-full aspect-[1/0.5] p-5 rounded-b-lg bg-red-200 shadow-md shadow-black">
              <h2 className="text-lg text-center font-bold font-mono">
                {data.name}
              </h2>
              <h3 className="text-center font-semibold">By {data.publisher}</h3>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default FavoritesDisplay;
