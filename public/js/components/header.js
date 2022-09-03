(() => {

	document.querySelectorAll('.page-links').forEach(
		each => {
			each.addEventListener(
				'click',
				(e) => {
					e.preventDefault()

					if(document.querySelector(e.target.hash)){
						document.querySelector(e.target.hash).scrollIntoView({behavior: 'smooth'})
					}
				}
			)
		}
	)

})()
