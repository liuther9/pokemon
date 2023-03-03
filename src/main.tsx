import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ErrorPage from './ErrorPage'
import Profile from './routes/Profile'
import Root from './routes/root'
import Main from './routes/Main'
import { Provider } from 'react-redux'
import { store } from './store'
import Home from './routes/Home'
const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
			{
        path: '/profile/:id',
        element: <Profile />
			},
			{
        path: '/main',
        element: <Main />
			},
		],
	},
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
	</React.StrictMode>
)
