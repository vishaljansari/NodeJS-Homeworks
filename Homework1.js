

console.log('Question 1')
const reverseWord = (str) => {
	let value = ''
	for (let i = str.length - 1; i >= 0; i--)

		value = value + str[i]

	return value
}
console.log(reverseWord('hello'))
console.log(reverseWord('world'))

console.log()

console.log('Question 2')
const replaceVowels = (str) => {
	let value = ' '
	for(let i= 0 ; i < str.length ; i++)

	{ 

		if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' || str[i] == 'A' || str[i] == 'E' || str[i] == 'I' || str[i] == 'O' || str[i] == 'U')
		{

			value = value + "*"
		}
		else 
		{
			value = value + str[i]
		}

	}
	return value
}

console.log(replaceVowels('javascript'))
console.log(replaceVowels('angular'))

console.log()

console.log('Question 3')
const countLetters = (array) => {
	
	let alpha = []

	for(let i= 0 ; i <= array.length - 1 ; i++)
	{
		if (alpha[array[i]]) {

			alpha[array[i]]++
			
		} else {
			alpha[array[i]] = 1
		}
	}
	return alpha
}

console.log(countLetters(['z', 'y', 'x', 'x', 'w', 'z', 'y', 'u', 'y', 'y']))

console.log()

console.log('Question 4')
const oddsAndEvens = (alpha) => {

	let odd = []
	let even = []
	let value = ''
	for (let i = 0 ; i< alpha.length ; i++)
	{
		if(alpha[i] % 2 === 0)
		{
			even.push(alpha[i])
		}
		else
		{
			odd.push(alpha[i])
		}
	}

	
	value = "Odds = [" + odd + "]\n" + "Evens = [" + even + "]"
	return value

}



console.log(oddsAndEvens([ 21, 99, 43, 1, 8, 2, 48, 82 ]))

console.log()

console.log('Question 5')

const averageArray = (array) => {
	let average = 0
	let total = 0
	let count = 0

	for(let i=0 ; i <= array.length ; i++ )
	{

		if(isFinite(array[i]))
		{
			total = total + parseInt(array[i])
			count++		 
		}	
	}
	average = total / count
	return average
}

console.log(averageArray([3, 9, 'hello', 4, '95', 'abc', '1', 8, { key: 'value ' }]))

console.log()

console.log('Question 6')

const cars = [
{ type: 'hybrid', wholesale: 25000 },
{ type: 'minivan', wholesale: 28000 },
{ type: 'sedan', wholesale: 31500 },
{ type: 'convertible', wholesale: 45750 }
]

const markupValue = (car,n) => {
	let alpha = {}
	let sum = 0
	let total = 0 

	for (let i = 0; i < car.length; i++)
	{
		let x = (car[i].wholesale * (n / 100))     
		sum += x   

		let y = x + car[i].wholesale  

		alpha[car[i].type] = y

	}  
	alpha['Total'] = sum
	return alpha
}

console.log(markupValue(cars,10.5))
