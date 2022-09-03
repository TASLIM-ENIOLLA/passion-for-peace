import countries from '/data/json/countries'

export default (req, res) => {
	res.status(200).json({type: 'success', data: countries})
}