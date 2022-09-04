import Script from 'next/script'

import {useEffect, useState} from 'react'

import '/public/css/animate.css';
import '/public/css/bootstrap.css';
import '/public/css/common.css';
import '/public/b-icon/font/bootstrap-icons.css';
import '/public/css/globals.css'
import '/public/font-awesome/font-awesome/font-awesome.css'

import '/public/css/components/Header.css'

export default ({Component, pageProps}) => {
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(true)
    }, [])

    return (
        <>
            <Component {...pageProps} />
            <div id = '__popup' />
            <Script strategy = 'beforeInteractive' src="/js/vendor/jquery-1.12.4.min.js" />
            <Script strategy = 'beforeInteractive' src="/js/vendor/modernizr-3.7.1.min.js" />

            <Script strategy = 'beforeInteractive' src="/js/popper.min.js" />
            <Script strategy = 'beforeInteractive' src="/js/bootstrap.min.js" />

            <Script strategy = 'beforeInteractive' src="/js/plugins.js" />

            <Script strategy = 'beforeInteractive' src="/js/slick.min.js" />

            <Script strategy = 'beforeInteractive' src="/js/ajax-contact.js" />

            <Script strategy = 'beforeInteractive' src="/js/waypoints.min.js" />
            <Script strategy = 'beforeInteractive' src="/js/jquery.counterup.min.js" />

            <Script strategy = 'beforeInteractive' src="/js/jquery.magnific-popup.min.js" />

            <Script strategy = 'beforeInteractive' src="/js/jquery.easing.min.js" />
            <Script strategy = 'beforeInteractive' src="/js/scrolling-nav.js" />

            <Script strategy = 'beforeInteractive' src="/js/wow.min.js" />

            <Script strategy = 'beforeInteractive' src="/js/particles.min.js" />

            <Script strategy = 'beforeInteractive' src="/js/main.js" />
        </>
    )
}
