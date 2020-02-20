function generateString(chars){
	
	resultSet = []
	
	function getString(charsPool, prefix){
		if(charsPool.length == 1){
			let word = prefix + charsPool[0]
			if( !resultSet.includes(word)){
				resultSet.push( prefix + charsPool[0])
			}
		} else {
			for (let i = 0; i < charsPool.length; i++){
				let currentChar = charsPool.splice(i,1)[0]
				getString(charsPool, prefix + currentChar);
				charsPool.splice(i,0,currentChar)
			}
		}
	}
	
	getString(chars.split(''), '')
	console.log(resultSet.join(', '))
}

generateString('ABC')
generateString('112')
generateString('AB')
