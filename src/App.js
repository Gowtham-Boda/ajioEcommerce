// eslint-disable-next-line no-unused-vars
import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'

const App = () => (
  <div
    style={{
      background: 'linear-gradient(to bottom, #3333cc 0%, #f2f2f2 100%)',
      minHeight: '100vh',
      padding: '30px',
    }}
  >
    <SignupForm />
    <LoginForm />
  </div>
)

export default App
