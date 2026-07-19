import {Link} from 'react-router-dom'

function FoodCard({item}) {
  return (
    <Link
      to={`/menu/${item.id}`}
      className="food-card"
    >
      <div className="image-container">

        <img
          src={item.image}
          alt={item.name}
          className="food-image"
        />

        <span
          className={
            item.isVeg
              ? 'veg-badge'
              : 'nonveg-badge'
          }
        >
          {item.isVeg
            ? 'VEG'
            : 'NON-VEG'}
        </span>

      </div>

      <div className="food-content">

        <span className="food-category">
          {item.category}
        </span>

        <h3 className="food-name">
          {item.name}
        </h3>

        <p className="food-description">
          {item.description}
        </p>

        <div className="food-footer">

          <span className="servings">
            For {item.servings}
          </span>

        </div>

      </div>

    </Link>
  )
}

export default FoodCard