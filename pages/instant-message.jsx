import {useState, useEffect} from 'react'

import {api_routes} from '/config'
import {notify} from '/components/popups'
import {parseObjectToFormData} from '/functions'
import Header from '/components/pages/Header'
import Footer from '/components/pages/Footer'

export default function InstantMessaging(){
    return (
        <main className = 'vh100 vw100 flex-v'>
            <Header />
            <section className = 'flex-1 overflow-y-auto w-100'>
                <section className = 'landing-bg'>

                </section>
                <section className = 'py-5'>
                    <div className = 'container py-5'>
                        <div className = 'row'>
                            <div className = 'col-lg-7 mx-auto'>
                                <div className = 'pb-5'>
                                    <h1 className = 'text-center theme-color mb-4'>Leave a message</h1>
                                    <h5 className = 'text-center text-muted'>Reach out to us and expect to get a reply soon!</h5>
                                </div>
                                <MessageForm />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </section>
            <style>{`
                .landing-bg{
                    background-size: cover;
                    background-position: center;
                    background-attachment: fixed;
                    background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/images/s-1.jpg);
                    min-height: 300px;
                }
            `}</style>
            <script src = '/js/pages/about.js'></script>
        </main>
    )
}

function MessageForm(){
    const [formData, setFormData] = useState({
        name: '', email: '', phone: '', subject: '', message: ''
    })

    function SendMessage(e){
        e.preventDefault()

        if(Object.values(formData).includes('')){
            notify({
                type: 'danger',
                message: 'One or more fields are empty!'
            })
        }
        else{
            fetch(api_routes.message, {method: 'POST', body: parseObjectToFormData(formData)})
            .then(res => res.json())
            .then(({data, type}) => console.log({type, data}) || notify({
                type: type === 'success' ? type : 'danger',
                message: data,
                onReady: () => type === 'success' && setFormData({
                    name: '', email: '', phone: '', subject: '', message: ''
                })
            }))
        }
    }

    return (
        <form onSubmit = {SendMessage} className = 'row pt-4'>
            <div className = 'col-12 mb-4'>
                <input type = 'text' value = {formData.name} onChange = {(e) => setFormData({...formData, name: e.target.value})} size = '50' placeholder = 'Full name' className = 'd-block p-3 w-100 border rounded' />
            </div>
            <div className = 'col-md-6 mb-4'>
                <input type = 'email' value = {formData.email} onChange = {(e) => setFormData({...formData, email: e.target.value})} size = '255' placeholder = 'Email address' className = 'd-block p-3 w-100 border rounded' />
            </div>
            <div className = 'col-md-6 mb-4'>
                <input type = 'phone' value = {formData.phone} onChange = {(e) => setFormData({...formData, phone: e.target.value})} size = '20' placeholder = 'Phone number' className = 'd-block p-3 w-100 border rounded' />
            </div>
            <div className = 'col-12 mb-4'>
                <input type = 'text' value = {formData.subject} onChange = {(e) => setFormData({...formData, subject: e.target.value})} size = '50' placeholder = 'Subject' className = 'd-block p-3 w-100 border rounded' />
            </div>
            <div className = 'col-12 mb-4'>
                <textarea rows = '6' value = {formData.message} onChange = {(e) => setFormData({...formData, message: e.target.value})} size = '255' placeholder = 'Message' className = 'd-block p-3 w-100 border rounded resize-0'></textarea>
            </div>
            <div className = 'col-12 mt-4'>
                <button type = 'submit' className = 'py-3 px-4 rounded-2x btn bg-orange text-uppercase bold text-white'>send message</button>
            </div>
        </form>
    )
}
