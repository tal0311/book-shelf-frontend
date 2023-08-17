import {
 BrowserRouter,
 Route,
 Routes,
 Outlet,
 useNavigate,
 RouterProvider,
 useMatch,
 Navigate,
 useParams,
 useSearchParams
} from "react-router-dom";




import AppHome from './../views/AppHome.jsx'
import AppIndex from './../views/AppIndex.jsx'
import AppExplore from './../views/AppExplore.jsx'
import AppLogin from './../views/AppLogin.jsx'
import DashBoard from './../views/DashBoard.jsx'
import ShelfDetails from './../views/ShelfDetails.jsx'
import BookDetails from './../views/BookDetails.jsx'

import React from 'react'

// before each route

const routesHistory = []
function RouteGuard({ routeName, children }) {

 const params = useParams()
 const [searchParams] = useSearchParams();
 const queryParams = {};
 for (const [key, value] of searchParams) {
  queryParams[key] = value;
 }

 const user = useSelector(state => state.userReducer.user)
 routesHistory.push({ routeName, user, params, query })

 const isLoggedIn = true


 if (routeName === 'details') {
  console.log('routeName', routeName);
  // some logic
  if (!isLoggedIn) return <Navigate to="/" />
 }

 if (routeName === 'edit') {
  // some logic
  if (!isLoggedIn) return <Navigate to="/" />
 }
 if (routeName === 'add') {
  // some logic
  if (!isLoggedIn) return <Navigate to="/" />
 }
 return <>{children}</>
}

const RouterView = () => {
 return (
  <Routes>
   <Route path="/" name="home" element={<AppHome />} />
   <Route path="/shelf" name="app" element={<AppIndex />} />
   <Route path="/explore" name="explore" element={<AppExplore />} />

   <Route path="/shelf/:shelfId" name="details" element={<ShelfDetails />} >
    <Route path="/shelf/:shelfId/book/:bookId" name="book-details" element={<BookDetails />} />
   </Route>

   <Route path="/login" name="login" element={<AppLogin />} />
   <Route path="/dashboard" name="dashboard" element={<DashBoard />} />
   <Route path="*" element={<Outlet />} />
  </Routes>
 )
}

export default RouterView