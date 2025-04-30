import { LoginPage } from '@/pages/LoginPage'
import { createBrowserRouter } from 'react-router'
import { LOGIN_PATH, REGISTRATION_PATH } from './paths'
import { RegistrationPage } from '@/pages/RegistrationPage'

export const router = createBrowserRouter([
	{
		path: LOGIN_PATH,
		element: <LoginPage />
	},
	{
		path: REGISTRATION_PATH,
		element: <RegistrationPage />
	}
])
