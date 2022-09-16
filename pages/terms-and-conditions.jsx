import Header from '../components/pages/Header'
import Footer from '../components/pages/Footer'

export default function TermsAndConditions(){
    return (
        <main className = 'vh100 vw100 flex-v'>
            <Header />
            <section className = 'flex-1 overflow-y-auto w-100'>
                <section className = 'landing-bg flex-v a-i-c j-c-c border'>
                    <h1 className = 'animated fadeIn bold text-white resize-font text-capitalize'>Terms And Conditions</h1>
                </section>
                <section className = 'py-5'>
                    <div className = 'container py-5'>
                        <div className = 'row'>
                            <div className = 'col-lg-8 mx-auto'>
                                <div className = 'pb-5'>
                                    <h1 className = 'text-center theme-color mb-4'>Terms And Conditions</h1>
                                </div>
                                <div>
                                    <p className = 'fo-s-15'>Henceforth, the terms and conditions will be referred to as "Rules"</p>
                                    <ul className = 'ml-4'>
                                        <li className = 'fo-s-15 mb-3'>Successful applicants shall be subject to these Rules, the Participation Agreement and other rules and guidelines published by the foundation from time to time.</li>
                                        <li className = 'fo-s-15 mb-3'>The promoter reserves the right to cancel or ammend any part of the rules without notice. Any changes to the rules will be posted on the Programme's website.</li>
                                        <li className = 'fo-s-15 mb-3'>Applicants must create an account and complete an online entry form through the Passion for Peace Initiative Grant website at <a href = 'www.ppi-grant.com' className = 'theme-color fo-s-15'>www.ppi-grant.com</a>.</li>
                                        <li className = 'fo-s-15 mb-3'>The proposed business must operate in Nigeria and Applicants must be legal residents of the country.</li>
                                        <li className = 'fo-s-15 mb-3'>The business idea must be profit-oriented and must be the original work of those making the submission.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </section>
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
                    content: 'terms and conditions';
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
