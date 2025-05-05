import { cn } from '@/lib/utils'
import { Button } from './button'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import { CalendarIcon } from 'lucide-react'
import { Calendar } from './calendar'
import { format } from 'date-fns'
import { Dispatch, FC, SetStateAction } from 'react'

interface IDatePicker {
	date: Date | undefined
	setDate: Dispatch<SetStateAction<Date | undefined>>
	btnClassName?: string
	className?: string
}

const DatePicker: FC<IDatePicker> = ({
	date,
	setDate,
	btnClassName,
	className
}) => {
	return (
		<div className={className}>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						variant={'outline'}
						className={cn(
							'justify-start text-left font-normal',
							!date && 'text-muted-foreground',
							btnClassName
						)}
					>
						<CalendarIcon />
						{date ? format(date, 'PPP') : <span>Pick a date</span>}
					</Button>
				</PopoverTrigger>
				<PopoverContent
					className="w-auto p-0 border-neutral-600"
					align="start"
				>
					<Calendar
						mode="single"
						selected={date}
						onSelect={setDate}
						initialFocus
					/>
				</PopoverContent>
			</Popover>
		</div>
	)
}

export default DatePicker
