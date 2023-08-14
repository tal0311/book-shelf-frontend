import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./assets/styles/styles.scss";
import { router } from './router'


import { useMatch, useNavigate } from 'react-router-dom';

import AppLoader from "./cmps/AppLoader";
import SvgIcon from './cmps/SvgIcon'
import AppHeader from './cmps/AppHeader.jsx'
import AppNav from './cmps/AppNav.jsx'

{/* <SvgIcon iconname='logo' /> */ }
const App = () => {

  const [items, setItems] = useState(null)

  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => {
    updateNav()
  }, [path])

  const updateNav = () => {
    if (path === '/') setPath('/')
  }



  // if (!value) return <AppLoader />
  return (
    <section className="app-container main-layout">
      <AppHeader />
      <div className="router-view">
        <RouterProvider router={router} />
      </div>
      {path !== '/' && <AppNav />}
    </section>
  )
}
export default App

