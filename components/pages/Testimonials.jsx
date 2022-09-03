export default () => {
    return (
        <section className = 'py-5' id = 'success-stories'>
            <div className = 'container py-5'>
                <div className = 'col-12'>
                    <div className = 'py-5'>
                        <h2 className='title text-center bold text-capitalize'>
                            success stories
                        </h2>
                    </div>
                    <div className = 'row overflow-x-auto transparent-scrollbar flex-nowrap'>
                        <div className = 'col-11 col-md-7 col-lg-5 mb-5'>
                            <TestimonialCard />
                        </div>
                        <div className = 'col-11 col-md-7 col-lg-5 mb-5'>
                            <TestimonialCard />
                        </div>
                        <div className = 'col-11 col-md-7 col-lg-5 mb-5'>
                            <TestimonialCard />
                        </div>
                        <div className = 'col-11 col-md-7 col-lg-5 mb-5'>
                            <TestimonialCard />
                        </div>
                        <div className = 'col-11 col-md-7 col-lg-5 mb-5'>
                            <TestimonialCard />
                        </div>
                        <div className = 'col-11 col-md-7 col-lg-5 mb-5'>
                            <TestimonialCard />
                        </div>
                    </div>
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


const TestimonialCard = () => (
    <div className = 'border px-4 rounded-1x shadow'>
        <div className = 'py-4 flex-h a-i-c j-c-space-between'>
            <div>
                <span className = 'bi bi-quote fa-3x'></span>
            </div>
            <div>
                <div className = 'd-inline-block'>
                    <span className = 'bi bi-star-fill fo-s-16 text-orange mx-1'></span>
                    <span className = 'bi bi-star-fill fo-s-16 text-orange mx-1'></span>
                    <span className = 'bi bi-star-fill fo-s-16 text-orange mx-1'></span>
                    <span className = 'bi bi-star-fill fo-s-16 text-muted mx-1'></span>
                    <span className = 'bi bi-star-fill fo-s-16 text-muted mx-1'></span>
                </div>
            </div>
        </div>
        <p className = 'py-4 text-muted light fo-s-15'>
            Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu eirmod tempor invidunt labore.Lorem ipsum dolor sit amet,consetetur sadipscing elitr, seddiam nonu.
        </p>
        <div className = 'pb-4 row a-i-c'>
            <div className = 'col-auto'>
                <div className = 'rounded-circle shadow overflow-0' style = {{width: '65px', height: '65px'}}>
                    <img className = 'w-100 d-block' src = '/images/author-1.png' />
                </div>
            </div>
            <div className = 'col text-right'>
                <h4 className = 'one-line text-capitalize bold text-dark'>Musa-Azeez Taslim Eniola Aderibigbe Amoo</h4>
                <h5 className = 'one-line text-capitalize text-muted'>CEO, Makerflix</h5>
            </div>
        </div>
        <style jsx>{`
            .fa-3x{
                font-size: 3rem;
            }
        `}</style>
    </div>
)
