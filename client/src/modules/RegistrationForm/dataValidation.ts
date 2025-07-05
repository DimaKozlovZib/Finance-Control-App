const nameValidate = (name: string) => {
	if (name.length < 2) return 'Имя должно содержать минимум две буквы'
	return ''
}

const passwordValidate = (password: string) => {
	if (password.length < 8) return 'Пароль должен содержать минимум 8 символов'
	return ''
}

const emailRe =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

const emailValidate = (email: string) => {
	if (!email.toLowerCase().match(emailRe)) return 'Не корректная почта'
	return ''
}

const verifyCodeLenght = 5
const verifyCodeValidate = (code: string) => {
	if (code.length != verifyCodeLenght)
		return `Проверьте набраный код, в нём должно быть ${verifyCodeLenght} цифр`
	if (code.match(/\d+/))
		return `Проверьте набраный код, в нём должно быть только цифры`

	return ''
}

export const checkData = (
	name: string,
	email: string,
	password: string,
	code?: string
) => {
	const nameValidationResult = nameValidate(name)
	const emailValidationResult = emailValidate(email)
	const passwordValidationResult = passwordValidate(password)
	const codeValidationResult =
		code != undefined ? verifyCodeValidate(code) : ''

	return (
		nameValidationResult ||
		passwordValidationResult ||
		emailValidationResult ||
		codeValidationResult
	)
}
