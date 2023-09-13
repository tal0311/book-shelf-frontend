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

import { useSelector } from 'react-redux'


import AppHome from './../views/AppHome.jsx'
import AppIndex from './../views/AppIndex.jsx'
import AppExplore from './../views/AppExplore.jsx'
import AppLogin from './../views/AppLogin.jsx'
import DashBoard from './../views/DashBoard.jsx'
import ShelfDetails from './../views/ShelfDetails.jsx'
import BookDetails from './../views/BookDetails.jsx'
import Test from './../views/Test.jsx'

import React from 'react'

// before each route


const routesHistory = []
window.routesHistory = routesHistory
function RouteGuard({ routeName, children }) {

 const params = useParams()
 const [searchParams] = useSearchParams();
 const queryParams = {};
 for (const [key, value] of searchParams) {
  queryParams[key] = value;
 }

 const user = useSelector(state => state.userModule.loggedInUser)
 routesHistory.push({ routeName, user, params, queryParams })

 if (!user) return <Navigate to="/login" />
 if (routeName === 'shelf') {
  console.log('routeName', routeName);
 }
 if (routeName === 'edit') {
  console.log('routeName', routeName);
 }
 if (routeName === 'add') {
  console.log('routeName', routeName);
 }
 return <>{children}</>
}





const RouterView = () => {
 return (
  <Routes>
   <Route path="/" name="home" element={<AppHome />} />
   <Route path="/test" name="home" element={<Test />} />
   <Route path="/shelf" name="app" element={<RouteGuard routeName="shelf"><AppIndex /></RouteGuard>} />
   <Route path="/explore" name="explore" element={<RouteGuard><AppExplore /></RouteGuard>} />


   <Route path="/shelf/:shelfId" name="details" element={<RouteGuard routeName="shelf-details"><ShelfDetails /></RouteGuard>} >
    <Route path="/shelf/:shelfId/book/:bookId" name="book-details" element={<RouteGuard routeName="book-details"><BookDetails /></RouteGuard>} />
   </Route>

   <Route path="/login" name="login" element={<AppLogin />} />
   <Route path="/dashboard" name="dashboard" element={<RouteGuard routeName="dashboard"><DashBoard /></RouteGuard>} />
   <Route path="*" element={<Outlet />} />
  </Routes>

 )

}

export default RouterView