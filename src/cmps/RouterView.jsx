import {
 BrowserRouter,
 Route,
 Routes,
 Outlet,
 useNavigate,
 RouterProvider,
 useMatch
} from "react-router-dom";




import AppHome from './../views/AppHome.jsx'
import AppIndex from './../views/AppIndex.jsx'
import AppExplore from './../views/AppExplore.jsx'
import AppLogin from './../views/AppLogin.jsx'
import DashBoard from './../views/DashBoard.jsx'
import ShelfDetails from './../views/ShelfDetails.jsx'
import BookDetails from './../views/BookDetails.jsx'

import React from 'react'

const RouterView = () => {
 return (
  <Routes>
   <Route path="/" name="home" element={<AppHome />} />
   <Route path="/shelf" name="app" element={<AppIndex />} />
   <Route path="/explore" name="explore" element={<AppExplore />} />
   <Route path="/shelf/:shelfId" name="details" element={<ShelfDetails />} />
   <Route path="/shelf/:shelfId/book/:bookId" name="book-details" element={<BookDetails />} />
   <Route path="/login" name="login" element={<AppLogin />} />
   <Route path="/dashboard" name="dashboard" element={<DashBoard />} />
   <Route path="*" element={<Outlet />} />
  </Routes>
 )
}

export default RouterView