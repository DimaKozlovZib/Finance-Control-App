import { LoginForm } from '@/modules/LoginForm/LoginForm'
import '../styles/RegistredForm.css'

export const LoginPage = () => {
	return (
		<div className="flex items-center flex-auto h-screen px-2">
			<LoginForm />
		</div>
	)
}
