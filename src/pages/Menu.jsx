import {useMemo, useState} from 'react'
import Header from '../components/Header'
import FoodCard from '../components/FoodCard'
import menuData from '../data/menuData'
import '../styles/Menu.css'

function Menu() {
  const [search, setSearch] =
    useState('')

  const [searchText, setSearchText] =
    useState('')

  const [category, setCategory] =
    useState('All')

  const [foodType, setFoodType] =
    useState('All')

  const categories = useMemo(() => {
    const unique = [
      ...new Set(
        menuData.map(item => item.category)
      ),
    ]

    return ['All', ...unique]
  }, [])

  const filteredData = menuData.filter(item => {
    const searchMatch =
      item.name
        .toLowerCase()
        .includes(search.toLowerCase())

    const categoryMatch =
      category === 'All'
        ? true
        : item.category === category

    const dietMatch =
      foodType === 'All'
        ? true
        : foodType === 'Veg'
        ? item.isVeg
        : !item.isVeg

    return (
      searchMatch &&
      categoryMatch &&
      dietMatch
    )
  })

  const onSearch = () => {
    setSearch(searchText)
  }

  return (
    <>
      <Header />

      <div className="menu-container">

        <div className="menu-title">

          <h1>Party Menu</h1>

          <p>
            Welcome, Admin User
          </p>

        </div>

        <div className="filter-card">

          <div className="filter-group">

            <h4>CATEGORY</h4>

            <div className="chips">

              {categories.map(item => (
                <button
                  key={item}
                  className={
                    category === item
                      ? 'chip active-chip'
                      : 'chip'
                  }
                  onClick={() =>
                    setCategory(item)
                  }
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          <div className="filter-group">

            <h4>DIET</h4>

            <div className="chips">

              <button
                className={
                  foodType === 'All'
                    ? 'chip active-chip'
                    : 'chip'
                }
                onClick={() =>
                  setFoodType('All')
                }
              >
                All
              </button>

              <button
                className={
                  foodType === 'Veg'
                    ? 'chip active-chip'
                    : 'chip'
                }
                onClick={() =>
                  setFoodType('Veg')
                }
              >
                🌿 Veg
              </button>

              <button
                className={
                  foodType ===
                  'Non Veg'
                    ? 'chip active-chip'
                    : 'chip'
                }
                onClick={() =>
                  setFoodType(
                    'Non Veg'
                  )
                }
              >
                🍗 Non-Veg
              </button>

            </div>

          </div>

          <div className="search-row">

            <input
              type="text"
              value={searchText}
              placeholder="Search by dish name..."
              onChange={event =>
                setSearchText(
                  event.target.value
                )
              }
            />

            <button
              className="search-btn"
              onClick={onSearch}
            >
              Search
            </button>

          </div>

        </div>

        <p className="item-count">
          {filteredData.length}
          {' '}
          items found
        </p>

        {filteredData.length ===
        0 ? (
          <div className="empty-container">

            <h2>
              No dishes found.
            </h2>

            <p>
              Try different
              filters.
            </p>

          </div>
        ) : (
          <div className="menu-grid">

            {filteredData.map(item => (
              <FoodCard
                key={item.id}
                item={item}
              />
            ))}

          </div>
        )}

      </div>
    </>
  )
}

export default Menu