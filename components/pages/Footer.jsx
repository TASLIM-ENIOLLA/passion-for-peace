import Script from 'next/script'
import {useState} from 'react'
import {Button} from '/components/form'
import {notify} from '/components/popups'
import {parseObjectToFormData} from '/functions'
import {api_routes} from '/config'

const SubscribeForNewsletter = (formData) =>
fetch(api_routes.newsletter, {
	method: 'POST',
	body: parseObjectToFormData(formData)
})
.then(res => res.json())

const Newsletter = () => {
	const [email, setEmail] = useState('')
	const [subscribed, setSubscribed] = useState(false)

	if(subscribed){
		return (
			<div className = 'row a-i-c px-4 py-5 bg-white rounded-1x shadow'>
				<div className = 'col my-3'>
					<h2 className = 'bold text-capitalize theme-color'>you have subscribed to our newsletter</h2>
					<h5 className = 'text-capitalize'>you will now get regular updates</h5>
				</div>
				<div className = 'col-auto'>
					<span className = 'bi bi-check-circle-fill text-success fa-2x'></span>
				</div>
			</div>
		)
	}
	else{
		return (
			<div className = 'row a-i-c px-4 py-5 bg-white rounded-1x shadow'>
				<div className = 'col-lg-6 my-3'>
					<h2 className = 'bold text-capitalize'>subscribe to our newsletter</h2>
					<h5 className = 'text-capitalize'>get regular updates</h5>
				</div>
				<div className = 'col-lg-6 my-3'>
					<form onSubmit = {(e) => e.preventDefault()} className = 'flex-h a-i-c border shadow rounded-1x overflow-0'>
						<div className = 'flex-1'>
							<input type = 'email' name = 'email' value = {email} onChange = {(e) => setEmail(e.target.value)} className = 'p-4 d-block w-100 bg-clear bold border-0' placeholder = 'Enter email address' />
						</div>
						<div>
							<Button style = {{backgroundImage: `linear-gradient(45deg, #fe8464 0%, #fe6e9a 50%, #fe8464 100%)`}} onClick = {() => SubscribeForNewsletter({email}).then(
								({type, data}) => notify({
									type: type === 'success' ? type : 'danger',
									message: data,
									onSucceed: () => (
										setEmail(''),
										setSubscribed(true)
									)
								})
							)} className = 'p-4 bold text-white apply-now-btn border-0' id = 'subscribeButton'>Subscribe</Button>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default () => {
	return (
		<footer className = 'footer-bg pt-10'>
			<div className = 'container px-5 mb-5'>
				<div className = 'row'>
					<div className = 'col-12'>
						<Newsletter />
					</div>
				</div>
			</div>
			<div className = 'container pt-5'>
				<div className = 'row'>
					<div className = 'col-12 mb-5'>
						<img className = 'd-block mb-5' width = '120' src = '/images/logo.svg' />
						<p className = 'text-capitalize bold mb-5 text-white col-lg-6 col-md-7 px-0'>
							Lorem ipsum dolor sit amet consetetur sadipscing elitr, sederfs diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
						</p>
						<div className = 'row'>
							<div className = 'col-auto text-center'>
								<span className = 'bi bi-facebook fa-2x text-white'></span>
							</div>
							<div className = 'col-auto text-center'>
								<span className = 'bi bi-twitter fa-2x text-white'></span>
							</div>
							<div className = 'col-auto text-center'>
								<span className = 'bi bi-twitch fa-2x text-white'></span>
							</div>
							<div className = 'col-auto text-center'>
								<span className = 'bi bi-vimeo fa-2x text-white'></span>
							</div>
						</div>
					</div>
					<div className = 'col-12 col-sm-6 col-lg-3 mb-5'>
						<h3 className = 'text-capitalize bold mb-5 text-white'>Who we are</h3>
						<div className = 'pt-2'>
							<div className = 'mb-4'>
								<a className = 'transit bold d-inline-block text-white text-capitalize'>member countries</a>
							</div>
							<div className = 'mb-4'>
								<a className = 'transit bold d-inline-block text-white text-capitalize'>board of executive directors</a>
							</div>
							<div className = 'mb-4'>
								<a className = 'transit bold d-inline-block text-white text-capitalize'>president</a>
							</div>
						</div>
					</div>
					<div className = 'col-12 col-sm-6 col-lg-3 mb-5'>
						<h3 className = 'text-capitalize bold mb-5 text-white'>what we do</h3>
						<div className = 'pt-2'>
							<div className = 'mb-4'>
								<a className = 'transit bold d-inline-block text-white bold text-capitalize'>sustainable developement goals</a>
								<div className = 'ml-4 mt-3'>
									<li className = 'text-white bold text-capitalize'>Youth developement program</li>
								</div>
							</div>
							<div className = 'mb-4'>
								<a className = 'transit bold d-inline-block text-white bold text-capitalize'>investor relations</a>
							</div>
							<div className = 'mb-4'>
								<a className = 'transit bold d-inline-block text-white bold text-capitalize'>career</a>
							</div>
						</div>
					</div>
					<div className = 'col-12 col-sm-6 col-lg-3 mb-5'>
						<h3 className = 'text-capitalize bold mb-5 text-white'>quick link</h3>
						<div className = 'pt-2'>
							<div className = 'mb-4'>
								<a className = 'page-links transit bold d-inline-block text-white text-capitalize' href = './home'>home</a>
							</div>
							<div className = 'mb-4'>
								<a className = 'page-links transit bold d-inline-block text-white text-capitalize' href = './about'>about</a>
							</div>
							<div className = 'mb-4'>
								<a className = 'page-links transit bold d-inline-block text-white text-capitalize' href = './how-it-works'>how it works</a>
							</div>
							<div className = 'mb-4'>
								<a className = 'page-links transit bold d-inline-block text-white text-capitalize' href = './success-stories'>success stories</a>
							</div>
							<div className = 'mb-4'>
								<a className = 'page-links transit bold d-inline-block text-white text-capitalize' href = './partners'>partners</a>
							</div>
							<div className = 'mb-4'>
								<a className = 'page-links transit bold d-inline-block text-white text-capitalize' href = './donations'>donations</a>
							</div>
						</div>
					</div>
					<div className = 'col-12 col-sm-6 col-lg-3 mb-5'>
						<h3 className = 'text-capitalize bold mb-5 text-white'>contact us</h3>
						<div className = 'pt-2'>
							<div className = 'mb-4'>
								<a className = 'page-links transit bold d-inline-block text-white bold' href = 'tel://+234-512-3567-984'>+234-512-3567-984</a>
							</div>
							<div className = 'mb-4'>
								<a className = 'page-links transit bold d-inline-block text-white bold' href = 'mailto://info@pop.com'>info@pop.com</a>
							</div>
							<div className = 'mb-4'>
								<a className = 'page-links transit bold d-inline-block text-white bold' href = 'http://www.passion-for-peace.com'>www.passion-for-peace.com</a>
							</div>
							<div className = 'mb-4'>
								<address className = 'page-links transit bold d-inline-block text-white text-capitalize bold'>123 Street New York City, United States Of America 750.</address>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className = 'container pt-5'>
				<hr className = 'border border-white' />
				<div className = 'text-capitalize m-0 pb-5 pt-4 text-white'>
					<span className = 'd-block bold'>copyright &copy; {new Date().getFullYear()} all rights reserved. Powered by Passion for Peace Initiative.</span>
				</div>
			</div>
			<style jsx>{`
				.pt-10{
					padding-top: 10rem;
				}
				.fa-2x{
					font-size: 2rem;
				}
				.apply-now-btn{
					transition: all .5s ease !important;
					background-image: linear-gradient(45deg, #fe8464 0%, #fe6e9a 50%, #fe8464 100%);
				}
				.apply-now-btn:hover{
					background-image: linear-gradient(135deg, #fe6e9a 0%, #fe8464 50%, #fe6e9a 100%);
				}
				.footer-bg{
					background: url(../images/footer-bg.svg), url(../images/about-shape-1.svg);
					background-position: center;
					background-size: cover;
				}
			`}</style>
			<Script strategy = 'beforeInteractive' src = '/js/components/header.js' />
		</footer>
	)
}
