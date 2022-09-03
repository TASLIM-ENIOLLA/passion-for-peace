import {useContext, useState} from 'react'
import {NavsContext} from '../../contexts/NavsContext'

export default () => {
	const {faqs} = useContext(NavsContext)
	
	return (
		<section ref = {faqs} className = 'bg-light'>
            <section className = 'container py-5'>
              	<div className = 'row py-5'>
                	<div className = 'col-lg-12 mb-4'>
                  		<h1 className = 'my-4 bold text-dark text-center'>Frequently Asked Questions</h1>
                  		<div className = 'mb-4 pt-4 mx-auto' style = {{maxWidth: '700px'}}>
	                    	<FAQs />
	                    	<FAQs />
	                    	<FAQs />
	                    	<FAQs />
                  		</div>
                	</div>
            	</div>
        	</section>
  		</section>
	)
}

const FAQs = ({title, children}) => {
  const [seeMore, setSeeMore] = useState(false)

  return (
	    <div className = 'mb-4 border-bottom py-2'>
	      	<div onClick = {() => setSeeMore(!seeMore)} className = 'row a-i-c'>
	        	<div className = 'col'>
	          		<h5 className = {`bold transit text-${(
	            		(seeMore)
	            		? 'success'
	            		: 'dark'
	         		 )}`}>{title || 'How do I access the loan?'}</h5>
	        	</div>
	        	<div className = 'col-auto'>
	          		<button className =  'bg-clear outline-0 border-0'>
	            		<span className = {`text-muted bi bi-${(
	              		(seeMore)
	              		? 'dash-circle'
	              		: 'plus-circle'
	            		)} fa-2x`}></span>
	          		</button>
	        	</div>
	      	</div>
	      	<div className = 'overflow-0'>
	        	<p className = {`${seeMore ? 'animated fadeIn' : 'd-none'}`}>{
	          		children || <>
	            		Interested applicants are to visit the <a href = 'https://agsmeisapp.nmfb.com.ng/onboarding' className = 'underline text-success'>https://agsmeisapp.nmfb.com.ng/onboarding</a> and create an account which will enable them start the application process, or visit any of the NMFB Certified   EDIs to guide
	          		</>
	        	}</p>
	      	</div>
    	</div>
  	)
}
