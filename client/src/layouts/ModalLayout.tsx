import { FC, ReactNode, useEffect } from 'react'

interface IModalLayout {
	closeModal: () => void
	children: ReactNode
}

const ModalLayout: FC<IModalLayout> = ({ children, closeModal }) => {
	useEffect(() => {
		const wrapper = document.querySelector('.ModalWrapper')

		wrapper?.addEventListener('click', (e) => {
			if (e.target === wrapper) closeModal()
		})
	}, [closeModal])

	return (
		<div className="ModalWrapper">
			<div className="ModalCont">{children}</div>
		</div>
	)
}

export default ModalLayout
