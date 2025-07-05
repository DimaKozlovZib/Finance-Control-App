import { registrationQuery, verifyEmailQuery } from '@/api/auth'
import { useQuery } from '@tanstack/react-query'
import { ChangeEvent, useMemo, useState } from 'react'
import { checkData } from './dataValidation'

const useRegistration = () => {
	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [sex, setSex] = useState<1 | 0>(1)

	const [verifyCode, setVerifyCode] = useState<string>('')

	const [errorMessage, setErrorMessage] = useState<string>('')

	// отправка данных на регистрацию
	const registrationQueryParams = useMemo(
		() => ({
			queryKey: ['registration'],
			queryFn: () =>
				registrationQuery({
					name,
					email,
					password,
					sex: sex == 1 ? true : false
				}),
			enabled: false,
			retry: 0
		}),
		[sex, name, email, password]
	)
	const registrationRequest = useQuery(registrationQueryParams)

	const registration = async () => {
		const checkMessage = checkData(name, email, password)
		if (checkMessage) return setErrorMessage(checkMessage)

		const data = await registrationRequest.refetch()
		console.log(data)
	}

	// отправка письма с кодом подтверждения почты
	const verifyEmailQueryParams = useMemo(
		() => ({
			queryKey: ['verifyEmail'],
			queryFn: () => verifyEmailQuery(email),
			enabled: false,
			retry: 0
		}),
		[email]
	)
	const verifyEmailRequest = useQuery(verifyEmailQueryParams)

	const openCodeInput = async () => {
		const checkMessage = checkData(name, email, password)
		if (checkMessage) return setErrorMessage(checkMessage)

		setErrorMessage('')

		verifyEmailRequest.refetch()
	}

	// сбор состояний для полей формы
	const formStates = useMemo(
		() => Object({ name, password, email, sex }),
		[name, password, email, sex]
	)

	const setFormStates = useMemo(
		() => ({ setEmail, setName, setPassword, setSex }),
		[setEmail, setName, setPassword, setSex]
	)

	const codeOnChange = (e: ChangeEvent<HTMLInputElement>) =>
		setVerifyCode(e.target.value)

	return {
		verifyEmailRequest,
		registrationRequest,
		openCodeInput,
		registration,
		codeOnChange,
		formStates,
		setFormStates,
		errorMessage,
		verifyCode
	}
}

export default useRegistration
