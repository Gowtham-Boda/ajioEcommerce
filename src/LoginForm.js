// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
  })

  const handleInputChange = e => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleLogin = e => {
    e.preventDefault()
    // Retrieve user data from local storage
    const storedData = JSON.parse(localStorage.getItem('userData'))
    if (
      storedData &&
      storedData.name === formData.name &&
      storedData.password === formData.password
    ) {
      // Login successful, you can add further logic or redirect to the Movie List Page here
      // eslint-disable-next-line no-alert
      alert('Login Successful!')
    } else {
      // Invalid credentials, show error message
      // eslint-disable-next-line no-alert
      alert('Invalid Credentials')
    }
  }

  return (
    <div
      style={{
        background: '#f2f2f2',
        padding: '20px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <h2>User Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            id="name"
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            id="password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm
