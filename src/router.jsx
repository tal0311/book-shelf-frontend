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
  path: '/home',
  element: <AppHome />,

 },
 {
  path: '/shelf',
  element: < AppIndex />,

 },
 {
  path: '/shelf/:id',
  element: <ShelfDetails />,
  children: [
   {
    path: 'book/:id',
    element: <BookDetails />,
   }
  ]
 },
 {
  path: '/login',
  element: <AppLogin />,
 },
 {
  path: '/dashboard',
  element: <DashBoard />,
 },
 {
  path: '*',
  element: <Outlet />,
 },
];


export const router = createBrowserRouter(routes);


