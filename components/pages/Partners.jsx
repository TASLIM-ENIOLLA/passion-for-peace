export default () => {
	return (
		<section id = 'partners' className='bg-white py-5'>
	        <div className='container mb-5'>
	            <div className='row'>
	                <div className='col-lg-12'>
	                	<div className = 'py-5'>
	                        <h2 className='title text-center bold text-capitalize'>
	                            partners
	                        </h2>
	                    </div>
	                    <div className='row a-i-c j-c-c'>
	                        <div className='col-6 col-auto col-sm-6 col-lg-auto opacity-half py-3'>
	                            <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='/images/brand-1.png' alt='brand' />
	                        </div >
	                        <div className='col-6 col-auto col-sm-6 col-lg-auto opacity-half py-3'>
	                            <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='/images/brand-2.png' alt='brand' />
	                        </div >
	                        <div className='col-6 col-auto col-sm-6 col-lg-auto opacity-half py-3'>
	                            <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='/images/brand-3.png' alt='brand' />
	                        </div >
	                        <div className='col-6 col-auto col-sm-6 col-lg-auto opacity-half py-3'>
	                            <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='/images/brand-4.png' alt='brand' />
	                        </div >
	                        <div className='col-6 col-auto col-sm-6 col-lg-auto opacity-half py-3'>
	                            <img className = 'mx-auto d-block w-100' style = {{maxWidth: '120px'}} src='/images/brand-5.png' alt='brand' />
	                        </div>
	                    </div>
	                </div>
	            </div>  
	        </div>
	        <style jsx>{`
	        	.opacity-half{
	        		opacity: .5;
	        	}
                .title{
                    position: relative;
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