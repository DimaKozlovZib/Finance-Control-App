import './styles/App.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/routes'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { GOOGLE_OAUTH_ID } from './constants/mainConstants'

function App() {
	return (
		<GoogleOAuthProvider clientId={GOOGLE_OAUTH_ID}>
			<RouterProvider router={router} />
		</GoogleOAuthProvider>
	)
}

export default App
