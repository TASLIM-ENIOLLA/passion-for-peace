export const URL = {
	website: [
		{name: 'about', ref: 'about'},
		{name: 'how it works', ref: 'how-it-works'},
		{name: 'success stories', ref: 'success-stories'},
		{name: 'partners', ref: 'partners'},
		{name: 'donations', ref: 'donations'},
	],
	dashboard: [
		{name: 'dashboard', href: `/dashboard`, iconName: 'speedometer2'},
		{name: 'profile', href: `/dashboard/profile`, iconName: 'person-circle'},
		{name: 'status', href: `/dashboard/status`, iconName: 'question-circle-fill'},
		{name: 'logout', href: `/dashboard/logout`, iconName: 'door-open-fill text-danger'},
	],
	admin: [
		{name: 'dashboard', href: `/admin`, iconName: 'speedometer2'},
		{name: 'logout', href: `/dashboard/logout`, iconName: 'door-open-fill text-danger'},
	]
}
