// routes.js
import { Outlet, createBrowserRouter } from 'react-router-dom';
import AppIndex from './views/AppIndex';
import AppHome from './views/AppHome';
import ShelfDetails from './views/ShelfDetails.jsx';
import AppLogin from './views/AppLogin.jsx';
import BookDetails from './views/BookDetails.jsx';
import DashBoard from './views/DashBoard.jsx';


const routes = [
 {
  path: '/',
  element: <AppHome />,
  name: 'home'
 },
 {
  path: '/shelf',
  element: < AppIndex />,
  name: 'shelf'
 },
 {
  path: '/shelf/:shelfId',
  element: <ShelfDetails />,
  name: 'shelf-details',
  children: [
   {
    path: 'book/:bookId',
    element: <BookDetails />,
    name: 'book-details'
   }
  ]
 },
 {
  path: '/login',
  element: <AppLogin />,
  name: 'login'
 },
 {
  path: '/dashboard',
  element: <DashBoard />,
  name: 'dashboard'
 },
 {
  path: '*',
  element: <Outlet />,
  name: 'not-found'
 },
];


export const router = createBrowserRouter(routes);


