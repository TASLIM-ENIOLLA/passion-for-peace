import sectors from '/data/json/business-sectors'

export default (req, res) => {
	const {query: {business_sector_id}} = req

	res.status(200).json({
        type: 'success',
        data: sectors.filter(each => each.id === String(business_sector_id))[0] || {}
    })
}
