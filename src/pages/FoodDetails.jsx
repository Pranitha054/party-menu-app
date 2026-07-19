import {useMemo, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import Header from '../components/Header'
import menuData from '../data/menuData'
import {
  getSavedRecipes,
  saveRecipes,
} from '../utils/storage'
import '../styles/FoodDetails.css'

function FoodDetails() {
  const {id} = useParams()

  const recipe = useMemo(
    () =>
      menuData.find(
        item => String(item.id) === id
      ),
    [id]
  )

  if (!recipe) {
    return (
      <>
        <Header />
        <div className="details-page">
          <h1>Recipe Not Found</h1>
        </div>
      </>
    )
  }

  const savedRecipes = getSavedRecipes()

  const [isSaved, setIsSaved] = useState(
    savedRecipes.some(
      item => item.id === recipe.id
    )
  )

  const toggleRecipe = () => {
    if (isSaved) {
      saveRecipes(
        savedRecipes.filter(
          item => item.id !== recipe.id
        )
      )
    } else {
      saveRecipes([
        ...savedRecipes,
        recipe,
      ])
    }

    setIsSaved(!isSaved)
  }

  return (
    <>
      <Header />

      <div className="details-page">

        <div className="details-top">

          <Link
            to="/"
            className="back-link"
          >
            ← Back to Menu
          </Link>

          <div className="top-buttons">

            <Link
              to="/saved-recipes"
              className="saved-link"
            >
              Saved Recipes
            </Link>

            <button
              onClick={toggleRecipe}
              className={
                isSaved
                  ? 'saved-btn'
                  : 'save-btn'
              }
            >
              {isSaved
                ? '✓ Saved'
                : 'Save Recipe'}
            </button>

          </div>

        </div>

        <div className="hero-section">

          <img
            src={recipe.image}
            alt={recipe.name}
            className="hero-image"
          />

          <div className="hero-content">

            <div className="badge-row">

              <span className="category-pill">
                {recipe.category}
              </span>

              <span
                className={
                  recipe.isVeg
                    ? 'veg-pill'
                    : 'nonveg-pill'
                }
              >
                {recipe.isVeg
                  ? '🌿 Veg'
                  : '🍗 Non-Veg'}
              </span>

            </div>

            <h1>{recipe.name}</h1>

            <p className="people">
              For {recipe.servings}
            </p>

            <p className="description">
              {recipe.fullDescription}
            </p>

          </div>

        </div>

        <div className="ingredients-card">

          <h2>Ingredients</h2>

          <div className="ingredients-list">

            {recipe.ingredients.map(
              ingredient => (
                <div
                  key={ingredient.name}
                  className="ingredient-row"
                >
                  <span>
                    {ingredient.name}
                  </span>

                  <span>
                    {ingredient.quantity}
                  </span>
                </div>
              )
            )}

          </div>

        </div>

      </div>
    </>
  )
}

export default FoodDetails