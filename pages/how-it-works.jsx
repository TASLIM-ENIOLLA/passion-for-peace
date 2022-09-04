import Header from '../components/pages/Header'
import Footer from '../components/pages/Footer'

const ContentNTab = [
    {
        content: (`
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.
        `),
        tabID: 'how-it-works',
        tabTitle: 'How it works'
    },
    {
        content: (
            <>
                <p className = 'fo-s-15 text-muted light'>The following are steps on how to apply for the grant:</p>
                <ul className = 'ml-4 mt-4'>
                    <li className = 'mb-3 fo-s-15 light text-muted'>Visit <a href = './apply-now'><pre className = 'd-inline fo-s-15 theme-color'>./apply-now</pre></a> to get started</li>
                    <li className = 'mb-3 fo-s-15 light text-muted'>Fill out all fields correctly.</li>
                    <li className = 'mb-3 fo-s-15 light text-muted'>Once form is submitted, you will be redirected to your dashboard</li>
                    <li className = 'mb-3 fo-s-15 light text-muted'>Click `proceed to application page` to complete application</li>
                    <li className = 'mb-3 fo-s-15 light text-muted'>Once you have completed application, you will be redirected to create your business plan</li>
                    <li className = 'mb-3 fo-s-15 light text-muted'>Once you have created your business plan, you will be redirected back to your dashboard where you have not become eligible for the grant</li>
                    <li className = 'mb-3 fo-s-15 light text-muted'>To check if you've been shortlisted for the grant, check `status` on your dashboard</li>
                </ul>
            </>
        ),
        tabID: 'how-to-apply',
        tabTitle: 'How to apply'
    }
]

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
                                <div>{
                                    ContentNTab.map(({content, tabID, tabTitle}, index) => (
                                        <div key = {tabID} className = 'mb-5 pb-3 pt-5' id = {tabID}>{
                                            (index === 0)
                                            ? <h1 className = 'theme-color mb-4'>{tabTitle}</h1>
                                            : <h3 className = 'theme-color mb-4'>{tabTitle}</h3>
                                        }
                                            <div className = 'fo-s-15 text-muted light'>
                                                {content}
                                            </div>
                                        </div>
                                    ))
                                }</div>
                            </div>
                            <div className = 'd-none d-lg-block col-lg-4'>
                                <div className = 'py-5 po-sticky top-0'>
                                    <div className = 'border-left px-4 py-5'>
                                        <h3 className = 'mb-4'>How it works?</h3>
                                        <div className = 'pt-4 mb-5'>{
                                            ContentNTab.map(({tabID, tabTitle}) => (
                                                <div key = {tabID}>
                                                    <a href = {`#${tabID}`} className = 'page-navs fo-s-15 text-capitalize d-inline-block mb-4 underline light'>{tabTitle}</a>
                                                </div>
                                            ))
                                        }</div>
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
                }
            `}</style>
            <script src = '/js/pages/about.js'></script>
        </main>
    )
}
