import Header from '../components/pages/Header'
import Footer from '../components/pages/Footer'

export default function Bootcamp(){
    return (
        <>
            <Header />
            <section className = 'landing-bg flex-v a-i-c j-c-c'>
                <h1 className = 'animated fadeIn bold text-white resize-font text-capitalize'>Bootcamp</h1>
            </section>
            <section className = 'py-5'>
                <div className = 'container py-5'>
                    <div className = 'row'>
                        <div className = 'col-lg-8'>
                            <div>
                                <div className = 'mb-5 pb-3 pt-5 mt-5' id = 'bootcamp'>
                                    <h1 className = 'theme-color mb-5'>Bootcamp</h1>
                                    <p className = 'fo-s-15 text-muted light'>
                                        The bootcamp will commence after the deadline for the registration. The location, date &amp; duration of the bootcamp will be communicated to all registered applicants.
                                    </p>
                                </div>
                                <div className = 'mb-5 pb-3 pt-5 mt-5' id = 'location'>
                                    <h3 className = 'theme-color mb-4'>Location</h3>
                                    <div className = 'fo-s-15 text-muted light'>
                                        <p className = 'fo-s-15 text-muted light'>N/A - Infromation will be communicated to all registered applicants.</p>
                                    </div>
                                </div>
                                <div className = 'mb-5 pb-3 pt-5 mt-5' id = 'date'>
                                    <h3 className = 'theme-color mb-4'>Date</h3>
                                    <div className = 'fo-s-15 text-muted light'>
                                        <p className = 'fo-s-15 text-muted light'>N/A - Infromation will be communicated to all registered applicants.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className = 'd-none d-lg-block col-lg-4'>
                            <div className = 'py-5 po-sticky top-0'>
                                <div className = 'border-left px-4 py-5'>
                                    <h3 className = 'mb-4'>Bootcamp</h3>
                                    <div className = 'pt-4 mb-5'>
                                        <div>
                                            <a href = '#bootcamp' className = 'page-navs fo-s-15 text-capitalize d-inline-block mb-4 underline light'>bootcamp</a>
                                        </div>
                                        <div>
                                            <a href = '#location' className = 'page-navs fo-s-15 text-capitalize d-inline-block mb-4 underline light'>location</a>
                                        </div>
                                        <div>
                                            <a href = '#date' className = 'page-navs fo-s-15 text-capitalize d-inline-block mb-4 underline light'>date</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <style>{`
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
                    content: 'bootcamp';
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
        </>

    )
}
