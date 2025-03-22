import { Search} from "lucide-react";
import React from "react";
import RecipeCard from "../components/RecipeCard";

const Homepage = () => {
  return (
    <div className="bg-[#faf9fb] p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form>
          <label className="input shadow-md flex items-center gap-2">
            <Search size={"24"} />
            <input type="text" className="text-sm md:text-md grow"
            placeholder="What do you want to cook today?" />
          </label>
        </form>
        <h1 className="font-bold text-3xl md:text-5xl mt-4">
          Recommended Recipes
        </h1>
        <p className="text-slate-500 font-semibold ml-1 text-sm tracking-tight">
          Popular Choices
        </p>
      {/* Create grid card section for recipes */}
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
      <RecipeCard />
     
      </div>
    </div>
  );
};
export default Homepage;
