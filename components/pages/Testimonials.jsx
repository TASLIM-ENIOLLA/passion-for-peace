import {useState, useEffect} from 'react'
import {api_routes} from '/config'

export default function Testimonials(){
    const [successStories, setSuccessStories] = useState([])

    useEffect(() => {
        fetch(`${api_routes.success_stories}?count=4`)
        .then(res => res.json())
        .then(({data, type}) => setSuccessStories(data))
    }, [])

    return (
        <section className = 'py-5' id = 'success-stories'>
            <div className = 'container py-5'>
                <div className = 'col-12'>
                    <div className = 'py-5'>
                        <h2 className='title text-center bold text-capitalize'>
                            success stories
                        </h2>
                    </div>
                    <div className = 'row overflow-x-auto transparent-scrollbar flex-nowrap'>{
                        successStories.map((successStoriesData, index) => (
                            <div key = {`${successStoriesData.id}-${index}`} className = 'col-11 col-md-7 col-lg-5 mb-5'>
                                <TestimonialCard {...successStoriesData} />
                            </div>
                        ))
                    }</div>
                    <p className = 'pt-5 text-center'>
                        <a className = 'underline fo-s-15 light text-muted d-inline-flex a-i-c' href = './success-stories'>
                            See more
                            <span className = 'bi bi-box-arrow-up-right ml-3'></span>
                        </a>
                    </p>
                </div>
            </div>
            <style jsx>{`
                .title{
                    position: relative;
                }
                .flex-reverse{
                    flex-direction: row-reverse;
                }
                .title:before{
                    content: '';
                    display: inline-block;
                    height: 5px;
                    width: 100%;
                    max-width: 90px;
                    background: var(--orange);
                    position: absolute;
                    top: -10%;
                    transform: translate(-50%, -100%);
                    left: 50%;
                }
            `}</style>
        </section>
    )
}

const Rating = ({rating}) => (
    <div className = 'd-inline-block'>{
        [1,2,3,4,5].map((each, index) => (
            <span key = {index} className = {`bi bi-star-fill fo-s-16 ${index < rating ? 'text-orange' : 'text-muted'} mx-1`}></span>
        ))
    }</div>
)

const TestimonialCard = ({id, name, role, comment, rating}) => (
    <div className = 'border px-4 rounded-1x shadow'>
        <div className = 'py-3 flex-h a-i-c j-c-space-between'>
            <div>
                <span className = 'bi bi-quote fa-3x text-orange'></span>
            </div>
            <div>
                <Rating rating = {rating} />
            </div>
        </div>
        <p className = 'my-3 fo-s-15 text-muted light three-line'>{comment}</p>
        <div className = 'pb-4 row a-i-c'>
            <div className = 'col-auto'>
                <div className = 'rounded-circle shadow overflow-0' style = {{width: '60px', height: '60px'}}>
                    <img className = 'w-100 d-block' src = '/images/author-1.png' />
                </div>
            </div>
            <div className = 'col text-right'>
                <h5 className = 'one-line text-capitalize bold text-dark mb-0'>{name}</h5>
                <p className = 'one-line text-capitalize text-muted mb-0'>{role}</p>
            </div>
        </div>
        <style jsx>{`
            .three-line{
                display: -webkit-box;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden !important;
            }
            .fa-3x{
                font-size: 3rem;
            }
        `}</style>
    </div>
)
