import clsx from 'clsx'
import { Minus, Plus } from 'lucide-react'
import { FC } from 'react'

interface IBtnsTransactionsForm {
	openIncomeModal: () => void
	openExpenseModal: () => void
}

const BtnsTransactionsForm: FC<IBtnsTransactionsForm> = ({
	openIncomeModal,
	openExpenseModal
}) => {
	return (
		<div className="flex gap-4 bg-neutral-800 py-5 px-4 rounded-xl">
			<button
				onClick={openIncomeModal}
				className={clsx(
					'bg-blue-500/60 block h-30 text-neutral-50 text-base rounded-xl',
					'w-[225px] px-5 cursor-pointer',
					'hover:bg-blue-500/80 transition-colors duration-150 ease-in'
				)}
			>
				<Plus className="size-10 stroke-white m-auto" />
				<h3 className="text-2xl">Доход</h3>
			</button>
			<button
				onClick={openExpenseModal}
				className={clsx(
					'bg-blue-500/60 block h-30 text-neutral-50 text-base rounded-xl',
					'w-[225px] px-5 cursor-pointer',
					'hover:bg-blue-500/80 transition-colors duration-150 ease-in'
				)}
			>
				<Minus className="size-10 stroke-white m-auto" />
				<h3 className="text-2xl">Трата</h3>
			</button>
		</div>
	)
}

export default BtnsTransactionsForm
