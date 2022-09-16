import Header from '../components/pages/Header'
import Footer from '../components/pages/Footer'

import {deadline} from '/data/deadline'

export default () => {
    return (
        <main className = 'vh100 vw100 flex-v'>
            <Header />
            <section className = 'flex-1 overflow-y-auto w-100'>
                <section className = 'landing-bg flex-v a-i-c j-c-c'>
                    <h1 className = 'animated fadeIn bold text-white resize-font text-capitalize'>Eligibility Criteria</h1>
                </section>
                <section className = 'py-5'>
                    <div className = 'container py-5'>
                        <div className = 'row'>
                            <div className = 'col-lg-8'>
                                <div>
                                    <div className = 'mb-5 pb-3 pt-5' id = 'eligibility-criteria'>
                                        <h1 className = 'theme-color mb-5'>Eligibility Criteria</h1>
                                        <p className = 'fo-s-15 text-muted light'>
                                            This grant is open to all persons irrespective of age, gender or qualifications.
                                        </p>
                                    </div>
                                    <div className = 'mb-5 pb-3 pt-5' id = 'areas'>
                                        <h3 className = 'theme-color mb-4'>Areas</h3>
                                        <div className = 'fo-s-15 text-muted light'>
                                            <p className = 'fo-s-15 text-muted light'>The following are hightlights of acceptable 'call to innovation' areas:</p>
                                            <ul className = 'ml-4 mt-4'>
                                                <li className = 'mb-3 fo-s-15 light text-muted'>Agriculture</li>
                                                <li className = 'mb-3 fo-s-15 light text-muted'>Information Technology</li>
                                                <li className = 'mb-3 fo-s-15 light text-muted'>Engineering &amp; Technology</li>
                                                <li className = 'mb-3 fo-s-15 light text-muted'>IT-Gric</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className = 'mb-5 pb-3 pt-5' id = 'categories'>
                                        <h3 className = 'theme-color mb-4'>Categories</h3>
                                        <div className = 'fo-s-15 text-muted light'>
                                            <p className = 'fo-s-15 text-muted light'>These categories are a breakdown of the kind of ideas that a required to be eligible for the grant</p>
                                            <ul className = 'ml-4 mt-4'>
                                                <li className = 'mb-3 fo-s-15 light text-muted'>Innovative ideas with proof of concept</li>
                                                <li className = 'mb-3 fo-s-15 light text-muted'>Scaling up of existing innovative ideas</li>
                                                <li className = 'mb-3 fo-s-15 light text-muted'>Capacity building in science, technology &amp; innovation</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className = 'mb-5 pb-3 pt-5' id = 'deadline'>
                                        <h3 className = 'theme-color mb-4'>Application Deadline</h3>
                                        <div className = 'fo-s-15 text-muted light'>
                                            <p className = 'fo-s-15 text-muted light'>All application must be completed and submitted on or before {deadline}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className = 'd-none d-lg-block col-lg-4'>
                                <div className = 'py-5 po-sticky top-0'>
                                    <div className = 'border-left px-4 py-5'>
                                        <h3 className = 'mb-4'>Eligibility Criteria</h3>
                                        <div className = 'pt-4 mb-5'>
                                            <div>
                                                <a href = '#eligibility-criteria' className = 'page-navs fo-s-15 text-capitalize d-inline-block mb-4 underline light'>eligibility criteria</a>
                                            </div>
                                            <div>
                                                <a href = '#areas' className = 'page-navs fo-s-15 text-capitalize d-inline-block mb-4 underline light'>areas</a>
                                            </div>
                                            <div>
                                                <a href = '#categories' className = 'page-navs fo-s-15 text-capitalize d-inline-block mb-4 underline light'>categories</a>
                                            </div>
                                            <div>
                                                <a href = '#t_and_c' className = 'page-navs fo-s-15 text-capitalize d-inline-block mb-4 underline light'>terms &amp; conditions</a>
                                            </div>
                                            <div>
                                                <a href = '#deadline' className = 'page-navs fo-s-15 text-capitalize d-inline-block mb-4 underline light'>application deadline</a>
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
                    content: 'eligibility criteria';
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
