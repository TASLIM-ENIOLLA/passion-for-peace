import Script from 'next/script'

import {useState, createContext, useContext} from 'react'
import {SideBarContext} from '/contexts/SideBarContext'
import {useRouter} from 'next/router'
import {deadline} from '/data/deadline'

export default () => {
	const {asPath} = useRouter()
	const [sidebarState, setSidebarState] = useState(false)
	const SideBarActions = {
		visible: sidebarState,
		open: () => setSidebarState(true),
		close: () => setSidebarState(false),
		toggle: () => sidebarState ? setSidebarState(false) : setSidebarState(true)
	}

	return (
		<header className =  'bg-white shadow'>
			<div className = 'bg-orange'>
				<div className = 'container'>
					<div className = 'row'>
						<div className = 'd-none d-md-block col-md-9 ml-auto'>
							<p className = 'm-0 py-2 text-white bold text-right'>Deadline: Applications must be submitted on or before {deadline}.</p>
						</div>
					</div>
				</div>
			</div>
			<SideBarContext.Provider value = {SideBarActions}>
				<SideBar />
			</SideBarContext.Provider>
			<div className = 'container'>
				<div className = 'row py-4 j-c-space-between a-i-c'>
					<div className = 'col-auto'>
						<a href = './'><img src="./images/logo-2.svg" alt="Logo" /></a>
					</div>
					<div className = 'col-auto col-lg-d-none '>
						<button className = 'bg-clear border-0 px-3 py-0' onClick = {() => SideBarActions.open()}>
							<span className = 'bi bi-border-width fa-3x'></span>
						</button>
					</div>{
						(asPath === '/')
						? (
							<div className = 'col-auto col-lg-d-block col-d-none'>
								{/* <a className = 'page-links transit bold d-inline-block theme-color text-capitalize mx-4' href = '#home'>home</a> */}
								<a className = 'page-links transit bold d-inline-block theme-color text-capitalize mx-4' href = '#about'>about</a>
								<a className = 'page-links transit bold d-inline-block theme-color text-capitalize mx-4' href = '#how-it-works'>how it works</a>
								<a className = 'page-links transit bold d-inline-block theme-color text-capitalize mx-4' href = '#success-stories'>success stories</a>
								<a className = 'page-links transit bold d-inline-block theme-color text-capitalize mx-4' href = '#partners'>partners</a>
								<a className = 'page-links transit bold d-inline-block theme-color text-capitalize mx-4' href = './donations'>donations</a>
							</div>
						)
						: (
							<div className = 'col-auto col-lg-d-block col-d-none'>
								{/* <a className = 'page-links transit bold d-inline-block theme-color text-capitalize mx-4' href = '#home'>home</a> */}
								<a className = 'transit bold d-inline-block theme-color text-capitalize mx-4' href = './about'>about</a>
								<a className = 'transit bold d-inline-block theme-color text-capitalize mx-4' href = './how-it-works'>how it works</a>
								<a className = 'transit bold d-inline-block theme-color text-capitalize mx-4' href = './success-stories'>success stories</a>
								<a className = 'transit bold d-inline-block theme-color text-capitalize mx-4' href = './partners'>partners</a>
								<a className = 'transit bold d-inline-block theme-color text-capitalize mx-4' href = './donations'>donations</a>
							</div>
						)
					}
					<div className = 'col-auto col-lg-d-block col-d-none'>
						<a className = 'transit bold d-inline-block theme-color text-capitalize mx-4' href = './sign-in'>sign in</a>
						<a className = 'bold p-3 transit rounded-lg shadow btn d-inline-block text-white text-capitalize mx-4 apply-now-btn' href = './apply-now'>apply now</a>
					</div>
				</div>
			</div>
			<style jsx>{`
				.bg-white-lucent{
					background: rgba(255, 255, 255, .9);
				}
				.fa-3x{
					font-size: 3rem;
				}
				.h5{
					margin: 0 inherit !important;
				}
				.my-7{
					margin: 7rem 0;
				}
				.page-links{
					border-bottom: 1px dotted transparent;
				}
				.page-links:hover{
					border-bottom: 1px dotted dark;
				}
			`}</style>
			<Script strategy = 'afterInteractive' src = '/js/components/header.js' />
		</header>
	)
}

