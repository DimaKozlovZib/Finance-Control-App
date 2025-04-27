import LoginPage from '@/pages/LoginPage'
import { createBrowserRouter } from 'react-router'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <LoginPage />
	}
])
