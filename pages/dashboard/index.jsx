import {useState, useEffect} from 'react'

import Template from '/components/dashboard/Template'
import {ApplicationStatus} from '/components/dashboard'
import {api_routes, cookie_name} from '/config'
import {decryptString, parseObjectToFormData} from '/functions'

export default ({user_data}) => {
    const [userData, setUserData] = useState()

    useEffect(async () => {
        const req = await fetch(api_routes.dashboard.get_user_data, {method: 'POST', body: parseObjectToFormData(user_data)})
        const {data} = await req.json()

        setUserData(data)
    }, [])

    if(!userData){
        return (<Template></Template>)
    }

	return (
		<Template>
            <ApplicationStatus status = {userData.status} />
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
            user_data: JSON.parse(decryptString(cookies[cookie_name]))
        }
    }
}

/*

6 Critical Questions Your Business Plan Must Answer
By Larry Alton March 18, 2015
Opinions expressed by Entrepreneur contributors are their own.
Never underestimate the importance of your business plan. It is the backbone of your company, a foundational pillar from which your enterprise will be built. It’s going to serve as the first impression for countless potential partners and investors, and it’s going to serve as a roadmap for your whole business -- at least for the first several years.

Startup Stock
In some ways, writing a business plan is easy -- there are no rules or requirements for length, format, presentation, or even subject matter. But finding the right answers to the right questions is critical if you want to lay the groundwork for a stable business and attract sufficient attention from investors.

Related: 25 Common Characteristics of Successful Entrepreneurs

1. What need are you addressing?
This is an important question because it extends beyond the simple “What does your business do?” It’s one thing to outline your business in general, describing what products you make or what services you offer, but if you want a solid business plan you have to take it to the next level.

It’s nice to imagine your business as providing something useful, and if you’re excited about the idea, it’s that much easier to think about people buying it. But you need to be logical and critical when you consider the driving force behind your customers’ purchasing decisions: what fundamental customer need is your business addressing? You’ll want to back this up with research that shows the need actually exists.

2. What makes you different?
It’s a big world out there, and startups are constantly coming on and off the radar. Chances are, there are multiple businesses out there who are already serving the crucial need you outlined from question one. That doesn’t mean you can’t serve it better, or serve it in a different way, but therein lies the challenge—figuring out what makes you different.

First, you’ll need to acknowledge all the major players in your space, and this is going to require some research. Acknowledge what they’re doing right, what they’re doing wrong, and how they’re going about their business. Identify the differentiating factor that will allow you to stand out, and emphasize it.

Related: Struggling to Define Your Business Goals? Ask Yourself These Questions.

3. Who is your audience?
Here’s a hint: the answer can’t be “everybody.” No matter how useful or practical your product or service is, there’s no way you’re going to be able to sell to everyone in the world. Think about factors like age, sex, education, geographic location, working status, marital status, and perform some preliminary market research to determine the best path forward.

Your key demographic may evolve over time, so don’t stay too committed to one niche. Also remember, that it’s easy to expand to other markets once you’ve established yourself in one, so if you have multiple key demographics, it may be wise to focus on one to start things off.

4. How is your business going to make money?
This seems like an obvious question to answer, but you’d be surprised how many entrepreneurs fail to elaborate on their plan. The brief answer to this question is “sell products/services,” but how are you going to sell? Where are you going to sell? How much are you going to sell for?

The other side of the question is what are your operating expenses? Who are you going to pay? What services or partners will you need to pay for? And ultimately, will the amount you sell be able to surpass the amount you owe? When will you break even?

5. How will you promote your business?
Promoting your business is just as important as creating it. Otherwise, people will never know who you are. Your marketing strategy should start off based on what similar businesses before you have done. Do they rely on traditional advertising or online marketing? Do they attend tradeshows and local events, or use technology to spread the word about their existence?

Related: The Ultimate Guide to Writing a Business Plan

6. What do you need to get started?
For many potential partners and investors, this is the bottom line. All businesses have to start somewhere, but that starting line varies dramatically from industry to industry and from entrepreneur to entrepreneur. Do you need any advanced equipment? Who will you need to hire? How much will you need for an initial run? These questions should give you an idea exactly how much capital and what resources you need initially.

It may seem counterintuitive, but answering these questions isn’t a one-time process. Your business plan should be a living, changing document that evolves along with your company. Throughout your course of entrepreneurship, you’re going to encounter new challenges, new opportunities, and hundreds of factors you never considered as significant to your business when you were writing the initial plan. To survive, you’re going to have to revise your answers to these questions and update your business plan accordingly.



*/