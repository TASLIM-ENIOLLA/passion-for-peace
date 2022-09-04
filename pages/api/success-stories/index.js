import {SuccessStories} from '/data/SuccessStories'

export default (req, res) => {
	const {query: {count}} = req

	if(count && parseInt(count)){
		SuccessStories.length = count
		res.status(200).json({type: 'success', data: SuccessStories})
	}
	else{
		res.status(200).json({type: 'success', data: SuccessStories})
	}
}
