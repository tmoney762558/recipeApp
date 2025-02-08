import { useContext } from "react";
import { RecipeSearchDisplay } from "../../components";
import { GlobalContext } from "../../context";

const Home = () => {
  const { searchParam } = useContext(GlobalContext);

  return (
    <div className="flex flex-col items-center min-h-[95vh] bg-red-100 text-gray-600">
       <h1 className="mt-10 text-center text-2xl font-bold">{searchParam !== "" ? `Searching for ${searchParam} recipes...` : "Search Your Favorite Recipes!"}</h1>
      <RecipeSearchDisplay></RecipeSearchDisplay>
    </div>
  );
};

export default Home;
