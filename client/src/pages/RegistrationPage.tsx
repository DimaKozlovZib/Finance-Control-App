import { RegistrationForm } from '@/modules/RegistrationForm/RegistrationForm'
import '../styles/RegistredForm.css'

export const RegistrationPage = () => {
	return (
		<div className="flex items-center flex-auto h-screen px-2">
			<RegistrationForm />
		</div>
	)
}
