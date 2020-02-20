function isPalindrome(word){
	let evenLength = word.length % 2 == 0
	let palindromLength = (evenLength?word.length: word.length - 1) / 2
	if (word.slice( 0 , palindromLength).toLowerCase() != word.slice(evenLength? palindromLength : palindromLength + 1).split('').reverse().join('').toLowerCase())
	{
		return false
	}
	return true
}
let word = 'Deleveled' 
console.log( word , isPalindrome(word) )