import './styles/App.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/routes'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GOOGLE_OAUTH_ID } from './constants/mainConstants'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<GoogleOAuthProvider clientId={GOOGLE_OAUTH_ID}>
				<RouterProvider router={router} />
			</GoogleOAuthProvider>
		</QueryClientProvider>
	)
}

export default App
