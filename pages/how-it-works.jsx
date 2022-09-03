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
                                <div className = 'py--5'>
                                    <div className = 'mb-5 pb-3 pt-5' id = 'about'>
                                        <h1 className = 'theme-color mb-5'>How it works</h1>
                                        <p className = 'fo-s-15 text-muted light'>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.
                                        </p>
                                    </div>
                                    <div className = 'mb-5 pb-3 pt-5' id = 'mission'>
                                        <h3 className = 'theme-color mb-4'>Our Mission</h3>
                                        <p className = 'fo-s-15 text-muted light'>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.
                                        </p>
                                    </div>
                                    <div className = 'mb-5 pb-3 pt-5' id = 'vision'>
                                        <h3 className = 'theme-color mb-4'>Our Vision</h3>
                                        <p className = 'fo-s-15 text-muted light'>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className = 'd-none d-lg-block col-lg-4'>
                                <div className = 'py-5'>
                                    <div className = 'border-left px-4 py-5'>
                                        <h3 className = 'mb-4'>What is AGSMEIS?</h3>
                                        <div className = 'pt-4 mb-5'>
                                            <div>
                                                <a href = '#about' className = 'page-navs fo-s-15 text-capitalize d-inline-block mb-4 underline light'>about us</a>
                                            </div>
                                            <div>
                                                <a href = '#mission' className = 'page-navs fo-s-15 text-capitalize d-inline-block mb-4 underline light'>our mission</a>
                                            </div>
                                            <div>
                                                <a href = '#vision' className = 'page-navs fo-s-15 text-capitalize d-inline-block mb-4 underline light'>our vision</a>
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
