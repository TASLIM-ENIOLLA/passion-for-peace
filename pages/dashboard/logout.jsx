import Template from '/components/dashboard/Template'
import {cookieStore, decryptString} from '/functions'
import {cookie_name} from '/config'
import {useRouter} from 'next/router'

export default () => {
	const {back: goBack} = useRouter()

	return (
		<Template>
			<div className = 'container-fluid'>
				<div className = 'row'>
					<div className = 'bg-white pt-5 pb-4 mb-5 fo-s-15 px-3 col-12 rounded-1x border shadow-sm'>
						<div className = 'col-12 mb-2'>
							<div className = 'text-capitalize bold letter-spacing-1 mb-2'>logout</div>
							<p className = 'mb-4 text-muted'>All progress has been saved. No data will be lost!</p>
						</div>
						<div className = 'flex-h a-i-c flex-wrap'>
							<div className = 'col-auto mb-4'>
								<input onClick = {() => cookieStore.setCookie({
									name: cookie_name,
									value: undefined,
									expires: new Date().getTime() - (3600 * 24 * 30 * 1000),
									path: '/'
								}).then(() => window.location = '/sign-in')} type = 'button' className = 'py-3 rounded-lg text-white bold shadow-sm px-5 btn-danger border text-capitalize' defaultValue = 'logout' />
							</div>
							<div className = 'col-auto mb-4'>
								<input onClick = {() => goBack()} type = 'button' className = 'py-3 rounded-lg text-danger bold px-5 bg-clear border text-capitalize' defaultValue = 'cancel' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Template>
	)
}

export const getServerSideProps = (context) => {
    const {req: {cookies}} = context

    if(!cookies[cookie_name]){
        return {
            redirect: {
                destination: '/sign-in'
            }
        }
    }

    return {
		props: {
			userData: JSON.parse(decryptString(cookies[cookie_name]))
		}
	}
}