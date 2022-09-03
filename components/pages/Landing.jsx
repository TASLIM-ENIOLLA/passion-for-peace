import {useState, useEffect} from 'react'

export default () => {
	const [carouselWidth, setCarouselWidth] = useState(0)

	useEffect(() => {
		['load', 'resize'].forEach(each => window.addEventListener(each, () => {
			const {width} = window.screen
			setCarouselWidth(width)
		}))
	}, [])

	return (
		<section className = 'landing-bg'>
			<div id="home" className ="slider-area">
				<div className ="bd-example">
					<div id="carouselOne" className ="carousel slide" data-ride="carousel">
						<ol className ="carousel-indicators">
							<li data-target="#carouselOne" data-slide-to="0" className =""></li>
							<li data-target="#carouselOne" data-slide-to="1" className =""></li>
							<li data-target="#carouselOne" data-slide-to="2" className ="active"></li>
						</ol>
						<div className ="carousel-inner">
							<div className ="carousel-item bg_cover" style = {{backgroundImage: `url(/images/slider-1.jpg)`}}>
								<div className ="carousel-caption po-rel top-0 left-0 h-100 w-100 flex-v a-i-c j-c-c">
									<div className ="container">
										<div className ="row justify-content-center">
											<div className ="col-xl-6 col-lg-7 col-sm-10">

											</div>
										</div>
									</div>
								</div>
							</div>
							<div className ="carousel-item bg_cover active carousel-item-left" style = {{backgroundImage: `url(/images/slider-2.jpg)`}}>
								<div className ="carousel-caption po-rel top-0 left-0 h-100 w-100 flex-v a-i-c j-c-c">
									<div className ="container">
										<div className ="row justify-content-center">
											<div className ="col-xl-6 col-lg-7 col-sm-10">

											</div>
										</div>
									</div>
								</div>
							</div>
							<div className ="carousel-item bg_cover carousel-item-next carousel-item-left" style = {{backgroundImage: `url(/images/slider-3.jpg)`}}>
								<div className ="carousel-caption po-rel top-0 left-0 h-100 w-100 flex-v a-i-c j-c-c">
									<div className ="container">
										<div className ="row justify-content-center">
											<div className ="col-xl-6 col-lg-7 col-sm-10">

											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<a className ="carousel-control-prev" href="#carouselOne" role="button" data-slide="prev">
							<i className ="lni-arrow-left-circle"></i>
						</a>
						<a className ="carousel-control-next" href="#carouselOne" role="button" data-slide="next">
							<i className ="lni-arrow-right-circle"></i>
						</a>
					</div>
				</div>
			</div>
			<style>{`
				.bg_cover{
					background-size: cover;
					background-position: center;
					min-height: ${carouselWidth * .5}px;
					// max-height: calc(80vh - 80px);
				}
			`}</style>
		</section>
	)
}
