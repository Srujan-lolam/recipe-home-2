import React from 'react'
import '../styles/recipe-form.css'
function Recipeform() {
  return (

    <>
      <div className = 'form-container' onSubmit={'./'}>
        <label htmlFor="recipe-name">Recipe Name</label>
        <input className = "form-elements" id = "recipe-name" type="text" placeholder='Enter recipe name' required />
        <label htmlFor="recipe-name">Recipe Description</label>
        <input className = "form-elements" id = "recipe-description" type="text" placeholder='Enter recipe description' required />
        <label htmlFor="recipe-name">Recipe steps</label>
        <input className = "form-elements" id = "recipe-steps" type="textArea" placeholder='Enter the steps' required/>
        <label htmlFor="recipe-cuisine">Cusine</label>
        <input className = "form-elements" id = "recipe-cuisine" type="text" placeholder='Enter recipe name' required />
        <label htmlFor="recipe-category">Category</label>
        <input className = "form-elements" id = "recipe-category" type="text" placeholder='Enter recipe name' required/>
        <label htmlFor="recipe-tags">Tags</label>
        <input className = "form-elements" id = "recipe-tags" type="text" placeholder='Enter recipe name' required/>
        <label htmlFor="recipe-time">Time required</label>
        <input className = "form-elements" id = "recipe-time" type="text" placeholder='Enter recipe name' required/>
        <label htmlFor="recipe-name">Difficulty Level</label>
        <select className = "form-elements" id="difficulty-level" required>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <button id = "submit" type='submit'>
          Submit
        </button>
      </div>
    </>
  )
}

export default Recipeform