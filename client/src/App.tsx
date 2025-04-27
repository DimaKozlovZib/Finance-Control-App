import React from 'react'
import './styles/App.scss'
import { RouterProvider } from 'react-router'
import { router } from './routes/routes'

function App() {
	return <RouterProvider router={router} />
}

export default App
