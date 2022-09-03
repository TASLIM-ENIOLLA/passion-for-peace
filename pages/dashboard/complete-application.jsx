import {useState, useEffect} from 'react'

import Template from '/components/dashboard/Template'
import {api_routes, server, cookie_name} from '/config'
import {notify} from '/components/popups'
import {Button} from '/components/form'
import {decryptString, parseObjectToFormData} from '/functions'

async function getCountryNameFromCountryCode(country_code){
    const req = await fetch(`${api_routes.countries}/${country_code}`)
    return await req.json()
}

export default ({user_data}) => {
    const [userData, setUserData] = useState()
    const [countriesData, setCountriesData] = useState([])
    const [businessSectorsData, setBusinessSectorsData] = useState([])

    useEffect(async () => {
        fetch(api_routes.dashboard.get_user_data, {
            method: 'POST',
            body: parseObjectToFormData(user_data)
        })
        .then(res => res.json())
        .then(({data}) => setUserData({...data}))

        fetch(api_routes.countries)
        .then(res => res.json())
        .then(({data}) => setCountriesData([...data]))

        fetch(api_routes.business_sectors)
        .then(res => res.json())
        .then(({data}) => setBusinessSectorsData([...data]))
    }, [])

    useEffect(() => {
        if(userData && userData.country_code !== ''){
            fetch(`${api_routes.countries}/${userData.country_code}`)
            .then(res => res.json())
            .then(({data: {dial_code, name}}) => setUserData({...userData, country_name: name, country_dial_code: dial_code}))
        }
        else{
            setUserData({...userData, country_name: '', country_dial_code: ''})
        }
    }, [userData?.country_code])

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
            (Number(userData.status) > 0)
            ? (
                <div className = 'container-fluid'>
                    <div className = 'row'>
                        <div style = {{background: '#09cf8333'}} className = 'py-5 mb-5 fo-s-15 px-3 col-12 rounded-1x shadow-sm'>
                            <div className = 'col-12 mb-2'>
                                <div className = 'text-capitalize bold letter-spacing-1 mb-2'>application completed</div>
                                <p className = 'mb-4 text-muted'>You have successfully completed application. You now have a chance at securing the grant.</p>
                            </div>
                            <div className = 'col-auto'>
                                <a href = '/dashboard' className = 'py-3 rounded-lg text-white bold px-5 btn-success btn border-0 text-capitalize'>to dashboard</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
            : (
                (Number(userData.status) === 0)
                ? (
                    <div className = 'container-fluid'>
                        <div className = 'row bg-white rounded-1x py-4 shadow-sm'>
                            <div className = 'col-12'>
                                <div className = 'text-capitalize bold letter-spacing-1 mb-2'>Complete application</div>
                                <p className = 'text-muted'>You have to complete application to have a chance at securing the grant.</p>
                            </div>
                            <div className = 'col-lg-8'>
                                <div className = 'row py-4'>
                                    <input defaultValue = {userData.id} type="text" hidden = {true} name = 'user_id' />
                                    <div className = 'col-6' style = {{marginBottom: '30px'}}>
                                        <div className = 'bold text-capitalize mb-2'>first name</div>
                                        <input type = 'text' defaultValue = {userData.f_name} disabled = {true} className = 'd-block w-100 p-3 bg-light disabled border border-dark rounded-lg text-capitalize' />
                                    </div>
                                    <div className = 'col-6' style = {{marginBottom: '30px'}}>
                                        <div className = 'bold text-capitalize mb-2'>Last name</div>
                                        <input type = 'text' defaultValue = {userData.l_name} className = 'd-block w-100 p-3 bg-light disabled border border-dark rounded-lg text-capitalize' disabled = {true} />
                                    </div>
                                    <div className = 'col-6' style = {{marginBottom: '30px'}}>
                                        <div className = 'bold text-capitalize mb-2'>email</div>
                                        <input type = 'text' defaultValue = {userData.email} className = 'd-block w-100 p-3 border bg-light disabled border-dark rounded-lg' disabled = {true} />
                                    </div>
                                    <div className = 'col-6' style = {{marginBottom: '30px'}}>
                                        <div className = 'bold text-capitalize mb-2'>phone</div>
                                        <div className = 'flex-h a-i-c w-100 p-3 border border-dark rounded-lg text-capitalize bg-light disabled'>{
                                            userData.country_dial_code !== ''
                                            ? <span className = 'pr-3 bold'>{userData.country_dial_code}</span>
                                            : <></>
                                        }
                                            <input type = 'text' defaultValue = {userData.phone} className = 'bg-clear border-0 flex-1 w-100'/>
                                        </div>
                                    </div>
                                    <div className = 'col-6' style = {{marginBottom: '30px'}}>
                                        <div className = 'bold text-capitalize mb-2'>Country</div>
                                        <input type = 'text' defaultValue = {userData.country_name} className = 'd-block w-100 p-3 bg-light disabled border border-dark rounded-lg text-capitalize' disabled = {true} />
                                    </div>
                                    <div className = 'col-6' style = {{marginBottom: '30px'}}>
                                        <div className = 'bold text-capitalize mb-2'>business sector</div>
                                        <select onChange = {(e) => setUserData({
                                            ...userData,
                                            business_sector: e.target.value
                                        })} className = 'd-block w-100 p-3 border border-dark rounded-lg text-capitalize bg-clear'>
                                            <option value = ''>--- select business sector ---</option>{
                                                businessSectorsData.map(({id, name}) => (
                                                    <option key = {id} value = {id}>{name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className = 'col-6 mt-3'>
                                        <Button className = {`py-4 px-5 btn btn-success letter-spacing-1 rounded-lg text-capitalize bold ${![userData.business_sector, userData.country_code].includes('') ? '' : 'disabled'}`} onClick = {() => UpdateUserData(userData).then(({data, type}) => notify({
                                            type: type === 'success' ? type : 'danger',
                                            message: data,
                                            onSucceed: () => window.location = `http://localhost:3000/create-business-plan?ref_id=${userData.id}`
                                        }))}>create business plan</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                : (
                    <div className="p-5 text-center bold">
                        <p><span className="fa fa-spin bi-arrow-clockwise fa-3x"></span></p>
                        <p>Loading...</p>
                    </div>
                )
            )
        }</Template>
    )
}

const UpdateUserData = (userData) => fetch(api_routes.dashboard.complete_application.update_userdata, {
    method: 'POST',
    body: parseObjectToFormData(userData)
})
.then(res => res.json())

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
