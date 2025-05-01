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
		<div className="w-full border-b-1 border-dashed border-neutral-50">
			<div
				className={clsx(
					'py-3 px-5 max-w-7xl m-auto flex justify-between',
					'border-dashed border-neutral-50 border-r-1 border-l-1'
				)}
			>
				<div className="flex gap-8 items-center">
					<img src={logo} className="w-9 h-9" />
					<div className="flex items-center text-base gap-3">
						<Link
							to={TRANSACTIONS_PATH}
							className={clsx(
								'py-1.5 px-4 rounded-md hover:bg-neutral-800/80',
								'transition-colors duration-150 ease-in',
								location.pathname === TRANSACTIONS_PATH
									? 'bg-neutral-800/70 pointer-events-none'
									: ''
							)}
						>
							Транзакции
						</Link>
						<Link
							to={STATISTIC_PATH}
							className={clsx(
								'py-1.5 px-4 rounded-md hover:bg-neutral-800/80',
								'transition-colors duration-150 ease-in',
								location.pathname === STATISTIC_PATH
									? 'bg-neutral-800/70 pointer-events-none'
									: ''
							)}
						>
							Статистика
						</Link>
					</div>
				</div>

				<div className="flex items-center gap-2 w-[100px] justify-end">
					<Button
						variant={'ghost'}
						className="cursor-pointer"
						onClick={goToGitHubRepos}
					>
						<GitHubLogo className="size-5" />
					</Button>
					<Button variant={'ghost'} className="cursor-pointer">
						<LogOut className="size-5" />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Header
