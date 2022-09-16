import {useState, useEffect} from 'react'

export default function Landing(){
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
							<div className ="carousel-item bg_cover" style = {{backgroundImage: `url(/images/conference.jpg)`}}>
								<div className ="carousel-caption po-rel top-0 left-0 h-100 w-100 flex-v a-i-c- j-c-c">
									<div className ="container">
										<div className ="row justify-content-center-">
											<div className ="theme-thick-border-left col-lg-9 col-sm-12 text-left">
												<h1 className = 'bold text-white resize-font'>PPI Grant 2022</h1>
												<h5 className = 'text-white resize-font'>Bootcamp starts in a bit</h5>
												<a href = './bootcamp' style = {{border: '2px solid #ec3237'}} className = 'px-5 py-3 text-white bg-orange btn d-inlin-block mt-5 text-uppercase fo-s-18'>learn more</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className ="carousel-item bg_cover active carousel-item-left" style = {{backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/images/pp4.jpg)`}}>
								<div className ="carousel-caption po-rel top-0 left-0 h-100 w-100 flex-v a-i-c j-c-c">
									<div className ="container">
										<div className ="row justify-content-center-">
											<div className ="theme-thick-border-left col-lg-9 col-sm-12 text-left">
												<h1 className = 'bold text-white resize-font'>Passion for Peace Initiative</h1>
												<h5 className = 'text-white resize-font'>The One Voice Project for Nigeria</h5>
												<a href = 'https://ppi-africa.com' style = {{border: '2px solid #ec3237'}} className = 'px-5 py-3 text-white bg-orange btn d-inline-block mt-5 text-uppercase fo-s-18'>see more</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className ="carousel-item bg_cover carousel-item-next carousel-item-left" style = {{backgroundImage: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(/images/un-flags.jpg)`}}>
								<div className ="carousel-caption po-rel top-0 left-0 h-100 w-100 flex-v a-i-c j-c-c">
									<div className ="container">
										<div className ="row justify-content-center-">
											<div className ="theme-thick-border-left col-lg-9 col-sm-12 text-left">
												<h1 className = 'bold text-white resize-font'>PPI Grant 2022</h1>
												<h5 className = 'text-white resize-font'>PPI is a proud supporter of the UN SDG</h5>
												<a href = 'https://sdgs.un.org/goals' style = {{border: '2px solid #ec3237'}} className = 'px-5 py-3 text-white bg-orange btn d-inline-block mt-5 text-uppercase fo-s-18'>see sdg goals</a>
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
				.resize-font{
					font-size: 3rem;
				}
				@media (min-width: 760px){
					.resize-font{
						font-size: 4.5vw;
					}
				}
				.theme-thick-border-left{
					border-left: 5px solid #ec3237;
				}
				.bg_cover{
					background-size: cover;
					background-position: center;
					min-height: 400px;
					height: ${carouselWidth * .5}px;
					// max-height: calc(80vh - 80px);
					max-height: 600px;
				}
			`}</style>
		</section>
	)
}
