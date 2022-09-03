import {useState, useEffect} from 'react'

import {notify} from '/components/popups'
import {api_routes, cookie_name} from '/config'
import {Button} from '/components/form'
import {parseObjectToFormData, cookieStore, encryptString} from '/functions'

export default () => {
    const [canProceed, setCanProceed] = useState(false)
    const [countryList, setCountryList] = useState([])
    const [formData, setFormData] = useState({
        f_name: '',
        l_name: '',
        email: '',
        gender: '',
        phone: '',
        nin: '',
        country: '',
        address: '',
        dob: '',
        town_or_city: '',
        state_or_region: '',
        password: '',
        c_password: '',
    })

    useEffect(() => {
        fetch(api_routes.countries)
        .then(res => res.json())
        .then(({data}) => setCountryList(data))
    },  [])

    useEffect(() => setCanProceed(![
        formData.f_name,
        formData.l_name,
        formData.email,
        formData.gender,
        formData.phone,
        formData.nin,
        formData.country,
        formData.address,
        formData.dob,
        formData.town_or_city,
        formData.state_or_region,
        formData.password,
        formData.c_password,
    ].includes('')), [formData])

    return (
        <section className = 'underlay-bg min-vh100 vw100'>
            <div className = 'container'>
                <header className = 'py-5'>
                    <div className = 'row'>
                        <div className = 'col-auto'>
                            <a href = './' className = 'd-inline-block'>
                                <img src = './images/logo-2.svg' />
                            </a>
                        </div>
                    </div>
                </header>
                <main className = 'a-i-c row'>
                    <div className = 'py-5 col-md-9 col-lg-8'>
                        <div>
                            <h1 className = 'mb-4 text-dark bold'>Apply Now</h1>
                            <h5 className = 'text-dark'>Don't have an account? <a className = 'theme-color h5 underline' href = './sign-in'>Sign In</a></h5>
                        </div>
                        <div className = 'py-5'>
                            <form onSubmit = {(e) => e.preventDefault() ||  CreateAccount(formData).then(({type, data, user_data}) => notify({
                                type: type === 'success' ? type : 'danger',
                                message: data,
                                onSucceed: () => cookieStore.setCookie({
                                    name: cookie_name,
                                    value: encryptString(JSON.stringify(user_data)),
                                    expires: (new Date().getTime() + (3600 * 1000 * 24 * 30)),
                                    path: '/'
                                }).then(() => {
                                    setFormData({
                                        f_name: '', country: '', l_name: '', email: '', phone: '', nin: '', address: '', dob: '', town_or_city: '', state_or_region: '', password: '', c_password: ''
                                    })
                                    window.location = '/dashboard'
                                })
                            }))} className = 'row'>
                                <div className = 'col-lg-6 mb-5'>
                                    <label className = 'row rounded-1x bg-light a-i-c pt-3 m-0'>
                                        <div className = 'col'>
                                            <span className = 'bold theme-color'>First name</span>
                                            <input value = {formData.f_name} onChange = {(e) => setFormData({...formData, f_name: e.target.value})} type = 'text' name = 'name' className = 'text-capitalize d-block w-100 py-2 bg-clear bold border-top-0 border-left-0 border-right-0 border-bottom-0 outline-0 text-muted mb-2' />
                                        </div>
                                        <div className = 'col-auto'>
                                            <span className = 'bi bi-person-fill fa-2x theme-color'></span>
                                        </div>
                                    </label>
                                </div>
                                <div className = 'col-lg-6 mb-5'>
                                    <label className = 'row rounded-1x bg-light a-i-c pt-3 m-0'>
                                        <div className = 'col'>
                                            <span className = 'bold theme-color'>Last name</span>
                                            <input value = {formData.l_name} onChange = {(e) => setFormData({...formData, l_name: e.target.value})} type = 'text' name = 'name' className = 'text-capitalize d-block w-100 py-2 bg-clear bold border-top-0 border-left-0 border-right-0 border-bottom-0 outline-0 text-muted mb-2' />
                                        </div>
                                        <div className = 'col-auto'>
                                            <span className = 'bi bi-person-fill fa-2x theme-color'></span>
                                        </div>
                                    </label>
                                </div>
                                <div className = 'col-12 mb-5'>
                                    <label className = 'row rounded-1x bg-light a-i-c pt-3 m-0'>
                                        <div className = 'col'>
                                            <span className = 'bold theme-color'>Email address</span>
                                            <input value = {formData.email} onChange = {(e) => setFormData({...formData, email: e.target.value})} type = 'email' name = 'email' className = 'd-block w-100 py-2 bg-clear bold border-top-0 border-left-0 border-right-0 border-bottom-0 outline-0 text-muted mb-2' />
                                        </div>
                                        <div className = 'col-auto'>
                                            <span className = 'bi bi-at fa-2x theme-color'></span>
                                        </div>
                                    </label>
                                </div>
                                <div className = 'col-lg-4 mb-5'>
                                    <label className = 'row rounded-1x bg-light a-i-c pt-3 m-0'>
                                        <div className = 'col'>
                                            <span className = 'bold theme-color'>Gender</span>
                                            <select value = {formData.gender} onChange = {(e) => setFormData({...formData, gender: e.target.value})} className = 'text-capitalize d-block w-100 py-2 bg-clear bold border-top-0 border-left-0 border-right-0 border-bottom-0 outline-0 text-muted mb-2'>
                                                <option value = ''>--- select gender ---</option>
                                                <option value = 'male'>male</option>
                                                <option value = 'female'>female</option>
                                            </select>
                                        </div>
                                        <div className = 'col-auto'>
                                            <span className = 'bi bi-gender-ambiguous fa-2x theme-color'></span>
                                        </div>
                                    </label>
                                </div>
                                <div className = 'col-lg-8 mb-5'>
                                    <label className = 'row rounded-1x bg-light a-i-c pt-3 m-0'>
                                        <div className = 'col'>
                                            <span className = 'bold theme-color'>Phone number</span>
                                            <input value = {formData.phone} onChange = {(e) => setFormData({...formData, phone: e.target.value})} type = 'phone' name = 'phone' className = 'd-block w-100 py-2 bg-clear bold border-top-0 border-left-0 border-right-0 border-bottom-0 outline-0 text-muted mb-2' />
                                        </div>
                                        <div className = 'col-auto'>
                                            <span className = 'bi bi-telephone-fill fa-2x theme-color'></span>
                                        </div>
                                    </label>
                                </div>
                                <div className = 'col-12 mb-5'>
                                    <div className = 'row rounded-1x bg-light a-i-c pt-3 m-0'>
                                        <div className = 'col'>
                                            <span className = 'bold theme-color'>NIN</span>
                                            <input value = {formData.nin} onChange = {(e) => setFormData({...formData, nin: e.target.value})} type = 'number' className = 'd-block w-100 py-2 bg-clear bold border-top-0 border-left-0 border-right-0 border-bottom-0 outline-0 text-muted mb-2' />
                                        </div>
                                        <div className = 'col-auto'>
                                            <span className = 'bi bi-123 fa-2x theme-color'></span>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'col-lg-4 mb-5'>
                                    <label className = 'row rounded-1x bg-light a-i-c pt-3 m-0'>
                                        <div className = 'col'>
                                            <span className = 'bold theme-color'>Date of birth</span>
                                            <input max = {`${new Date().getFullYear() - 18}-01-01`} value = {formData.dob} onChange = {(e) => setFormData({...formData, dob: e.target.value})} name = 'date' type = 'date' className = 'd-block w-100 py-2 bg-clear bold border-top-0 border-left-0 border-right-0 border-bottom-0 outline-0 text-muted mb-2' />
                                        </div>
                                        <div className = 'col-auto'>
                                            <span className = 'bi bi-calendar2-date-fill fa-2x theme-color'></span>
                                        </div>
                                    </label>
                                </div>
                                <div className = 'col-lg-8 mb-5'>
                                    <label className = 'row rounded-1x bg-light a-i-c pt-3 m-0'>
                                        <div className = 'col'>
                                            <span className = 'bold theme-color'>Country</span>
                                            <select value = {formData.country} onChange = {(e) => setFormData({...formData, country: e.target.value})} name = 'address' type = 'text' className = 'text-capitalize d-block w-100 py-2 bg-clear bold border-top-0 border-left-0 border-right-0 border-bottom-0 outline-0 text-muted mb-2'>
                                                <option value = ''>--- Select country ---</option>{
                                                countryList.map(({code, name}) => (
                                                        <option key = {code} value = {code}>{name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        <div className = 'col-auto'>
                                            <span className = 'bi bi-geo-alt-fill fa-2x theme-color'></span>
                                        </div>
                                    </label>
                                </div>
                                <div className = 'col-12 mb-5'>
                                    <div className = 'row rounded-1x bg-light a-i-c pt-3 m-0'>
                                        <div className = 'col'>
                                            <span className = 'bold theme-color'>Physical address</span>
                                            <input value = {formData.address} onChange = {(e) => setFormData({...formData, address: e.target.value})} name = 'address' type = 'text' className = 'text-capitalize d-block w-100 py-2 bg-clear bold border-top-0 border-left-0 border-right-0 border-bottom-0 outline-0 text-muted mb-2' />
                                        </div>
                                        <div className = 'col-auto'>
                                            <span className = 'bi bi-geo-alt-fill fa-2x theme-color'></span>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'col-lg-4 mb-5'>
                                    <label className = 'row rounded-1x bg-light a-i-c pt-3 m-0'>
                                        <div className = 'col'>
                                            <span className = 'bold theme-color'>Town or city</span>
                                            <input value = {formData.town_or_city} type = 'text' onChange = {(e) => setFormData({...formData, town_or_city: e.target.value})} className = 'text-capitalize d-block w-100 py-2 bg-clear bold border-top-0 border-left-0 border-right-0 border-bottom-0 outline-0 text-muted mb-2' />
                                        </div>
                                        <div className = 'col-auto'>
                                            <span className = 'bi bi-geo-alt-fill fa-2x theme-color'></span>
                                        </div>
                                    </label>
                                </div>
                                <div className = 'col-lg-8 mb-5'>
                                    <label className = 'row rounded-1x bg-light a-i-c pt-3 m-0'>
                                        <div className = 'col'>
                                            <span className = 'bold theme-color'>State or region</span>
                                            <input type = 'text' value = {formData.state_or_region} onChange = {(e) => setFormData({...formData, state_or_region: e.target.value})} name = 'address' type = 'address' className = 'text-capitalize d-block w-100 py-2 bg-clear bold border-top-0 border-left-0 border-right-0 border-bottom-0 outline-0 text-muted mb-2' />
                                        </div>
                                        <div className = 'col-auto'>
                                            <span className = 'bi bi-geo-alt-fill fa-2x theme-color'></span>
                                        </div>
                                    </label>
                                </div>
                                <div className = 'col-lg-6 mb-5'>
                                    <div className = 'row rounded-1x bg-light a-i-c pt-3 m-0'>
                                        <div className = 'col'>
                                            <span className = 'bold theme-color'>Password</span>
                                            <input value = {formData.password} onChange = {(e) => setFormData({...formData, password: e.target.value})} name = 'address' type = 'password' className = 'd-block w-100 py-2 bg-clear bold border-top-0 border-left-0 border-right-0 border-bottom-0 outline-0 text-muted mb-2' />
                                        </div>
                                        <div className = 'col-auto'>
                                            <span className = 'bi bi-key-fill fa-2x theme-color'></span>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'col-lg-6 mb-5'>
                                    <div className = 'row rounded-1x bg-light a-i-c pt-3 m-0'>
                                        <div className = 'col'>
                                            <span className = 'bold theme-color'>Confirm password</span>
                                            <input value = {formData.c_password} onChange = {(e) => setFormData({...formData, c_password: e.target.value})} type = 'password' className = 'd-block w-100 py-2 bg-clear bold border-top-0 border-left-0 border-right-0 border-bottom-0 outline-0 text-muted mb-2' />
                                        </div>
                                        <div className = 'col-auto'>
                                            <span className = 'bi bi-key-fill fa-2x theme-color'></span>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'col-12 mb-5'>
                                    <Button style = {{minWidth: '130px'}} className = {`${canProceed ? '' : 'disabled'} transit py-4 rounded-3x theme-bg btn bold text-capitalize px-5 text-white flicker shadow`}>apply</Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
            <style>{`
                .rounded-3x{
                    border-radius: 3rem;
                }
                .underlay-bg{
                    background: linear-gradient(55deg, #ffffffff 70%, #ffffffbb), url(./images/main-bg.jpg);
                    background-attachment: fixed;
                }
                main{
                    min-height: calc(100vh - 102.56px);
                }
            `}</style>
        </section>
    )
}

const CreateAccount = (formData) => fetch(
    api_routes.create_account, {
        method: 'POST',
        body: parseObjectToFormData(formData)
    }
).then(res => res.json())

export const getServerSideProps = (context) => {
    const {req: {cookies}} = context

    if(cookies[cookie_name]){
        return {
            redirect: {
                destination: '/dashboard'
            }
        }
    }

    return {
        props: {}
    }
}
