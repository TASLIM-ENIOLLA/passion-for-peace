export default () => {
	return (
		<section id = 'how-it-works'>
	        <div className='container py-5'>
	            <div className='row a-i-c flex-reverse'>
	                <div className='col-lg-6'>
	                    <div className=''>
	                        <div className='section-title'>
	                            <h2 className='title bold text-capitalize'>
	                            	how it works
	                            </h2>
	                        </div>
	                        <p className='fo-s-15 light text-muted my-5'>
	                        	Lorem ipsum dolor sit amet, consetetur sadipscing elitr, seiam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.
	                        </p>
	                        <p>
								<a className = 'underline fo-s-15 light text-muted flex-h a-i-c' href = './how-it-works'>
									Read more
									<span className = 'bi bi-box-arrow-up-right ml-3'></span>
								</a>
	                        </p>
	                    </div>
	                </div>
	                <div className='col-lg-6'>
	                    <div className='po-rel'>
	                        <img src='/images/dots.svg' className = 'd-block w-100 po-abs bottom-0 left-0' alt='about' style = {{zIndex: '-10', transform: 'translate(-5%, 5%)'}} />
	                        <img src='/images/video.png' className = 'd-block w-100 po-rel' alt='about' />
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
		    		display: block;
		    		height: 5px;
		    		width: 100%;
		    		max-width: 90px;
		    		background: var(--orange);
		    		position: absolute;
		    		top: -10%;
		    		transform: translate(0, -100%);
		    		left: 0;
		    	}
		    `}</style>
	    </section>
	)
}
