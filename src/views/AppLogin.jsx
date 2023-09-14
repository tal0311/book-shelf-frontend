import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/actions/user.actions.js'
import { useNavigate } from 'react-router-dom'

const AppLogin = () => {
  const [credentials, setCredentials] = useState({ username: 'al.amit', password: '1234' })
  const [isVisible, setIsVisible] = useState(false)

  const loggedInUser = useSelector(state => state.userModule.loggedInUser)
  const navigate = useNavigate()
  useEffect(() => {
    if (loggedInUser) {
      console.log('loggedInUser', loggedInUser);
      navigate('/shelf')

    }
  }, [loggedInUser])

  const dispatch = useDispatch()
  const handleSubmit = (ev) => {
    ev.preventDefault()
    console.log('submit');
    const credentials = Object.fromEntries(new FormData(ev.target));
    console.debug('♠️ ~ file: AppLogin.jsx:10 ~ handleSubmit ~ credentials:', credentials)
    dispatch(login(credentials))
  }
  const togglePassWordVisability = () => {
    setIsVisible(!isVisible)
  }

  return (
    <section className='app-login grid'>
      <form onSubmit={handleSubmit} >
        <label htmlFor="text">username</label>
        <input type="text" name='username' value={credentials.username} />

        <div className="password-container">
          <label htmlFor="password">password</label>
          <input type={isVisible ? 'text' : 'password'} value={credentials.password} name='password' />
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