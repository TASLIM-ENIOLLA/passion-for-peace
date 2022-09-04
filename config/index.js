const dev = process.env.NODE_ENV !== 'production'

export const cookie_name = 'PFPGrant'

export const server = {
	frontend: {
		url: (
			(dev)
			? 'http://localhost:3010/'
			: 'https://passion-for-peace.vercel.app/'
		)
	},
	backend: {
		url: (
			(dev)
			// ? 'http://192.168.137.1:80/passion-for-peace/'
			? 'http://localhost:80/passion-for-peace/'
			: 'https://pfp1904.000webhostapp.com/'
		)
	}
}

export const api_routes = {
	countries: `${server.frontend.url}api/countries`,
	success_stories: `${server.frontend.url}api/success-stories`,
	business_sectors: `${server.frontend.url}api/business-sector`,
	create_account: `${server.backend.url}php/processes/CreateAccount.php`,
	sign_in: `${server.backend.url}php/processes/SignIn.php`,
	newsletter: `${server.backend.url}php/processes/Newsletter.php`,
	dashboard: {
		get_user_data: `${server.backend.url}php/processes/dashboard/GetUserData.php`,
		complete_application: {
			update_userdata: `${server.backend.url}php/processes/dashboard/complete-application/UpdateUserData.php`,
		}
	}
}
