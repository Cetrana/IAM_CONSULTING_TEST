function NPowerSum(n){
	let sum = 0
	for( let i =  1; i <= n; i++){
		sum += Math.pow(i,i)
	}
	return sum
}

console.log(NPowerSum(2))
console.log(NPowerSum(3))