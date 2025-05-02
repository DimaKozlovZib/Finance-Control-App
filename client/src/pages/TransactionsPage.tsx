import BtnsTransactionsForm from '@/components/features/BtnsTransactionsForm/BtnsTransactionsForm'
import Layout from './Layout'

const TransactionsPage = () => {
	return (
		<Layout>
			<h3 className="text-neutral-50 text-3xl mb-3">
				Добавить транзакцию
			</h3>
			<BtnsTransactionsForm />
		</Layout>
	)
}

export default TransactionsPage
