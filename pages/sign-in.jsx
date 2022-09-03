import {useState, useEffect} from 'react'

import {notify} from '/components/popups'
import {api_routes, cookie_name} from '/config'
import {Button} from '/components/form'
import {parseObjectToFormData, cookieStore, encryptString} from '/functions'

export default () => {
    const [canProceed, setCanProceed] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    useEffect(() => setCanProceed(![
        formData.email,
        formData.password,
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
                    <div className = 'py-5 col-md-6 col-lg-5'>
                        <div>
                            <h1 className = 'mb-4 text-dark bold'>Sign in</h1>
                            <h5 className = 'text-dark'>Don't have an account? <a className = 'theme-color h5 underline' href = './apply-now'>Register</a></h5>
                        </div>
                        <div className = 'py-5'>
                            <form onSubmit = {(e) => e.preventDefault() || SignIn(formData).then(({type, data, user_data}) => notify({
                                type: type === 'success' ? type : 'danger',
                                message: data,
                                onSucceed: () => cookieStore.setCookie({
                                    name: cookie_name,
                                    value: encryptString(JSON.stringify(user_data)),
                                    expires: (new Date().getTime() + (3600 * 1000 * 24 * 30)),
                                    path: '/'
                                }).then(() => {
                                    setFormData({email: '', password: ''})
                                    window.location = '/dashboard'
                                })
                            }))} className = 'row'>
                                <div className = 'col-12 mb-5'>
                                    <label className = 'row rounded-1x bg-light a-i-c pt-3 m-0'>
                                        <div className = 'col'>
                                            <span className = 'bold theme-color'>Email address</span>
                                            <input value = {formData.email} onChange = {(e) => setFormData({...formData, email: e.target.value})} type = 'email' name = 'email' className = 'd-block w-100 py-2 bg-clear bold border-top-0 border-left-0 border-right-0 border-bottom-0 outline-0 text-muted mb-2' />
                                        </div>
                                        <div className = 'col-auto'>
                                            <span className = 'bi bi-mailbox2 fa-2x theme-color'></span>
                                        </div>
                                    </label>
                                </div>
                                <div className = 'col-12 mb-5'>
                                    <div className = 'row rounded-1x bg-light a-i-c pt-3 m-0'>
                                        <div className = 'col'>
                                            <span className = 'bold theme-color'>Password</span>
                                            <input value = {formData.password} onChange = {(e) => setFormData({...formData, password: e.target.value})} type = 'password' name = 'email' className = 'd-block w-100 py-2 bg-clear bold border-top-0 border-left-0 border-right-0 border-bottom-0 outline-0 text-muted mb-2' />
                                        </div>
                                        <div className = 'col-auto'>
                                            <span className = 'bi bi-lock-fill fa-2x theme-color'></span>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'col-12 mb-5'>
                                    <Button style = {{minWidth: '130px'}} className = {`${canProceed ? '' : 'disabled'} transit py-4 rounded-3x theme-bg btn bold text-capitalize px-5 text-white flicker shadow`}>sign in</Button>
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
                    background: linear-gradient(55deg, #ffffffff 50%, #ffffff77, #ffffff00), url(./images/main-bg.jpg);
                    background-attachment: fixed;
                }
                main{
                    min-height: calc(100vh - 102.56px);
                }
            `}</style>
        </section>
    )
}

const SignIn = (formData) => fetch(
    api_routes.sign_in, {
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
