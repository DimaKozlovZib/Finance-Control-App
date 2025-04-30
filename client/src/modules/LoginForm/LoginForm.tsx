import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router'
import { REGISTRATION_PATH } from '@/routes/paths'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import GoogleLogo from '@/components/ui/GoogleLogo'

export const LoginForm = () => {
	const navigate = useNavigate()
	const [passoword, setPassoword] = useState<string>('')
	const [email, setEmail] = useState<string>('')

	const googleLogin = useGoogleLogin({
		onSuccess: (tokenResponse) => console.log(tokenResponse)
	})

	const goToRegistrationPage = () => navigate(REGISTRATION_PATH)
	return (
		<div className="Registration_LoginForm">
			<h2 className="text-center text-2xl text-neutral-50">Войти</h2>
			<div className="mt-7 text-neutral-50">
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
			</div>

			<div className="mt-1 min-h-7"></div>

			<Button
				variant={'default'}
				className="mt-2 cursor-pointer bg-blue-800 mx-auto hover:bg-blue-600 block w-full text-neutral-50"
			>
				Войти
			</Button>

			<Button
				onClick={() => googleLogin()}
				variant={'default'}
				className="mt-4 cursor-pointer bg-neutral-800 mx-auto 
				text-neutral-50 hover:bg-neutral-700 block"
			>
				<GoogleLogo />
			</Button>

			<p className="text-sm text-white text-center mt-2">
				Ещё нет аккаунта?
				<Button
					onClick={goToRegistrationPage}
					variant={'link'}
					className="text-blue-500 px-0 py-0 ml-1 cursor-pointer"
				>
					Зарегистрироваться
				</Button>
			</p>
		</div>
	)
}
