import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [previousLink, setPreviousLink] = useState("");
  const [searchParam, setSearchParam] = useState("");
  // API Key not needed???
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [recipeId, setRecipeId] = useState(null);
  const [recipeName, setRecipeName] = useState("");
  const [recipeData, setRecipeData] = useState(null);
  const [savedRecipes, setSavedRecipes] = useState(
    JSON.parse(localStorage.getItem("savedRecipes")) || []
  );

  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}&key=${apiKey}`
      );
      const data = await res.json();
      navigate("/");
      setApiData(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  const handleLoadRecipe = async (currentRecipeId) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${currentRecipeId}?key=${apiKey}`
      );
      const data = await res.json();
      setRecipeData(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  const isSaved = (currentRecipe) => {
    for (let i = 0; i < savedRecipes.length; i++) {
      if (savedRecipes[i].id === currentRecipe) {
        return true;
      }
    }
    return false;
  };

  useEffect(() => {
    localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
  }, [savedRecipes]);

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        setSearchParam,
        handleSubmit,
        loading,
        apiData,
        recipeId,
        setRecipeId,
        recipeName,
        setRecipeName,
        handleLoadRecipe,
        setRecipeData,
        recipeData,
        savedRecipes,
        setSavedRecipes,
        isSaved,
        previousLink,
        setPreviousLink,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
