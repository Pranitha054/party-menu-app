import {Link} from 'react-router-dom'
import {
  getSavedRecipes,
  saveRecipes,
} from '../utils/storage'
import '../styles/SavedRecipes.css'

function SavedRecipes() {
  const recipes = getSavedRecipes()

  const removeRecipe = id => {
    const updated = recipes.filter(
      item => item.id !== id
    )

    saveRecipes(updated)

    window.location.reload()
  }

  return (
    <div className="saved-page">

      <div className="saved-top">

        <div>
          <h1>Saved Recipes</h1>

          <p>
            {recipes.length} recipes saved
          </p>
        </div>

        <Link
          to="/"
          className="back-btn"
        >
          ← Back to Menu
        </Link>

      </div>

      {recipes.length === 0 ? (

        <div className="empty-box">

          <h2>
            No Saved Recipes Yet
          </h2>

          <p>
            Save recipes from the
            Party Menu to see them
            here.
          </p>

          <Link
            to="/"
            className="browse-btn"
          >
            Browse Menu
          </Link>

        </div>

      ) : (

        <div className="saved-grid">

          {recipes.map(recipe => (

            <div
              key={recipe.id}
              className="saved-card"
            >

              <div className="saved-image-container">

                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="saved-image"
                />

                <span
                  className={
                    recipe.isVeg
                      ? 'saved-veg-badge'
                      : 'saved-nonveg-badge'
                  }
                >
                  {recipe.isVeg
                    ? 'VEG'
                    : 'NON-VEG'}
                </span>

              </div>

              <div className="saved-content">

                <h2 className="saved-title">
                  {recipe.name}
                </h2>

                <p className="saved-description">
                  {recipe.description}
                </p>

                <p className="serving-text">
                  🍽 Serves {recipe.servings}
                </p>

                <button
                  className="remove-btn"
                  onClick={() =>
                    removeRecipe(recipe.id)
                  }
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  )
}

export default SavedRecipes