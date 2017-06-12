
console.log('Question 1')
const reverseWord = (str) => {


	let value = str.split('')

	let rev_value = value.reverse();

	let concate = rev_value.join('')

	return concate
}

console.log(reverseWord('hello'))
console.log(reverseWord('world'))


console.log()


console.log('Question 2')

const replaceVowels = (str) => {

	let value = str.toLowerCase()

	let updted_value = value.replace(/[aeiou]/gi,'*') 

	return updted_value
}

console.log(replaceVowels('javascript'))
console.log(replaceVowels('angular'))



console.log()

console.log('Question 3')
class Calculator {

	constructor(value = 0) {

		this.value = value
	}

	multiply(m) {
		this.value = this.value*m

		return this
	}

	add(a) {

		this.value = this.value+a
		return this
	}

	divide(d) {

		this.value = this.value/d
		return this
	}

	substract(s) {

		this.value = this.value-s
		return this
	}

	get print() {
		console.log(this.value)
		return this
	}

	clear() {

		this.value = 0
		return this
	}
}

const calculator_v1 = new Calculator(2)
calculator_v1
.multiply(3)
.add(10)
.divide(2)
.substract(4)
.print 
.clear()
.print 



const calculator_v2 = new Calculator()
calculator_v2
.multiply(3)
.add(10)
.divide(2)
.substract(4)
.print 
.clear()
.print 


console.log()


console.log('Question 4')
const media_arr = [['media', 'facebook'], ['company', 'github'], ['likes', 58445]]

const convertToObject = (media_arr) => {

	const value = {}
	media_arr.forEach(function(entry) {
		value[entry[0]] = entry[1]
	})
	console.log( value)

}
convertToObject(media_arr)


console.log()


console.log('Question 5')
const convertToArray = (media_obj) => {

	const value = Object.entries(media_obj)

	return value
}

const media_obj = { media: 'facebook', company: 'github', likes: 58445 }

console.log(convertToArray(media_obj))




