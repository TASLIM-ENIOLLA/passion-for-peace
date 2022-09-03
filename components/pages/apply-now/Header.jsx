export default () => {
	return (
		<section className = 'bg-white shadow border-bottom'>
          	<div className = 'container'>
            	<div className = 'row j-c-space-between a-i-c py-4'>
              		<div className = 'col-auto'>
                		<a href = ''>
                  			<img src = './images/client-4.png' width = '50' />
                		</a>
              		</div>
              		<div className = 'col-auto col-md-d-none'>
                		<button className = 'border-0 p-2 bg-clear'>
                  			<span className = 'bi bi-border-width fo-s-22'></span>
                		</button>
              		</div>
              		<div className = 'col-auto col-d-none col-md-d-block text-capitalize'>
		                <a href = './' className = 'mx-4 bg-clear p-2 border-0 text-capitalize bold text-success'>home</a>
		                <a href = './sign-in' className = 'mx-4 p-2 btn btn-success text-capitalize bold px-4'>sign in</a>
              		</div>
            	</div>
          	</div>
        </section>
	)
}