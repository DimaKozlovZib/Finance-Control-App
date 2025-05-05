enum IncomeCategory {
	SALARY = 1, // Зарплата
	FREELANCE, // Фриланс (2)
	INVESTMENTS, // Инвестиции (3)
	DIVIDENDS, // Дивиденды (4)
	DEPOSIT_INTEREST, // Проценты по вкладам (5)
	RENT, // Сдача в аренду (6)
	PENSION, // Пенсия (7)
	SCHOLARSHIP, // Стипендия (8)
	SOCIAL_PAYMENTS, // Социальные выплаты (9)
	GIFTS, // Подарки (10)
	BONUSES, // Премии (11)
	REWARDS, // Бонусы (12)
	PART_TIME_WORK, // Подработка (13)
	ASSET_SALE, // Продажа имущества (14)
	DEBT_RETURN, // Возврат долга (15)
	GRANTS, // Гранты (16)
	CASHBACK, // Кэшбэк (17)
	ALIMONY, // Алименты (18)
	INHERITANCE, // Наследство (19)
	LOTTERY, // Лотерея (20)
	CROWDFUNDING, // Краудфандинг (21)
	AFFILIATE_PROGRAMS, // Партнерские программы (22)
	ROYALTIES // Авторские отчисления (23)
}

const IncomeCategoryNames: Record<IncomeCategory, string> = {
	[IncomeCategory.SALARY]: 'Зарплата',
	[IncomeCategory.FREELANCE]: 'Фриланс',
	[IncomeCategory.INVESTMENTS]: 'Инвестиции',
	[IncomeCategory.DIVIDENDS]: 'Дивиденды',
	[IncomeCategory.DEPOSIT_INTEREST]: 'Проценты по вкладам',
	[IncomeCategory.RENT]: 'Сдача в аренду',
	[IncomeCategory.PENSION]: 'Пенсия',
	[IncomeCategory.SCHOLARSHIP]: 'Стипендия',
	[IncomeCategory.SOCIAL_PAYMENTS]: 'Социальные выплаты',
	[IncomeCategory.GIFTS]: 'Подарки',
	[IncomeCategory.BONUSES]: 'Премии',
	[IncomeCategory.REWARDS]: 'Бонусы',
	[IncomeCategory.PART_TIME_WORK]: 'Подработка',
	[IncomeCategory.ASSET_SALE]: 'Продажа имущества',
	[IncomeCategory.DEBT_RETURN]: 'Возврат долга',
	[IncomeCategory.GRANTS]: 'Гранты',
	[IncomeCategory.CASHBACK]: 'Кэшбэк',
	[IncomeCategory.ALIMONY]: 'Алименты',
	[IncomeCategory.INHERITANCE]: 'Наследство',
	[IncomeCategory.LOTTERY]: 'Лотерея',
	[IncomeCategory.CROWDFUNDING]: 'Краудфандинг',
	[IncomeCategory.AFFILIATE_PROGRAMS]: 'Партнерские программы',
	[IncomeCategory.ROYALTIES]: 'Авторские отчисления'
}

export default IncomeCategoryNames
