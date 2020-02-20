function groupSimilarWords(words){
	
	function sortChar(item){
		return item.split('').sort().join('')
	}

	group = {}

	words.forEach( (item) => {
		let sortedChar = sortChar(item)
		if ( ! group[sortedChar] ) {
			group[sortedChar] = []
		}
		group[sortedChar].push(item)
	})
	let groupCount = 1
	for ( key in group) {
		console.log( groupCount++ + ". " + group[key].join(' - '))
	}
}

let words = ['VMRCO','VORCM','MCRTOX','ZXTAC','XZATC','XMTCOR','OXVS','AZTXC','VXOS','RZAT','MRCOTX','SVXO','TRAZ','ZTAR','MVOCR']
groupSimilarWords(words)