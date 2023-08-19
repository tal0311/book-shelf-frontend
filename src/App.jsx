import React, { useEffect, useState } from "react";


import "./assets/styles/styles.scss";


// to set the global $error object
import { errorService } from './services/error.service'
import RouterView from './cmps/RouterView.jsx'
import AppNav from './cmps/AppNav.jsx'
import AppHeader from './cmps/AppHeader.jsx'
import { useLocation } from 'react-router-dom'



const App = () => {

  const location = useLocation()

  const [isNavDisplayed, setIsNavDisplayed] = useState(true)
  useEffect(() => {
    updateNav()
  }, [location.pathname])

  const updateNav = () => {
    const displayedOpts = ['/', '/explore', '/login']
    if (displayedOpts.includes(location.pathname)) {
      setIsNavDisplayed(false)
      return
    }
    setIsNavDisplayed(true)
  }

  return (
    <section className="app-container main-layout">
      <AppHeader />
      <div className="router-view">
        <RouterView />
      </div>
      {isNavDisplayed && < AppNav />}
    </section>

  )
}
export default App

