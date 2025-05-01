import Header from '@/modules/Header/Header'
import { FC, JSX } from 'react'

interface ILayout {
	children: JSX.Element
}

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
		</div>
	)
}

export default Layout
