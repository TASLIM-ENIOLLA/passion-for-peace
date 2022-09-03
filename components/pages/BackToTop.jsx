import {useContext} from 'react'
import {NavsContext} from '../../contexts/NavsContext'

export default () => {
	const {home} = useContext(NavsContext)
	
	return (
		<section className = 'po-abs right-0 bottom-0'>
            <section className = 'container-fluid'>
              	<div className = 'row'>
                	<div className = 'col-auto p-4'>
                  		<button onClick = {() => {
		                	home.current.scrollIntoView({behavior: 'smooth'})
		                }} className = 'border-0 bg-clear p-0 outline-0' title = 'Scroll to top!'>
                  			<span className = 'bi bi-arrow-up-square-fill fa-3x text-dark'></span>
                  		</button>
                	</div>
              	</div>
            </section>
        </section>
	)
}