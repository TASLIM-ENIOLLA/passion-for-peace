import countries from '/data/json/countries'

export default (req, res) => {
	const {query: {country_code}} = req
	res.status(200).json({type: 'success', data: [...countries].filter(each => each.code === String(country_code).toUpperCase())[0] || {}})
}