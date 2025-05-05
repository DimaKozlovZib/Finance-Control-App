import Header from '@/modules/Header/Header'
import { FC, ReactNode } from 'react'

interface ILayout {
	children: ReactNode
}

const AppLayout: FC<ILayout> = ({ children }) => {
	return (
		<div>
			<Header />
			<main className="mt-18 max-w-7xl px-2 mx-auto">{children}</main>
		</div>
	)
}

export default AppLayout
