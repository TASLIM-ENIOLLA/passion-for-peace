import {useState, useEffect} from 'react'

import Template from '/components/dashboard/Template'

import {api_routes, server, cookie_name} from '/config'
import {decryptString, parseObjectToFormData, getFlagEmoji} from '/functions'

export default ({user_data}) => {
    const [userData, setUserData] = useState()
    const [countryName, setCountryName] = useState()
    const [businessSectorName, setBusinessSectorName] = useState()

	useEffect(() => {
        fetch(api_routes.dashboard.get_user_data, {
            method: 'POST',
            body: parseObjectToFormData(user_data)
        })
        .then(res => res.json())
        .then(({data}) => setUserData(data))
    }, [])

    useEffect(() => {
        if(userData){
            fetch(`${api_routes.countries}/${userData.country_code}`)
            .then(res => res.json())
            .then(({data: {name}}) => setCountryName(name))

            fetch(`${api_routes.business_sectors}/${userData.business_sector}`)
            .then(res => res.json())
            .then(({data: {name}}) => setBusinessSectorName(name))
        }
    }, [userData])

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
		<Template>
			<div className = 'container-fluid'>
                <div className = 'row bg-white rounded-1x py-5 px-3 shadow-sm'>
                    <div className = 'col-12'>
                        <div className = 'text-capitalize bold letter-spacing-1 mb-2'>user profile</div>
                        <p className = 'text-muted'>User data cannot be modified</p>
                    </div>
                    <div className = 'col-lg-8'>
                        <div className = 'row py-4'>
                            <div className = 'col-12 col-md-6' style = {{marginBottom: '30px'}}>
                                <div className = 'bold text-capitalize mb-2'>first name</div>
                                <div className = 'd-block w-100 p-3 bold border border-dark border-thick rounded-lg text-capitalize'>
                                    {userData.f_name}
                                </div>
                            </div>
                            <div className = 'col-12 col-md-6' style = {{marginBottom: '30px'}}>
                                <div className = 'bold text-capitalize mb-2'>Last name</div>
                                <div className = 'd-block w-100 p-3 bold border border-dark border-thick rounded-lg text-capitalize'>
                                    {userData.l_name}
                                </div>
                            </div>
                            <div className = 'col-12 col-md-6' style = {{marginBottom: '30px'}}>
                                <div className = 'bold text-capitalize mb-2'>email</div>
                                <div className = 'd-block w-100 p-3 border bold border-dark border-thick rounded-lg'>
                                    {userData.email}
                                </div>
                            </div>
                            <div className = 'col-12 col-md-6' style = {{marginBottom: '30px'}}>
                                <div className = 'bold text-capitalize mb-2'>phone</div>
                                <div className = 'bg-clear border border-dark p-3 rounded-lg bold flex-1 w-100'>
                                    {userData.phone}
                                </div>
                            </div>
                            <div className = 'col-12' style = {{marginBottom: '30px'}}>
                                <div className = 'bold text-capitalize mb-2'>country</div>
                                <div className = 'd-block w-100 p-3 border text-capitalize bold border-dark border-thick rounded-lg bold'>
                                    {countryName || '- N/A -'}
                                </div>
                            </div>
                            <div className = 'col-12' style = {{marginBottom: '30px'}}>
                                <div className = 'bold text-capitalize mb-2'>town or city</div>
                                <div className = 'd-block w-100 p-3 border text-capitalize bold border-dark border-thick rounded-lg'>
                                    {userData.town_or_city}
                                </div>
                            </div>
                            <div className = 'col-12' style = {{marginBottom: '30px'}}>
                                <div className = 'bold text-capitalize mb-2'>state or region</div>
                                <div className = 'd-block w-100 p-3 border text-capitalize bold border-dark border-thick rounded-lg'>
                                    {userData.state_or_region}
                                </div>
                            </div>
                            <div className = 'col-12 col-md-6' style = {{marginBottom: '30px'}}>
                                <div className = 'bold text-capitalize mb-2'>Business sector</div>
                                <div className = 'd-block w-100 p-3 border text-capitalize bold border-dark border-thick rounded-lg'>
                                    {businessSectorName || '- N/A -'}
                                </div>
                            </div>
                            <div className = 'col-12 col-md-6' style = {{marginBottom: '30px'}}>
                                <div className = 'bold text-capitalize mb-2'>NIN</div>
                                <div className = 'd-block w-100 p-3 border bold border-dark border-thick rounded-lg'>
                                    {userData.nin}
                                </div>
                            </div>
                            <div className = 'col-12' style = {{marginBottom: '30px'}}>
                                <div className = 'bold text-capitalize mb-2'>address</div>
                                <div className = 'd-block text-capitalize w-100 p-3 border bold border-dark border-thick rounded-lg'>
                                    {userData.address}
                                </div>
                            </div>
                            <div className = 'col-12' style = {{marginBottom: '30px'}}>
                                <div className = 'bold text-capitalize mb-2'>date of birth</div>
                                <div className = 'd-block w-100 p-3 border border-dark border-thick bold rounded-lg'>
                                    {new Date(userData.dob).toLocaleDateString()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                .border-thick{
                    box-shadow: 0px 0px 2px grey;
                }
            `}</style>
		</Template>
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
