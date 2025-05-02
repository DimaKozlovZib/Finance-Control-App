import Header from '@/modules/Header/Header'
import { FC, ReactNode } from 'react'

interface ILayout {
	children: ReactNode
}

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<div>
			<Header />
			<main className="mt-20 max-w-7xl px-2 mx-auto">{children}</main>
		</div>
	)
}

export default Layout
