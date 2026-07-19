const LOGIN_URL =
  'https://serverless-api-teal.vercel.app/api/auth/signin'

export const loginUser =
  async (
    email,
    password
  ) => {
    const response =
      await fetch(LOGIN_URL, {
        method: 'POST',

        headers: {
          'Content-Type':
            'application/json',
        },

        body: JSON.stringify({
          email,
          password,
        }),
      })

    const data =
      await response.json()

    return {
      ok: response.ok,
      data,
    }
  }