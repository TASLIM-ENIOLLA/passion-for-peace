document.querySelectorAll('.page-navs').forEach(each => each.addEventListener(
    'click',
    (e) => {
        e.preventDefault()

        if(document.querySelector(e.target.hash)){
            document.querySelector(e.target.hash).scrollIntoView({behavior: 'smooth'})
        }
    }
))
