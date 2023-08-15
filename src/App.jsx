import React, { useEffect, useState } from "react";

import {
  BrowserRouter,
  Route,
  Routes,
  Outlet,
  useNavigate,
  RouterProvider,
  useMatch
} from "react-router-dom";
import "./assets/styles/styles.scss";
// import { router } from './router'

// to set the global $error object
import { errorService } from './services/error.service'

import AppLoader from "./cmps/AppLoader";
import SvgIcon from './cmps/SvgIcon'
import AppHeader from './cmps/AppHeader.jsx'
import AppNav from './cmps/AppNav.jsx'
import AppHome from './views/AppHome.jsx'
import AppIndex from './views/AppIndex.jsx'
import AppExplore from './views/AppExplore.jsx'
import AppLogin from './views/AppLogin.jsx'
import DashBoard from './views/DashBoard.jsx'
import ShelfDetails from './views/ShelfDetails.jsx'
import BookDetails from './views/BookDetails.jsx'



{/* <SvgIcon iconname='logo' /> */ }
const App = () => {

  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => {
    updateNav()
  }, [path])


  const navigate = useNavigate()
  const match = useMatch('/')

  const updateNav = () => {
    setPath(window.location.pathname)
  }

  return (


    <section className="app-container main-layout">
      <AppHeader />
      <div className="router-view">
        <Routes>
          <Route path="/" element={<AppHome />} />
          <Route path="/shelf" element={<AppIndex />} />
          <Route path="/explore" element={<AppExplore />} />
          <Route path="/shelf/:shelfId" element={<ShelfDetails />} />
          <Route path="/shelf/:shelfId/book/:bookId" element={<BookDetails />} />
          <Route path="/login" element={<AppLogin />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="*" element={<Outlet />} />
        </Routes>
      </div>
      <AppNav />
    </section>

  )
}
export default App

