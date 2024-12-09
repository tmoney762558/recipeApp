import React, { useEffect } from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import { NavLink } from "react-router-dom";

const Home = () => {
  const { apiData, loading, recipeId, setRecipeId, recipeName, setRecipeName, handleLoadRecipe } = useContext(GlobalContext);

  return (
    <div className="flex justify-center min-h-[95vh] bg-red-100 text-gray-600">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[3rem] mt-20 lg:px-10 px-5">
        {apiData && apiData.data.recipes.length && !loading
          ? apiData.data.recipes.map((data, index) => (
              <NavLink to={`recipe-details`} key={index}>
                <div
                  className="flex flex-col items-center w-full max-w-[35rem] cursor-pointer"
                  onClick={() => {
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
                    <h2 className="text-lg text-center font-bold font-mono">
                      {data.title}
                    </h2>
                    <h3 className="text-center font-semibold">
                      By {data.publisher}
                    </h3>
                  </div>
                </div>
              </NavLink>
            ))
          : null}
      </div>
    </div>
  );
};

export default Home;
