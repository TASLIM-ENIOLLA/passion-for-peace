import Script from 'next/script'

import {useState, createContext, useContext} from 'react'
import {SideBarContext} from '/contexts/SideBarContext'
import {useRouter} from 'next/router'
import {deadline} from '/data/deadline'
import {URL} from '/data/URL'

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
		<>
			<section className = 'bg-orange'>
				<div className = 'container'>
					<div className = 'row'>
						<div className = 'col-md-9 ml-auto'>
							<p className = 'm-0 py-2 text-white bold text-md-right'>Deadline: Applications must be submitted on or before {deadline}.</p>
						</div>
					</div>
				</div>
			</section>
			<header className = 'bg-white shadow po-sticky top-0 left-0' style = {{zIndex: 10000000}}>
				<SideBarContext.Provider value = {SideBarActions}>
					<SideBar />
				</SideBarContext.Provider>
				<div className = 'container'>
					<div className = 'row py-4 j-c-space-between a-i-c'>
						<div className = 'col-auto'>
							<a href = './'><img src="./images/ppigrant.png" width = '140' alt="Logo" /></a>
						</div>
						<div className = 'col-auto d-xl-none'>
							<button className = 'bg-clear border-0 px-3 py-0' onClick = {() => SideBarActions.open()}>
								<span className = 'bi bi-border-width fa-3x'></span>
							</button>
						</div>{
							(asPath === '/')
							? (
								<div className = 'col-auto d-xl-block d-none'>{
									URL.website.map(({name, ref}) => (
										<a key = {ref} className = {`page-links transit bold d-inline-block ${new RegExp(ref).test(asPath) ? 'text-orange border-thick-bottom' : 'theme-color'} text-capitalize mx-4`} href = {`#${ref}`}>{name}</a>
									))
								}</div>
							)
							: (
								<div className = 'col-auto d-xl-block d-none'>{
									URL.website.map(({name, ref}) => (
										<a key = {ref} className = {`transit bold d-inline-block ${new RegExp(ref).test(asPath) ? 'text-orange border-thick-bottom' : 'theme-color'} text-capitalize mx-4`} href = {`./${ref}`}>{name}</a>
									))
								}</div>
							)
						}
						<div className = 'col-auto d-xl-block d-none'>
							<a className = 'transit bold d-inline-block theme-color text-capitalize mx-3' href = './sign-in'>sign in</a>
							<a className = 'bold p-3 transit rounded-lg shadow btn d-inline-block text-white text-capitalize mx-3 apply-now-btn' href = './apply-for-grant'>apply for grant</a>
						</div>
					</div>
				</div>
				<Script strategy = 'afterInteractive' src = '/js/components/header.js' />
			</header>
		</>
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
								<img src="./images/ppigrant.png" width = '130' alt="Logo" />
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
							? URL.website.map(({name, ref}) => (
								<div key = {ref} className = 'mb-5'>
									<a onClick = {() => close()} className = {`fo-s-15 page-links transit bold d-inline-block text-capitalize ${new RegExp(ref).test(asPath) ? 'text-orange mobile-border-thick-bottom' : 'theme-color'}`} href = {`#${ref}`}>{name}</a>
								</div>
							))
							: URL.website.map(({name, ref}) => (
								<div key = {ref} className = 'mb-5'>
									<a className = {`fo-s-15 transit bold d-inline-block theme-color text-capitalize ${new RegExp(ref).test(asPath) ? 'text-orange mobile-border-thick-bottom' : 'theme-color'}`} href = {`./${ref}`}>{name}</a>
								</div>
							))
						}
						<div className="pt-5">
							<div className = 'mb-5'>
								<a href = './sign-in' className = 'fo-s-15 transit bold d-inline-block theme-color text-capitalize'>sign in</a>
							</div>
							<div className="mb-5">
								<a className = 'bold p-3 transit rounded-lg shadow btn text-white text-capitalize d-block w-100 fo-s-15 apply-now-btn' href = './apply-for-grant'>apply for grant</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
