import {Link, useNavigate} from 'react-router-dom'
import {
  getSavedRecipes,
  clearStorage,
  getUser,
} from '../utils/storage'
import '../styles/Header.css'

function Header() {
  const navigate = useNavigate()

  const user = getUser()

  const savedRecipes =
    getSavedRecipes()

  const logout = () => {
    clearStorage()
    navigate('/signin')
  }

  return (
    <header className="header">

      <div className="header-content">

        <div>

          <h1 className="header-title">
            Party Menu
          </h1>

          <p className="header-subtitle">
            Welcome,
            {' '}
            {user?.name ||
              'Admin User'}
          </p>

        </div>

        <div className="header-actions">

          <Link
            to="/saved-recipes"
            className="saved-btn"
          >
            Saved Recipes

            <span className="saved-count">
              {savedRecipes.length}
            </span>

          </Link>

          <button
            className="logout-btn"
            onClick={logout}
          >
            Logout
          </button>

        </div>

      </div>

    </header>
  )
}

export default Header