const SideBar = () => {
	const {asPath} = useRouter()
	const {close, visible} = useContext(SideBarContext)

	return (
		<section style = {{zIndex: 1000, background: 'rgba(0,0,0,.5)'}} className = {`${visible ? 'animated fadeIn' : 'd-none'} vh100 vw100 flex-h po-fixed top-0 left-0`}>
			<div className = 'h-100 p-5 flex-1' onClick = {() => close()}></div>
			<div className = {`${visible ? 'animated slideInRight' : 'd-none'} flex-1 px-4 h-100 bg-white shadow`} style = {{maxWidth: '300px', minWidth: '300px'}}>
				<div className = 'container-fluid h-100 flex-v'>
					<div className = 'row py-3 a-i-c'>
						<div className = 'col'>
							<a href = './'>
								<img src="./images/logo-2.svg" alt="Logo" />
							</a>
						</div>
						<div className = 'col-auto'>
							<button onClick = {() => close()} className = 'bg-clear border-0 px-3 py-2'>
								<span className = 'bi bi-x fa-3x'></span>
							</button>
						</div>
					</div>
					<div className = 'pt-2 overflow-y-auto flex-1'>
						{
							(asPath === '/')
							? (
								<>
									{/* <div className = 'mb-5'>
										<a onClick = {() => close()} className = 'fo-s-15 page-links transit bold d-inline-block theme-color text-capitalize' href = '#home'>home</a>
									</div> */}
									<div className = 'mb-5'>
										<a onClick = {() => close()} className = 'fo-s-15 page-links transit bold d-inline-block theme-color text-capitalize' href = '#about'>about</a>
									</div>
									<div className = 'mb-5'>
										<a onClick = {() => close()} className = 'fo-s-15 page-links transit bold d-inline-block theme-color text-capitalize' href = '#how-it-works'>how it works</a>
									</div>
									<div className = 'mb-5'>
										<a onClick = {() => close()} className = 'fo-s-15 page-links transit bold d-inline-block theme-color text-capitalize' href = '#success-stories'>success stories</a>
									</div>
									<div className = 'mb-5'>
										<a onClick = {() => close()} className = 'fo-s-15 page-links transit bold d-inline-block theme-color text-capitalize' href = '#partners'>partners</a>
									</div>
									<div className = 'mb-5'>
										<a href = './donations' className = 'fo-s-15 transit bold d-inline-block theme-color text-capitalize'>donations</a>
									</div>
								</>
							)
							: (
								<>
									{/* <div className = 'mb-5'>
										<a className = 'fo-s-15 page-links transit bold d-inline-block theme-color text-capitalize' href = './home'>home</a>
									</div> */}
									<div className = 'mb-5'>
										<a className = 'fo-s-15 transit bold d-inline-block theme-color text-capitalize' href = './about'>about</a>
									</div>
									<div className = 'mb-5'>
										<a className = 'fo-s-15 transit bold d-inline-block theme-color text-capitalize' href = './how-it-works'>how it works</a>
									</div>
									<div className = 'mb-5'>
										<a className = 'fo-s-15 transit bold d-inline-block theme-color text-capitalize' href = './success-stories'>success stories</a>
									</div>
									<div className = 'mb-5'>
										<a className = 'fo-s-15 transit bold d-inline-block theme-color text-capitalize' href = './partners'>partners</a>
									</div>
									<div className = 'mb-5'>
										<a href = './donations' className = 'fo-s-15 transit bold d-inline-block theme-color text-capitalize'>donations</a>
									</div>
								</>
							)
						}
						<div className="pt-5">
							<div className = 'mb-5'>
								<a href = './sign-in' className = 'fo-s-15 transit bold d-inline-block theme-color text-capitalize'>sign in</a>
							</div>
							<div className="mb-5">
								<a className = 'bold p-3 transit rounded-lg shadow btn text-white text-capitalize d-block w-100 fo-s-15 apply-now-btn' href = './apply-now'>apply now</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<style>{`
				.apply-now-btn{
					transition: all .5s ease !important;
					background-image: linear-gradient(45deg, #fe8464 0%, #fe6e9a 50%, #fe8464 100%);
				}
				.apply-now-btn:hover{
					background-image: linear-gradient(135deg, #fe6e9a 0%, #fe8464 50%, #fe6e9a 100%);
				}
			`}</style>
		</section>
	)
}
