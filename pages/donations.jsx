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
                        <div className = 'row'>
                            <div className = 'col-lg-8'>
                                <div>
                                    <div className = 'mb-5 pb-3 pt-5' id = 'donations'>
                                        <h1 className = 'theme-color mb-5'>Donation</h1>
                                        <p className = 'fo-s-15 text-muted light'>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.
                                        </p>
                                    </div>
                                    <div className = 'mb-5 pb-3 pt-5' id = 'donate'>
                                        <h3 className = 'theme-color mb-4'>Donate</h3>
                                        <div className = 'fo-s-15 text-muted light'>
                                            <p className = 'fo-s-15 text-muted light'>Click on the button below and follow instructions to make a donation and remember, we are grateful!</p>
                                            <a href = '' className = 'a-i-c py-2 px-5 btn theme-bg text-white bold text-capitalize d-inline-flex'>
                                                donate now
                                                <span className = 'bi bi-cash-stack fa-2x ml-3'></span>
                                            </a>
                                        </div>
                                    </div>
                                    <div className = 'mb-5 pb-3 pt-5' id = 'our-donors'>
                                        <h3 className = 'theme-color mb-4'>Our donors</h3>
                                        <div className = 'fo-s-15 text-muted light'>
                                            <p className = 'fo-s-15 text-muted light'>The following are hightlights of our donors:</p>
                                            <ul className = 'ml-4 mt-4'>
                                                <li className = 'mb-3 fo-s-15 light text-muted'>Ali Bala - $300,000</li>
                                                <li className = 'mb-3 fo-s-15 light text-muted'>Senuak Banga - $2,300,000</li>
                                                <li className = 'mb-3 fo-s-15 light text-muted'>Abubakar Dangode - $6,500,000</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = 'd-none d-lg-block col-lg-4'>
                                <div className = 'py-5 po-sticky top-0'>
                                    <div className = 'border-left px-4 py-5'>
                                        <h3 className = 'mb-4'>Donations</h3>
                                        <div className = 'pt-4 mb-5'>
                                            <div>
                                                <a href = '#donations' className = 'page-navs fo-s-15 text-capitalize d-inline-block mb-4 underline light'>donations</a>
                                            </div>
                                            <div>
                                                <a href = '#donate' className = 'page-navs fo-s-15 text-capitalize d-inline-block mb-4 underline light'>donate</a>
                                            </div>
                                            <div>
                                                <a href = '#our-donors' className = 'page-navs fo-s-15 text-capitalize d-inline-block mb-4 underline light'>our donors</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                    // min-height: calc(80vh - 80px);
                }
            `}</style>
            <script src = '/js/pages/about.js'></script>
        </main>
    )
}
