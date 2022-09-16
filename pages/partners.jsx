import Header from '../components/pages/Header'
import Footer from '../components/pages/Footer'

export default () => {
    return (
        <main className = 'vh100 vw100 flex-v'>
            <Header />
            <section className = 'flex-1 overflow-y-auto w-100'>
                <section className = 'landing-bg flex-v a-i-c j-c-c'>
                    <h1 className = 'animated fadeIn bold text-white resize-font text-capitalize'>Partners</h1>
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
                .resize-font{
                    position: relative;
                    z-index: 10;
                }
                .resize-font::before{
                    z-index: -10;
                    position: absolute;
                    top: 00%;
                    left: 50%;
                    color: rgba(200,200,200,.3);
                    transform: translate(-50%, -50%) scale(1.5);
                    content: 'partners';
                    text-transform: capitalize;
                    display: block;
                    width: 100%;
                    font-size: inherit;
                }
                .landing-bg{
                    background-size: cover;
					background-position: top;
					background-attachment: fixed;
					background-image: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/images/s-1.jpg);
                    min-height: 400px;
                }
            `}</style>
            <script src = '/js/pages/about.js'></script>
        </main>
    )
}
