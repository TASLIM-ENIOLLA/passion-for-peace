import Header from '../components/pages/Header'
import Footer from '../components/pages/Footer'

import {useState, useEffect, useRef} from 'react'
import {api_routes} from '/config'

export default function(){
    const [successStories, setSuccessStories] = useState([])

    useEffect(() => {
        fetch(api_routes.success_stories)
        .then(res => res.json())
        .then(({data, type}) => setSuccessStories(data))
    }, [])

    return (
        <main className = 'vh100 vw100 flex-v'>
            <Header />
            <section className = 'flex-1 overflow-y-auto w-100'>
                <section className = 'landing-bg flex-v a-i-c j-c-c border'>
                    <h1 className = 'animated fadeIn bold text-white resize-font text-capitalize'>Success Stories</h1>
                </section>
                <section className = 'py-5'>
                    <div className = 'container py-5'>
                        <div className = 'row'>
                            <div className = 'col-lg-8 mx-auto'>
                                <div className = 'pb-5'>
                                    <h1 className = 'text-center theme-color mb-4'>Success Stories</h1>
                                </div>
                                <div>{
                                    successStories.map((successStoriesData, index) => (
                                        <SuccessStoryCard key = {`${successStoriesData.id}-${index}`} {...successStoriesData} />
                                    ))
                                }</div>
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
                    content: 'success stories';
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

export function SuccessStoryCard({id, name, role, comment, rating}){
    const [expanded, setExpanded] = useState(false)

    return (
        <div className = {`row mb-5`}>
            <div className = 'col'>
                <p className = {`overflow-0 transit transit text-justify text-muted ${expanded ? 'all-lines' : 'double-line'}`}>
                    <span className = 'fo-s-15'>{comment}</span>
                </p>
            </div>
            <div className = 'col-auto pl-0'>
                <button onClick = {() => setExpanded((e) => !e)} className = {`${expanded ? 'bg-light text-muted' : 'theme-bg text-white'} px-2 mt-1 outline-0 border-0 shadow-sm rounded-circle`} style = {{width: '40px', height: '40px'}}>
                    <span className = {`bi bi-chevron-${!expanded ? 'expand' : 'contract'} fa-2x`}></span>
                </button>
            </div>
            <div className = 'col-12'>
                <div className = 'row a-i-c'>
                    <div className = 'col-auto'>
                        <div className = 'rounded-circle shadow overflow-0' style = {{width: '55px', height: '55px'}}>
                            <img className = 'w-100 d-block' src = '/images/author-1.png' />
                        </div>
                    </div>
                    <div className = 'col'>
                        <h5 className = 'one-line text-capitalize bold text-dark mb-0'>{name}</h5>
                        <p className = 'one-line text-capitalize text-muted mb-0'>{role}</p>
                    </div>
                </div>
            </div>
            <div className = 'col-12'>
                <hr className = 'border border-muted mt-3' />
            </div>
            <style jsx>{`
                .all-lines{
                    display: -webkit-box;
                    -webkit-line-clamp: 0;
                    -webkit-box-orient: vertical;
                    overflow: hidden !important;
                }
            `}</style>
        </div>
    )
}
