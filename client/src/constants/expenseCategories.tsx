enum ExpenseCategory {
	FOOD = 1, // Еда (1)
	TRANSPORT, // Транспорт (2)
	HOUSING, // Жилье (3)
	UTILITIES, // Коммунальные услуги (4)
	HEALTH, // Здоровье (5)
	EDUCATION, // Образование (6)
	ENTERTAINMENT, // Развлечения (7)
	CLOTHING, // Одежда (8)
	DEBTS, // Долги (9)
	TAXES, // Налоги (10)
	INSURANCE, // Страхование (11)
	CHILDREN, // Дети (12)
	PETS, // Домашние животные (13)
	GIFTS, // Подарки (14)
	CHARITY, // Благотворительность (15)
	TRAVEL, // Путешествия (16)
	ELECTRONICS, // Электроника (17)
	SUBSCRIPTIONS, // Подписки (18)
	PERSONAL_CARE, // Личная гигиена (19)
	SPORTS, // Спорт (20)
	HOBBIES, // Хобби (21)
	CAR_MAINTENANCE, // Обслуживание авто (22)
	HOME_REPAIR, // Ремонт дома (23)
	ALCOHOL, // Алкоголь (24)
	SMOKING, // Курение (25)
	FINES, // Штрафы (26)
	GAMBLING, // Азартные игры (27)
	OTHER // Другое (28)
}

const ExpenseCategoryNames: Record<ExpenseCategory, string> = {
	[ExpenseCategory.FOOD]: 'Еда',
	[ExpenseCategory.TRANSPORT]: 'Транспорт',
	[ExpenseCategory.HOUSING]: 'Жилье',
	[ExpenseCategory.UTILITIES]: 'Коммунальные услуги',
	[ExpenseCategory.HEALTH]: 'Здоровье',
	[ExpenseCategory.EDUCATION]: 'Образование',
	[ExpenseCategory.ENTERTAINMENT]: 'Развлечения',
	[ExpenseCategory.CLOTHING]: 'Одежда',
	[ExpenseCategory.DEBTS]: 'Долги',
	[ExpenseCategory.TAXES]: 'Налоги',
	[ExpenseCategory.INSURANCE]: 'Страхование',
	[ExpenseCategory.CHILDREN]: 'Дети',
	[ExpenseCategory.PETS]: 'Домашние животные',
	[ExpenseCategory.GIFTS]: 'Подарки',
	[ExpenseCategory.CHARITY]: 'Благотворительность',
	[ExpenseCategory.TRAVEL]: 'Путешествия',
	[ExpenseCategory.ELECTRONICS]: 'Электроника',
	[ExpenseCategory.SUBSCRIPTIONS]: 'Подписки',
	[ExpenseCategory.PERSONAL_CARE]: 'Личная гигиена',
	[ExpenseCategory.SPORTS]: 'Спорт',
	[ExpenseCategory.HOBBIES]: 'Хобби',
	[ExpenseCategory.CAR_MAINTENANCE]: 'Обслуживание авто',
	[ExpenseCategory.HOME_REPAIR]: 'Ремонт дома',
	[ExpenseCategory.ALCOHOL]: 'Алкоголь',
	[ExpenseCategory.SMOKING]: 'Курение',
	[ExpenseCategory.FINES]: 'Штрафы',
	[ExpenseCategory.GAMBLING]: 'Азартные игры',
	[ExpenseCategory.OTHER]: 'Другое'
}

export default ExpenseCategoryNames
