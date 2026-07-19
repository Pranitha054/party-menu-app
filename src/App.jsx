import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import Login from './pages/Login'
import Menu from './pages/Menu'
import FoodDetails from './pages/FoodDetails'
import SavedRecipes from './pages/SavedRecipes'
import NotFound from './pages/NotFound'

import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Login */}
        <Route
          path="/signin"
          element={<Login />}
        />

        {/* Menu */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Menu />
            </ProtectedRoute>
          }
        />

        {/* Food Details */}
        <Route
          path="/menu/:id"
          element={
            <ProtectedRoute>
              <FoodDetails />
            </ProtectedRoute>
          }
        />

        {/* Saved Recipes */}
        <Route
          path="/saved-recipes"
          element={
            <ProtectedRoute>
              <SavedRecipes />
            </ProtectedRoute>
          }
        />

        {/* 404 Page */}
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App