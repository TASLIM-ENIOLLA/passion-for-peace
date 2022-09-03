import sectors from '/data/json/business-sectors'

export default (req, res) => {
	res.status(200).json({
		"type": "success",
		"data": sectors
	})
}
