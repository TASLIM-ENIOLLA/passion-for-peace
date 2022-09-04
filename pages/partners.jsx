import Header from '../components/pages/Header'
import Footer from '../components/pages/Footer'

export default () => {
    return (
        <main className = 'vh100 vw100 flex-v'>
            <Header />
            <section className = 'flex-1 overflow-y-auto w-100'>
                <section className = 'landing-bg'>

                </section>
                <section className = 'py-5'>
                    <div className = 'container py-5'>
                        <div className = 'row j-c-c'>
                            <div className='col-12 mb-5'>
                                <h1 className = 'text-center theme-color mb-4'>Partners</h1>
                            </div>
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-1.png' alt='brand' />
                            </div >
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-2.png' alt='brand' />
                            </div >
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-3.png' alt='brand' />
                            </div >
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-4.png' alt='brand' />
                            </div >
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-5.png' alt='brand' />
                            </div>
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-1.png' alt='brand' />
                            </div >
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-2.png' alt='brand' />
                            </div >
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-3.png' alt='brand' />
                            </div >
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-4.png' alt='brand' />
                            </div >
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-5.png' alt='brand' />
                            </div>
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-1.png' alt='brand' />
                            </div >
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-2.png' alt='brand' />
                            </div >
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-3.png' alt='brand' />
                            </div >
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-4.png' alt='brand' />
                            </div >
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-5.png' alt='brand' />
                            </div>
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-1.png' alt='brand' />
                            </div >
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-2.png' alt='brand' />
                            </div >
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-3.png' alt='brand' />
                            </div >
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-4.png' alt='brand' />
                            </div >
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-5.png' alt='brand' />
                            </div>
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-1.png' alt='brand' />
                            </div >
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-2.png' alt='brand' />
                            </div >
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-3.png' alt='brand' />
                            </div >
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-4.png' alt='brand' />
                            </div >
                            <div className='col-auto opacity-half mb-5'>
                                <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='./images/brand-5.png' alt='brand' />
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </section>
            <style>{`
	        	.opacity-half{
	        		opacity: .5;
	        	}
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
