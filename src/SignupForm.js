// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    email: '',
    phone: '',
    profession: '',
  })

  const handleInputChange = e => {
    const {name, value} = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // Implement form validation here (optional)
    // Store the data in local storage (you can use other storage options too)
    localStorage.setItem('userData', JSON.stringify(formData))
    // eslint-disable-next-line no-alert
    alert('Signup Successful!')
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
      <h2>User Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Name:</label>
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
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            id="email"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone number:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            id="phone"
          />
        </div>
        <div>
          <label htmlFor="profession">Profession:</label>
          <select
            name="profession"
            value={formData.profession}
            onChange={handleInputChange}
            required
            id="profession"
          >
            <option value="">Select Profession</option>
            <option value="developer">Developer</option>
            <option value="designer">Designer</option>
            <option value="manager">Manager</option>
            {/* Add more profession options as needed */}
          </select>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignupForm
