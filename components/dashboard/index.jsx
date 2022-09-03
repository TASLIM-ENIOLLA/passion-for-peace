export const ApplicationStatus = ({status}) => (
    (Number(status) === 0)
    ? (
        <div className = 'container-fluid'>
            <div className = 'row'>
                <div style = {{background: '#f3d21633'}} className = 'py-5 mb-5 fo-s-15 px-3 col-12 rounded-1x shadow-sm'>
                    <div className = 'col-12 mb-2'>
                        <div className = 'text-capitalize bold letter-spacing-1 mb-2'>Complete application</div>
                        <p className = 'mb-4 text-muted'>You have to complete application to have a chance at securing the grant.</p>
                    </div>
                    <div className = 'col-auto'>
                        <a href = '/dashboard/complete-application' className = 'py-3 rounded-lg text-dark bold px-5 btn-warning btn border-0 text-capitalize'>proceed to application page</a>
                    </div>
                </div>
            </div>
        </div>
    )
    : (
        <div className = 'container-fluid'>
            <div className = 'row'>
                <div style = {{background: '#09cf8333'}} className = 'py-5 mb-5 fo-s-15 px-3 col-12 rounded-1x shadow-sm'>
                    <div className = 'col-12 mb-2'>
                        <div className = 'text-capitalize bold letter-spacing-1 mb-2'>application completed</div>
                        <p className = 'mb-4 text-muted'>You have successfully completed application. You now have a chance at securing the grant.</p>
                    </div>
                    <div className = 'col-auto'>
                        <button type = 'button' className = 'py-3 rounded-lg text-white bold px-5 btn-success btn border-0 text-capitalize'>download business plan</button>
                    </div>
                </div>
            </div>
        </div>
    )
)