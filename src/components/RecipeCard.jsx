import React, { Component } from 'react'
import { useState } from 'react';
import {  Soup, ThumbsUp, Heart, HeartPulse} from "lucide-react";

const  RecipeCard = ({recipe}) => {
  const { id, image, title, likes } = recipe;
  const [isFavorite, setIsFavorite] = useState(localStorage.getItem('favorites')?.includes(recipe.title));

  const addRecipeToFavorited = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    //check it recipe is already in favorites
    const isRecipeInFavorites = favorites.some((fav) => fav.title === recipe.title);

    if(isRecipeInFavorites){
    //update the value in localStorage
    //filter it and remove/delete recipe from favorites if it is alredy there
      favorites = favorites.filter((fav) => fav.title !== recipe.title);
      setIsFavorite(false)
    }else {
      //if recipe is NOT in the favorites, than push it to "favorites" array in local storage
      favorites.push(recipe);
      setIsFavorite(true);
    }
    //update the local storage
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

    return (
      // {/*  recipes */}
      <div key={id} className="flex flex-col rounded-md bg-[#ecf7d4] overflow-hidden p-3 relative">
       <a 
       href={`https://www.youtube.com/results?search_query=${recipe.title} recipe`}
       target='_blank'
       className="relative h-40">
         <img src={image} alt="recipe img" className="rounded-md w-full h-full object-cover cursor-pointer"/>
         <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-ponter flex items-center gap-1 text-sm">
           <Soup size={16} /> 4 Servings
         </div>
         <div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer"
             onClick={(e) => {
              e.preventDefault();
              addRecipeToFavorited();
            }}
         >
           {!isFavorite && <Heart size={20} className="hover:fill-red-500 hover:text-red-500"/>}
           { isFavorite && <Heart size={20} className="fill-red-500 text-red-500"/>}
         </div>
       </a>
       <div className="flex mt-1"><p className="font-bold tracking-wide">{title}</p></div>
       <div className="flex gap-2 mt-auto pt-1">
          <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md" >
           <ThumbsUp size={16} />
           <span className="text-sm tracking-tighter font-semibold">{likes}</span>
         </div> 
         <div className="flex gap-1 bg-[#d6f497] items-center p-1 rounded-md" >
           <HeartPulse size={16} />
           <span className="text-sm tracking-tighter font-semibold">Heart-healthy</span>
         </div>
       </div>
      </div>
    )
  }


export default RecipeCard