import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { useNavigate } from 'react-router'
import { LOGIN_PATH } from '@/routes/paths'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useState } from 'react'
import GoogleLogo from '@/components/ui/GoogleLogo'
import { useGoogleLogin } from '@react-oauth/google'
import clsx from 'clsx'

const femaleKey = '0',
	maleKey = '1'

export const RegistrationForm = () => {
	const navigate = useNavigate()
	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [passoword, setPassoword] = useState<string>('')
	const [sex, setSex] = useState<string | undefined>()

	const registration = useGoogleLogin({
		onSuccess: (tokenResponse) => console.log(tokenResponse)
	})

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
			<div className="mt-7 text-neutral-50">
				<Label htmlFor="usernameInput">Имя пользователя</Label>
				<Input
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Имя пользователя"
					className="mt-2"
					type="text"
					id="usernameInput"
				/>

				<Label htmlFor="emailInput" className="mt-5">
					Почта
				</Label>
				<Input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="Почта"
					className="mt-2"
					type="email"
					id="emailInput"
				/>

				<Label htmlFor="passwordInput" className="mt-5">
					Пароль
				</Label>
				<Input
					value={passoword}
					onChange={(e) => setPassoword(e.target.value)}
					placeholder="Пароль"
					className="mt-2"
					type="password"
					id="passwordInput"
				/>

				<RadioGroup
					className="gap-3 mt-5 text-neutral-300 text-md flex"
					defaultValue={sex}
					onValueChange={(value) => setSex(value)}
				>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value={maleKey} id={maleKey} />
						<Label htmlFor={maleKey}>Мужчина</Label>
					</div>
					<div className="flex items-center space-x-2">
						<RadioGroupItem value={femaleKey} id={femaleKey} />
						<Label htmlFor={femaleKey}>Женщина</Label>
					</div>
				</RadioGroup>
			</div>

			<div className="mt-1 min-h-7"></div>

			<Button
				variant={'default'}
				className="mt-2 cursor-pointer bg-blue-800 mx-auto text-neutral-50 hover:bg-blue-600 block w-full"
			>
				Зарегистрироваться
			</Button>

			<Button
				onClick={() => registration()}
				variant={'default'}
				className="mt-4 cursor-pointer bg-neutral-800 mx-auto 
				text-neutral-50 hover:bg-neutral-700 block"
			>
				<GoogleLogo />
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
