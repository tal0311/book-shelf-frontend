import React, { useEffect, useState } from "react";


import "./assets/styles/styles.scss";
// import { router } from './router'

// to set the global $error object
import { errorService } from './services/error.service'
import RouterView from './cmps/RouterView.jsx'
import AppNav from './cmps/AppNav.jsx'
import AppHeader from './cmps/AppHeader.jsx'


{/* <SvgIcon iconname='logo' /> */ }
const App = () => {

  const [path, setPath] = useState('/')
  useEffect(() => {
    updateNav()
  }, [window.location.pathname])


  const updateNav = () => {
    setPath(window.location.pathname)
  }

  return (


    <section className="app-container main-layout">
      <AppHeader />
      <div className="router-view">
        <RouterView />
      </div>
      {path !== '/' && < AppNav />}
    </section>

  )
}
export default App

