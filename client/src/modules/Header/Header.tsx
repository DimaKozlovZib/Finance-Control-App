import logo from '@/assets/logo.svg'
import { Button } from '@/components/ui/button'
import GitHubLogo from '@/components/ui/GitHubLogo'
import { STATISTIC_PATH, TRANSACTIONS_PATH } from '@/routes/paths'
import clsx from 'clsx'
import { LogOut } from 'lucide-react'
import { Link, useLocation } from 'react-router'

const gitHubLink = 'https://github.com/DimaKozlovZib/Finance-Control-App'

const Header = () => {
	const location = useLocation()

	const goToGitHubRepos = () => (window.location.href = gitHubLink)
	return (
		<div className="w-full fixed z-30 top-0 bg-neutral-800">
			<div
				className={clsx(
					'py-3 px-5 max-w-7xl m-auto flex justify-between'
					//'border-dashed border-neutral-50 border-r-1 border-l-1'
				)}
			>
				<div className="flex gap-8 items-center">
					<img src={logo} className="w-9 h-9" />
					<div className="flex items-center text-base gap-3">
						<Link
							to={TRANSACTIONS_PATH}
							className={clsx(
								'py-1.5 px-4 rounded-md hover:bg-neutral-700/80',
								'transition-colors duration-150 ease-in',
								location.pathname === TRANSACTIONS_PATH
									? 'bg-neutral-700/70 pointer-events-none'
									: ''
							)}
						>
							Транзакции
						</Link>
						<Link
							to={STATISTIC_PATH}
							className={clsx(
								'py-1.5 px-4 rounded-md hover:bg-neutral-700/80',
								'transition-colors duration-150 ease-in',
								location.pathname === STATISTIC_PATH
									? 'bg-neutral-700/70 pointer-events-none'
									: ''
							)}
						>
							Статистика
						</Link>
					</div>
				</div>

				<div className="flex items-center gap-2 w-[100px] justify-end">
					<Link
						className={clsx(
							'py-2 px-3 rounded-md hover:bg-neutral-700/80 cursor-pointer',
							'transition-colors duration-150 ease-in'
						)}
						to={gitHubLink}
					>
						<GitHubLogo className="size-5" />
					</Link>
					<button
						className={clsx(
							'py-2 px-3 rounded-md hover:bg-neutral-700/80 cursor-pointer',
							'transition-colors duration-150 ease-in'
						)}
					>
						<LogOut className="size-5" />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Header
