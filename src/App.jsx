import React, { useEffect, useState } from "react";
import "./assets/styles/styles.scss";
// to set the global $error object
import { errorService } from './services/error.service'
import { eventBus, showSuccessMsg, showUserMsg } from "./services/event-bus.service";
import { useLocation } from 'react-router-dom'
import RouterView from './cmps/RouterView.jsx'
import AppNav from './cmps/AppNav.jsx'
import AppHeader from './cmps/AppHeader.jsx'
import UserMsg from "./cmps/UserMsg";
import AppModal from "./cmps/AppModal";
import { useDispatch } from 'react-redux'
import { setFilterBy } from './store/actions/items.actions.js'



const App = () => {
  errorService.setup()
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
      <AppModal />
      <UserMsg />
    </section>

  )
}
export default App

