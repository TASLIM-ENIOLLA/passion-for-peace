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
                <section className = 'landing-bg'>

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

export function SuccessStoryCard({id, name, role, comment, rating}){
    const [expanded, setExpanded] = useState(false)

    return (
        <div className = {`row mb-5`}>
            <div className = 'col'>
                <p className = {`fo-s-15 overflow-0 transit transit text-justify text-muted ${expanded ? 'all-lines' : 'double-line'}`}>
                    <span>{comment}</span>
                </p>
            </div>
            <div className = 'col-auto'>
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
                        <h5 className = 'one-line text-capitalize bold text-dark'>{name}</h5>
                        <p className = 'm-0 one-line text-capitalize text-muted'>{role}</p>
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
