import React, { useState } from 'react';
import '../styles/Toprated.css'
import { FaStar, FaRegHeart, FaHeart } from 'react-icons/fa';
import recipeimg from '../assets/recipe.jpg'

const RecipeCard = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="recipe-card">
      <div className="recipe-image-container">
        <img src={recipeimg} alt={recipe.title} className="recipe-image" />
        <button className="favorite-btn" onClick={toggleFavorite}>
          {isFavorite ? <FaHeart color="red" /> : <FaRegHeart />}
        </button>
      </div>
      <div className="recipe-info">
        <h3>{recipe.title}</h3>
        <div className="rating">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar key={index} color={index < recipe.rating ? '#ffc107' : '#e4e5e9'} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Toprated = () => {
  const recipes = [
    // Array of recipe objects (dummy data)
    // Add actual recipes appropriately
    { title: 'Recipe 1', imageUrl: 'path/to/image1.jpg', rating: 4 },
    { title: 'Recipe 2', imageUrl: 'path/to/image2.jpg', rating: 5 },
    { title: 'Recipe 2', imageUrl: 'path/to/image2.jpg', rating: 5 },   
    { title: 'Recipe 2', imageUrl: 'path/to/image2.jpg', rating: 5 },
    { title: 'Recipe 2', imageUrl: 'path/to/image2.jpg', rating: 5 },
    { title: 'Recipe 2', imageUrl: 'path/to/image2.jpg', rating: 5 },
    { title: 'Recipe 2', imageUrl: 'path/to/image2.jpg', rating: 5 },
    { title: 'Recipe 2', imageUrl: 'path/to/image2.jpg', rating: 5 },
    { title: 'Recipe 2', imageUrl: 'path/to/image2.jpg', rating: 5 },
    { title: 'Recipe 2', imageUrl: 'path/to/image2.jpg', rating: 5 },
    { title: 'Recipe 2', imageUrl: 'path/to/image2.jpg', rating: 5 },
    { title: 'Recipe 2', imageUrl: 'path/to/image2.jpg', rating: 5 },
    { title: 'Recipe 2', imageUrl: 'path/to/image2.jpg', rating: 5 },
    { title: 'Recipe 2', imageUrl: 'path/to/image2.jpg', rating: 5 },
    { title: 'Recipe 2', imageUrl: 'path/to/image2.jpg', rating: 5 },
    { title: 'Recipe 2', imageUrl: 'path/to/image2.jpg', rating: 5 },
    // Add up to 15 recipes
  ];

  return (
    <section className="top-rated-recipes">
      <h2>Top Rated Recipes</h2>
      <div className="recipe-grid">
        {recipes.map((recipe, index) => (
          <RecipeCard recipe={recipe} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Toprated;