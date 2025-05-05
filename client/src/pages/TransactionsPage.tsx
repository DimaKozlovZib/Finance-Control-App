import BtnsTransactionsForm from '@/components/features/BtnsTransactionsForm/BtnsTransactionsForm'
import AppLayout from '../layouts/AppLayout'
import AddIncomeModal from '@/modules/AddIncomeModal/AddIncomeModal'
import { useEffect, useState } from 'react'
import AddExpensesModal from '@/modules/AddExpensesModal/AddExpensesModal'

enum ModalsKeys {
	IncomeModal = 'INCOME_MODAL',
	ExpenseModal = 'EXPENSE_MODAL'
}

const TransactionsPage = () => {
	const [activeModal, setActiveModal] = useState<ModalsKeys | null>(null)

	const closeModal = () => setActiveModal(null)

	const openIncomeModal = () => setActiveModal(ModalsKeys.IncomeModal)
	const openExpenseModal = () => setActiveModal(ModalsKeys.ExpenseModal)

	useEffect(() => {
		const ModalCssClass = 'modalActive'
		if (
			activeModal !== null &&
			!document.body.classList.contains(ModalCssClass)
		)
			document.body.classList.add(ModalCssClass)

		if (activeModal === null) document.body.classList.remove(ModalCssClass)
		return () => document.body.classList.remove(ModalCssClass)
	}, [activeModal])

	return (
		<>
			<AppLayout>
				<h3 className="text-neutral-50 text-3xl mb-4">
					Добавить транзакцию
				</h3>
				<BtnsTransactionsForm
					openIncomeModal={openIncomeModal}
					openExpenseModal={openExpenseModal}
				/>
			</AppLayout>
			{ModalsKeys.IncomeModal === activeModal && (
				<AddIncomeModal closeModal={closeModal} />
			)}
			{ModalsKeys.ExpenseModal === activeModal && (
				<AddExpensesModal closeModal={closeModal} />
			)}
		</>
	)
}

export default TransactionsPage
