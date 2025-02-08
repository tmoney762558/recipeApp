import { FavoritesDisplay } from "../../components";

const Favorites = () => {
  return (
    <div className="flex flex-col items-center min-h-[95vh] bg-red-100 text-gray-600">
      <h1 className="mt-10 text-2xl font-bold">Your Favorite Recipes</h1>
      <FavoritesDisplay></FavoritesDisplay>
    </div>
  );
};

export default Favorites;
