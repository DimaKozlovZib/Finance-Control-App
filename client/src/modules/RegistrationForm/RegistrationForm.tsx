import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router'
import { LOGIN_PATH } from '@/routes/paths'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { RefreshCcw } from 'lucide-react'
import MainInputs from './mainInputs'
import useRegistration from './useRegistration'

const verifyEmailCodeLabel = 'код на почте'

export const RegistrationForm = () => {
	const navigate = useNavigate()

	const {
		verifyEmailRequest,
		registrationRequest,
		openCodeInput,
		registration,
		codeOnChange,
		formStates,
		setFormStates,
		errorMessage,
		verifyCode
	} = useRegistration()
	const [codeInputActive, setCodeInputActive] = useState<boolean>(false)

	useEffect(() => {
		if (verifyEmailRequest.isSuccess) setCodeInputActive(true)
	}, [verifyEmailRequest.isSuccess])

	const goToLoginPage = () => navigate(LOGIN_PATH)
	return (
		<div
			id="RegistrationForm"
			className={clsx(
				'max-w-xl px-2 sm:px-5 py-7 pb-4 m-auto w-full',
				'sm:border-l-1 sm:border-t-1 sm:border-b-1 sm:border-r-1 border-neutral-600 rounded-md',
				'bg-neutral-900/50'
			)}
		>
			<h2 className="text-center text-2xl text-neutral-50">
				Регистрация
			</h2>

			<MainInputs formStates={formStates} setFormStates={setFormStates} />

			<div
				className={clsx(
					'mt-5 flex gap-2',
					codeInputActive ? '' : 'hidden'
				)}
			>
				<Input
					value={verifyCode}
					onChange={codeOnChange}
					placeholder={verifyEmailCodeLabel}
					className="w-[250px] max-w-[80%]"
					type="text"
					id="verifyEmailCode"
				/>
				<button className="disabled:opacity-50 not-disabled:cursor-pointer">
					<RefreshCcw />
				</button>
			</div>

			<div className="mt-1 min-h-7">{errorMessage}</div>

			<Button
				variant={'default'}
				className="mt-2 cursor-pointer bg-blue-800 mx-auto text-neutral-50 hover:bg-blue-600 block w-full"
				onClick={codeInputActive ? registration : openCodeInput}
			>
				{codeInputActive ? 'Зарегистрироваться' : 'Продолжить'}
			</Button>

			<p className="text-sm text-white text-center mt-2">
				Уже есть аккаунт?
				<Button
					onClick={goToLoginPage}
					variant={'link'}
					className="text-blue-500 px-0 py-0 ml-1 cursor-pointer"
				>
					Войти
				</Button>
			</p>
		</div>
	)
}
