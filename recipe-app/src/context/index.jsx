import { useState, createContext } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [apiKey, setApiKey] = useState("acca8aff-0bc4-4ba8-9257-07656006b145");
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [recipeId, setRecipeId] = useState(null);
  const [recipeName, setRecipeName] = useState("");
  const [recipeData, setRecipeData] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    event.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}&key=${apiKey}`
      );
      const data = await res.json();
      console.log(data);
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
      console.log(recipeId);
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${currentRecipeId}?key=${apiKey}`
      );
      const data = await res.json();
      console.log(data);
      setRecipeData(data);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

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
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
