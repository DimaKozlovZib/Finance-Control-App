import { LoginPage } from '@/pages/LoginPage'
import { createBrowserRouter } from 'react-router'
import { LOGIN_PATH, REGISTRATION_PATH, TRANSACTIONS_PATH } from './paths'
import { RegistrationPage } from '@/pages/RegistrationPage'
import TransactionsPage from '@/pages/TransactionsPage'

export const router = createBrowserRouter([
	{
		path: LOGIN_PATH,
		element: <LoginPage />
	},
	{
		path: REGISTRATION_PATH,
		element: <RegistrationPage />
	},
	{
		path: TRANSACTIONS_PATH,
		element: <TransactionsPage />
	}
])
