import { API_URL } from '@/constants/mainConstants'

const registrationUrl = 'auth/registration'
const verifyEmailUrl = 'auth/setVerifyEmailCode'

export function registrationQuery(user: {
	name: string
	email: string
	sex: boolean
	password: string
}) {
	return async () => {
		const response = await fetch(`${API_URL}/${registrationUrl}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		return response
	}
}

export function verifyEmailQuery(email: string) {
	return async () => {
		const response = await fetch(`${API_URL}/${verifyEmailUrl}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email })
		})
		return response
	}
}
