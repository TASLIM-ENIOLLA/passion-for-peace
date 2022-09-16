export default () => {
	return (
		<>
			<section id='about' className='my-5 po-rel'>
			    <section className = 'po-rel'>
			        <div className='container py-5'>
			            <div className='row a-i-c'>
			                <div className='col-lg-6'>
			                    <div className=''>
			                        <div className='section-title'>
			                            <h2 className='title bold text-capitalize'>
			                            	What is PPI (Passion for Peace Initiative) Innovative Grant 2022?
			                            </h2>
			                        </div>
			                        <p className='fo-s-15 light text-muted my-5'>
										Passion for Peace Initiative has over the years pursued the course of promoting lasting peace and unity amongst the diverse ethnic nationalities that make up Nigeria. Our passion is to inspire and bring about peace in our society by harmonising the diversities within the political, social, economic, religious, gender and tribal spheres for peaceful co exitence of all the diverse ethnic nationalities...
									</p>
			                        <p>
										<a className = 'underline fo-s-15 light text-muted flex-h a-i-c' href = './about'>
											Read more
											<span className = 'bi bi-box-arrow-up-right ml-3'></span>
										</a>
			                        </p>
			                    </div>
			                </div>
			                <div className='col-lg-6'>
			                    <div className=''>
			                        <img src='/images/about1.svg' className = 'd-block w-100' alt='about' />
			                    </div>
			                </div>
			            </div>
			        </div>
			        <div className='po-abs top-0 right-0 h-100' style = {{zIndex: -10}}>
			            <img src='/images/about-shape-1.svg' className = 'h-100' alt='shape' />
			        </div>
			    </section>
			    <section className = 'po-rel overflow-0'>
			        <div className='container py-5'>
			            <div className='row a-i-c flex-reverse'>
			                <div className='col-lg-6'>
			                    <div className=''>
			                        <div className='section-title'>
			                            <h2 className='title bold text-capitalize'>
			                            	our mission
			                            </h2>
			                        </div>
			                        <p className='fo-s-15 light text-muted my-5'>Providing enterpreneurship skills &amp; strategic wealth creation for sustainable growth.</p>
			                    </div>
			                </div>
			                <div className='col-lg-6'>
			                    <div className=''>
									<img src='/images/bootcamp.jpg' className = 'd-block w-100' alt='about' />
			                    </div>
			                </div>
			            </div>
			        </div>
			        <div className='po-abs top-0 left-0 h-100' style = {{zIndex: -10}}>
			            <img src='/images/about-shape-1.svg' style = {{transform: 'rotate(-180deg)'}} className = 'h-100' alt='shape' />
			        </div>
			    </section>
			    <section className = 'po-rel'>
			        <div className='container py-5'>
			            <div className='row a-i-c'>
			                <div className='col-lg-6'>
			                    <div className=''>
			                        <div className='section-title'>
			                            <h2 className='title bold text-capitalize'>
			                            	our vision
			                            </h2>
			                        </div>
			                        <p className='fo-s-15 light text-muted my-5'>To empower youths, dicovering and harnessing potential for self-developement to positively impact on the economy of Nigeria.</p>
			                    </div>
			                </div>
			                <div className='col-lg-6'>
			                    <div className=''>
									<img src='/images/black-scientist.jpg' className = 'd-block w-100' alt='about' />
			                    </div>
			                </div>
			            </div>
			        </div>
			        <div className='po-abs top-0 right-0 h-100' style = {{zIndex: -10}}>
			            <img src='/images/about-shape-1.svg' className = 'h-100' alt='shape' />
			        </div>
			    </section>
		    </section>
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
		</>
	)
}
