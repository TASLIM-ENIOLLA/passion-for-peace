import Header from '../components/pages/Header'
import Footer from '../components/pages/Footer'

export default function About(){
    return (
        <main className = 'vh100 vw100 flex-v'>
            <Header />
            <section className = 'flex-1 overflow-y-auto w-100'>
                <section className = 'landing-bg flex-v a-i-c j-c-c'>
                    <h1 className = 'animated fadeIn bold text-white resize-font text-capitalize'>About</h1>
                </section>
                <section className = 'py-5'>
                    <div className = 'container py-5'>
                        <div className = 'row'>
                            <div className = 'col-lg-8'>
                                <div>
                                    <div className = 'mb-5 pb-3 pt-5' id = 'about'>
                                        <h1 className = 'theme-color mb-5'>What is Passion for Peace Innovative Grant 2022?</h1>
                                        <p className = 'fo-s-15 text-muted light'>
                                            Passion for Peace Initiative has over the years pursued the course of promoting lasting peace and unity amongst the diverse ethnic nationalities that make up Nigeria. Our passion is to inspire and bring about peace in our society by harmonising the diversities within the political, social, economic, religious, gender and tribal spheres for peaceful co exitence of all the diverse ethnic nationalities. PPI believes Nigeria can and should survive as one United, Strong, Viable, Indivisible, Progressive and Sustainable leading Economy in Africa. Focusing on the lager percentage of the population (the Youth)
                                            In view of the rising insecurity in the country, pervasive social disturbance  and incessant agitation for self determination and restructuring of the existing geo-political set-up and calls for break-up of Nigeria.
                                        </p>
                                        <p className = 'fo-s-15 text-muted light'>
                                            PPI and partners in line with the United Nations Sustainable Development Goals  has established this laudable program tagged <span className = 'bg-orange text-white px-1 rounded'>Passion for Peace Innovative Grant</span> which is aimed at engaging and empowering ideas of Nigerian Youths to which revolves around Agriculture and Information Technology to improve on our economy, halt tension, and pessimisms about our Federation.
                                        </p>
                                    </div>
                                    <div className = 'mb-5 pb-3 pt-5' id = 'mission'>
                                        <h3 className = 'theme-color mb-4'>Our Mission</h3>
                                        <div className = 'fo-s-15 text-muted light'>
                                            <p className = 'fo-s-15 text-muted light'>The following are hightlights of our mission:</p>
                                            <ul className = 'ml-4 mt-4'>
                                                <li className = 'mb-3 fo-s-15 light text-muted'>To provide enterpreneurship skills</li>
                                                <li className = 'mb-3 fo-s-15 light text-muted'>To provide a means of startegic wealth creation</li>
                                                <li className = 'mb-3 fo-s-15 light text-muted'>To create sustainable growth for the nation</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className = 'mb-5 pb-3 pt-5' id = 'vision'>
                                        <h3 className = 'theme-color mb-4'>Our Vision</h3>
                                        <div className = 'fo-s-15 text-muted light'>
                                            <p className = 'fo-s-15 text-muted light'>The following are hightlights of our vision:</p>
                                            <ul className = 'ml-4 mt-4'>
                                                <li className = 'mb-3 fo-s-15 light text-muted'>To empower youths</li>
                                                <li className = 'mb-3 fo-s-15 light text-muted'>To help youths discover &amp; harness their potentials</li>
                                                <li className = 'mb-3 fo-s-15 light text-muted'>To encourage self-development</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className = 'mb-5 pb-3 pt-5' id = 'sdg_goals'>
                                        <h3 className = 'theme-color mb-4'>SGD Goals</h3>
                                        <p className = 'fo-s-15 text-muted light'>
                                            The grant was established in order to fulfill a certain number of the SDG goals. By 2030, the grant is projected to have assisted 50,000 youths, making the set goals of the SDG realisable.
                                        </p>
                                        <div className = 'fo-s-15 text-muted light'>
                                            <p className = 'fo-s-15 text-muted light'>The following SDG goals have been highlighted:</p>
                                            <ul className = 'ml-4 mt-4 fo-s-15 light'>
                                                <li className = 'mb-3 fo-s-15 light text-muted'>
                                                    <span>SDG 4: Quality education</span>
                                                    <img src = './images/goals/4.jpg' className = 'd-block mt-2' width = '60' />
                                                </li>
                                                <li className = 'mb-3 fo-s-15 light text-muted'>
                                                    <span>SDG 8: Decent work and economic growth</span>
                                                    <img src = './images/goals/8.jpg' className = 'd-block mt-2' width = '60' />
                                                </li>
                                                <li className = 'mb-3 fo-s-15 light text-muted'>
                                                    <span>SDG 9: Industry, innovation and infrastructure</span>
                                                    <img src = './images/goals/9.jpg' className = 'd-block mt-2' width = '60' />
                                                </li>
                                                <li className = 'mb-3 fo-s-15 light text-muted'>
                                                    <span>SDG 11: Sustainable cities and economies</span>
                                                    <img src = './images/goals/11.jpg' className = 'd-block mt-2' width = '60' />
                                                </li>
                                                <li className = 'mb-3 fo-s-15 light text-muted'>
                                                    <span>SDG 12: Responsible consumption and production</span>
                                                    <img src = './images/goals/12.jpg' className = 'd-block mt-2' width = '60' />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className = 'mb-5 pb-3 pt-5' id = 'theme'>
                                        <h3 className = 'theme-color mb-4'>Grant Theme</h3>
                                        <p className = 'fo-s-15 text-muted light'>
                                            The theme of the grant borders on Agriculture, Information Technology &amp; Engineering
                                        </p>
                                    </div>
                                    <div className = 'mb-5 pb-3 pt-5' id = 'eligibility'>
                                        <h3 className = 'theme-color mb-4'>Eligibility</h3>
                                        <p>
            								<a className = 'light underline fo-s-15 text-muted flex-h a-i-c' href = './eligibility-criteria'>
            									Checkout eligibility criteria and T&amp;C
            									<span className = 'bi bi-box-arrow-up-right ml-3'></span>
            								</a>
            	                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className = 'd-none d-lg-block col-lg-4'>
                                <div className = 'py-5 po-sticky top-0'>
                                    <div className = 'border-left px-4 py-5'>
                                        <h3 className = 'mb-4'>What is PPI Grant 2022?</h3>
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
                                            <div>
                                                <a href = '#sdg_goals' className = 'page-navs fo-s-15 text-capitalize d-inline-block mb-4 underline light'>SDG goals</a>
                                            </div>
                                            <div>
                                                <a href = '#theme' className = 'page-navs fo-s-15 text-capitalize d-inline-block mb-4 underline light'>grant theme</a>
                                            </div>
                                            <div>
                                                <a href = '#eligibility' className = 'page-navs fo-s-15 text-capitalize d-inline-block mb-4 underline light'>eligibility</a>
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
                    content: 'about';
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
