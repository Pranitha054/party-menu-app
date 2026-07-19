import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {loginUser} from '../services/authApi'
import {saveToken} from '../utils/storage'
import '../styles/Login.css'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] =
    useState('')

  const [password, setPassword] =
    useState('')

  const [error, setError] =
    useState('')

  const [loading, setLoading] =
    useState(false)

  const onSubmit = async event => {
    event.preventDefault()

    setError('')
    setLoading(true)

    try {
      const response =
        await loginUser(
          email,
          password
        )

      saveToken(
        response.token
      )

      navigate('/')
    } catch (err) {
      setError(
        err.message ||
          'Invalid email or password'
      )
    }

    setLoading(false)
  }

  return (
    <div className="login-container">

      <div className="login-card">

        <div className="logo-container">
          <span className="logo-icon">
            🍽️
          </span>
        </div>

        <h1 className="login-title">
          Party Menu
        </h1>

        <p className="login-subtitle">
          Sign in to explore our
          delicious menu
        </p>

        <form onSubmit={onSubmit}>

          <div className="form-group">
            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="admin@example.com"
              value={email}
              onChange={event =>
                setEmail(
                  event.target.value
                )
              }
            />
          </div>

          <div className="form-group">
            <label>
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={event =>
                setPassword(
                  event.target.value
                )
              }
            />
          </div>

          <button
            type="submit"
            className="login-btn"
            disabled={loading}
          >
            {loading
              ? 'Signing In...'
              : 'Sign In'}
          </button>

          {error !== '' && (
            <p className="error-msg">
              {error}
            </p>
          )}

        </form>

        <div className="credentials-box">

          <p className="credentials-title">
            Demo Credentials
          </p>

          <p>
            <strong>Email:</strong>{' '}
            admin@example.com
          </p>

          <p>
            <strong>Password:</strong>{' '}
            admin123
          </p>

        </div>

      </div>

    </div>
  )
}

export default Login