import {useState, useEffect} from 'react'

import Template from '/components/dashboard/Template'
import {api_routes, server, cookie_name} from '/config'
import {decryptString, parseObjectToFormData, getFlagEmoji} from '/functions'

export default ({user_data}) => {
    const [userData, setUserData] = useState()

    useEffect(() => {
        fetch(api_routes.dashboard.get_user_data, {
			method: 'POST',
			body: parseObjectToFormData(user_data)
		})
		.then(res => res.json())
		.then(({data}) => setUserData(data))
	}, [])
	
	if(!userData){
        return (
            <Template>
                <div className="p-5 text-center bold">
                    <p><span className="fa fa-spin bi-arrow-clockwise fa-3x"></span></p>
                    <p>Loading...</p>
                </div>
            </Template>
        )
    }

	return (
        <Template>{
        	(Number(userData.status) < 1)
			? (
				<div className = 'container-fluid'>
					<div className = 'row'>
						<div style = {{background: '#f3521633'}} className = 'py-5 fo-s-15 px-3 col-12 rounded-1x shadow-sm'>
							<div className = 'col-12 mb-2'>
								<div className = 'text-capitalize bold letter-spacing-1 mb-2'>Registration incomplete</div>
								<p className = 'text-muted m-0'>You have to complete application to have a chance at securing the grant. Click <a href = './complete-application' className = 'bold underline'>here</a> to complete registration</p>
							</div>
						</div>
					</div>
				</div>
			)
			: (
				<div className = 'container-fluid'>
					<div className = 'row'>
						<div style = {{background: '#f3d21633'}} className = 'py-5 fo-s-15 px-3 col-12 rounded-1x shadow-sm'>
							<div className = 'col-12 mb-2'>
								<div className = 'text-capitalize bold letter-spacing-1 mb-2'>application submited</div>
								<p className = 'text-muted m-0'>Your application has been submitted. You will be notified via this portal if you have been shortlisted fot the grant. Goodluck!</p>
							</div>
						</div>
					</div>
				</div>
			)
        }</Template>
    )
}

export const getServerSideProps = (context) => {
    const {req: {cookies}} = context

    if(!cookies[cookie_name]){
        return {
            redirect: {
                destination: '/sign-in'
            }
        }
    }

    return {
        props: {
        	user_data: JSON.parse(decryptString(cookies[cookie_name]))
        }
    }
}