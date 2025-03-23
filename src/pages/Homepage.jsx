import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

const Homepage = () => {
  // https://api.spoonacular.com/recipes/716429/information?apiKey=YOUR-API-KEY&includeNutrition=true.
 
  const APP_KEY = import.meta.env.VITE_APP_KEY;



  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPecipes = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${APP_KEY}&ingredients=${searchQuery}&number=15`
      );
      const data = await response.json();
      setRecipes(data); //recipes data is stored as a state
      // console.log(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPecipes("carrot");
  }, []);

  const handleSearchRecipes = (e) => {
    e.preventDefault();
    fetchPecipes(e.target[0].value)
  }

  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSearchRecipes} >
          <label className="input shadow-md flex items-center gap-2">
            <Search size={"24"} />
            <input
              type="text"
              className="text-sm md:text-md grow"
              placeholder="What do you want to cook today?"
            />
          </label>
        </form>
        <h1 className="font-bold text-3xl md:text-5xl mt-4">
          Recommended Recipes
        </h1>
        <p className="text-slate-500 font-semibold ml-1 text-sm p-2 tracking-tight">
          Popular Choices
        </p>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* If recipe data is ready pass it as a prop to RecipeCard component  */}
          {!loading &&
            recipes.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}

          {loading &&
            [...Array(9)].map((_, index) => (
              <div key={index} className="flex flex-col gap-4 w-full">
                <div className="skeleton h-32 w-full"></div>
                <div className="flex justify-between">
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-24"></div>
                </div>
                <div className="skeleton h-4 w-1/2"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Homepage;
