const TOKEN_KEY =
  'party_menu_token'

const USER_KEY =
  'party_menu_user'

const SAVED_KEY =
  'party_menu_saved_recipes'

export const saveToken = token => {
  localStorage.setItem(
    TOKEN_KEY,
    token
  )
}

export const getToken = () => {
  return localStorage.getItem(
    TOKEN_KEY
  )
}

export const removeToken = () => {
  localStorage.removeItem(
    TOKEN_KEY
  )
}

export const saveUser = user => {
  localStorage.setItem(
    USER_KEY,
    JSON.stringify(user)
  )
}

export const getUser = () => {
  const user =
    localStorage.getItem(USER_KEY)

  return user
    ? JSON.parse(user)
    : null
}

export const removeUser = () => {
  localStorage.removeItem(
    USER_KEY
  )
}

export const getSavedRecipes =
  () => {
    const recipes =
      localStorage.getItem(
        SAVED_KEY
      )

    return recipes
      ? JSON.parse(recipes)
      : []
  }

export const saveRecipes =
  recipes => {
    localStorage.setItem(
      SAVED_KEY,
      JSON.stringify(recipes)
    )
  }

export const clearStorage =
  () => {
    removeToken()
    removeUser()
    localStorage.removeItem(
      SAVED_KEY
    )
  }