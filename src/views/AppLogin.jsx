import React from 'react'
import { useState } from 'react'

const AppLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' })
  const [isVisible, setIsVisible] = useState(false)


  const handleSubmit = (ev) => {
    ev.preventDefault()
    console.log('submit');
    const credentials = Object.fromEntries(new FormData(ev.target));
    console.debug('♠️ ~ file: AppLogin.jsx:10 ~ handleSubmit ~ credentials:', credentials)
  }
  const togglePassWordVisability = () => {
    setIsVisible(!isVisible)
  }

  return (
    <section className='app-login grid'>
      <form onSubmit={handleSubmit} >
        <label htmlFor="text">username</label>
        <input type="text" name='username' />

        <div className="password-container">
          <label htmlFor="password">password</label>
          <input type={isVisible ? 'text' : 'password'} name='password' />
          <i onClick={togglePassWordVisability}
            className="toggle-password material-symbols-outlined">{isVisible ? 'visibility_off' : 'visibility'}</i>
        </div>

        <div className='actions-container'>
          <button className='submit'>Submit</button>
          <button className='reset' type='reset' >Reset</button>
        </div>
      </form>
    </section>
  )
}

export default AppLogin