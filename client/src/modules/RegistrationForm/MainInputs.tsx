import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { ChangeEvent, Dispatch, memo, SetStateAction, useCallback } from 'react'

type FormStateType = {
	name: string
	email: string
	password: string
	sex: 0 | 1
}

const FORM_LABELS = {
	name: 'Имя пользователя',
	password: 'Пароль',
	email: 'Почта'
}

const GENDER_OPTIONS = { 1: 'Мужчина', 0: 'Женщина' }
const GENDER_OPTIONS_REVERSED = { Мужчина: 1, Женщина: 0 }
type genderOptionsInputType = 'Мужчина' | 'Женщина'

interface IMainInputs {
	formStates: FormStateType
	setFormStates: {
		setName: Dispatch<SetStateAction<string>>
		setEmail: Dispatch<SetStateAction<string>>
		setPassword: Dispatch<SetStateAction<string>>
		setSex: Dispatch<SetStateAction<0 | 1>>
	}
}

const MainInputs = memo(({ formStates, setFormStates }: IMainInputs) => {
	const { setEmail, setName, setPassword, setSex } = setFormStates

	const nameChange = useCallback(
		() => (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value),
		[setName]
	)

	const emailChange = useCallback(
		() => (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
		[setEmail]
	)

	const passwordChange = useCallback(
		() => (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
		[setPassword]
	)

	const sexChange = useCallback(
		() => (e: ChangeEvent<HTMLInputElement>) =>
			setSex(
				GENDER_OPTIONS_REVERSED[
					e.target.value as genderOptionsInputType
				] as 0 | 1
			),
		[setSex]
	)
	return (
		<div className="mt-7 text-neutral-50">
			<Label htmlFor="usernameInput">{FORM_LABELS.name}</Label>
			<Input
				value={formStates.name}
				onChange={nameChange}
				placeholder={FORM_LABELS.name}
				className="mt-2"
				type="text"
				id="usernameInput"
			/>

			<Label htmlFor="emailInput" className="mt-5">
				{FORM_LABELS.email}
			</Label>
			<Input
				value={formStates.email}
				onChange={emailChange}
				placeholder={FORM_LABELS.email}
				className="mt-2"
				type="email"
				id="emailInput"
			/>

			<Label htmlFor="passwordInput" className="mt-5">
				{FORM_LABELS.password}
			</Label>
			<Input
				value={formStates.password}
				onChange={passwordChange}
				placeholder={FORM_LABELS.password}
				className="mt-2"
				type="password"
				id="passwordInput"
			/>

			<RadioGroup
				className="gap-3 mt-5 text-neutral-300 text-md flex"
				defaultValue={GENDER_OPTIONS[formStates.sex]}
				onValueChange={sexChange}
			>
				<div className="flex items-center space-x-2">
					<RadioGroupItem
						value={GENDER_OPTIONS[1]}
						id="male-input-id"
					/>
					<Label htmlFor="male-input-id">Мужчина</Label>
				</div>
				<div className="flex items-center space-x-2">
					<RadioGroupItem
						value={GENDER_OPTIONS[0]}
						id="female-input-id"
					/>
					<Label htmlFor="female-input-id">Женщина</Label>
				</div>
			</RadioGroup>
		</div>
	)
})

export default MainInputs
