import { Button } from '@/components/ui/button'
import DatePicker from '@/components/ui/datePicker'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/components/ui/select'
import IncomeCategoryNames from '@/constants/incomeCategories'
import ModalLayout from '@/layouts/ModalLayout'
import { FC, useState } from 'react'

interface IAddIncomeModal {
	closeModal: () => void
}

const AddIncomeModal: FC<IAddIncomeModal> = ({ closeModal }) => {
	const [incomeSum, setIncomeSum] = useState<number | undefined>()
	const [category, setCategory] = useState<string>('')
	const [date, setDate] = useState<Date | undefined>(new Date())
	const [comment, setComment] = useState('')

	return (
		<ModalLayout closeModal={closeModal}>
			<h2 className="text-center text-xl">Добавление записи о доходе</h2>

			<Label className="text-md mt-4">Сумма дохода</Label>
			<Input
				value={incomeSum}
				onChange={(e) => setIncomeSum(Number(e.target.value))}
				className="mt-1"
				type="number"
				placeholder="Сумма руб."
			/>

			<div className="flex gap-4 mt-3">
				<div className="flex-1">
					<Label className="text-md">Категория дохода</Label>

					<Select
						defaultValue={category}
						onValueChange={(val) => setCategory(val)}
					>
						<SelectTrigger className="w-full mt-1">
							<SelectValue placeholder="Выберете категорию дохода" />
						</SelectTrigger>
						<SelectContent className="border-neutral-600">
							{Array.from(
								Object.entries(IncomeCategoryNames)
							).map(([numCatigoria, strCategoria]) => (
								<SelectItem value={String(numCatigoria)}>
									{strCategoria}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div className="flex-1">
					<Label className="text-md">Дата</Label>
					<DatePicker
						btnClassName="w-full mt-1"
						date={date}
						setDate={setDate}
					/>
				</div>
			</div>

			<Label className="mt-3 text-md" htmlFor="commentInput">
				Комментарий
			</Label>
			<Input
				type="text"
				className="w-full mt-1"
				id="commentInput"
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			/>

			<div className="min-h-4 mt-1"></div>

			<div className="flex gap-3 justify-end mt-3">
				<Button
					className="bg-neutral-700 text-neutral-50 hover:bg-neutral-600 cursor-pointer"
					variant={'default'}
					onClick={closeModal}
				>
					Отмена
				</Button>
				<Button
					variant={'default'}
					className="bg-blue-500/60 text-neutral-50 hover:bg-blue-500/80 cursor-pointer"
				>
					Добавить
				</Button>
			</div>
		</ModalLayout>
	)
}

export default AddIncomeModal
