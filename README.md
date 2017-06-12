# NodeJS-Homeworks

HOMEWORK-1

Complete all the problems below.

Output your answers to the console using this format.
      Question 1
      olleh
      dlrow
      
      Question 2
      j*v*scr*pt
      *ng*l*r
      
      .. etc
Use ES6 syntax as much as possible. Make sure you are using let/const properly. Absoultely NO use of var.

Use proper indentation or formatting. Incorrect formatting/indentation will lose some points.

Do NOT use any Array or Object methods (ex. Array.reverse(), Object.keys(), etc)

1. Write a function that takes a string and reverses it. (15 pts)

reverseWord('hello') // olleh
reverseWord('world') // dlrow
2. Write a function that takes a string and replaces all the vowels (a, e, i, o, u) with * (15 pts)

replaceVowels('javascript') // j*v*scr*pt
replaceVowels('angular')    // *ng*l*r
3. Write a function that finds letters in the array and outputs their occurances as an object. The key is the letter and the count is the value. (15 pts)

countLetters(['z', 'y', 'x', 'x', 'w', 'z', 'y', 'u', 'y', 'y'])
// { z: 2, y: 4, x: 2, w: 1, u: 1 }
4. Write a function that creates two new arrays odds and evens. (15 pts)

oddsAndEvens([ 21, 99, 43, 1, 8, 2, 48, 82 ])
// odds = [ 21, 99, 43, 1 ]
// evens = [ 8, 2, 48, 82 ]
5. Write a function that averages all the numbers including string value numbers in an array. Using the parseInt() method is allowed. (15 pts)

averageArray([3, 9, 'hello', 4, '95', 'abc', '1', 8, { key: 'value ' }])
// 20
6. Write a function that takes an array of cars and a markup percent. Return an object which contains the total markup of all cars and an array of cars with their name as the key and the value as the calculated markup. Using the push() method is allowed. (25 pts)

const cars = [
  { type: 'hybrid', wholesale: 25000 },
  { type: 'minivan', wholesale: 28000 },
  { type: 'sedan', wholesale: 31500 },
  { type: 'convertible', wholesale: 45750 }
]
markupValue(cars, 10.5)

//
{ cars:
   [ { hybrid: 27625 },
     { minivan: 30940 },
     { sedan: 34807.5 },
     { convertible: 50553.75 } ],
  total: 13676.25 }
  
  ---------------------------------------------------------------------------------------------------------
  HOMEWORK-2
  
  Complete all the problems below. 100 Points total. (20 pts each)

Output your answers to the console using this format.
      Question 1
      olleh
      dlrow

      Question 2
      j*v*scr*pt
      *ng*l*r

      .. etc
Use ES6 syntax. Make sure you are using let/const properly. Use string, object and array methods.

Absoultely NO use of var. Do not use a standard for loop ex: (for (let i = 0; i < arr.length; i++))

Use proper indentation or formatting. Incorrect formatting/indentation will lose some points.

1. Write a function that takes a string and reverses it. *Use only string or array methods.

reverseWord('hello') // olleh
reverseWord('world') // dlrow
2. Write a function that takes a string and replaces all the vowels (a, e, i, o, u) with *Use only string or array methods.

replaceVowels('javascript') // j*v*scr*pt
replaceVowels('angular')    // *ng*l*r
3. Write a Calculator Class

The class should optionally accept a number when instantiated. Use default values where applicable.

The class should have the following methods:

add(): adds a number to the total 
subtract(): subtracts a number from the total 
multiply(): multiplys the total by a number 
divide(): divides the total by a number 
clear(): clears the total 
print: prints the total
      const calculator_v1 = new Calculator(2)
      calculator_v1
            .multiply(3)
            .add(10)
            .divide(2)
            .substract(4)
            .print // 4
            .clear()
            .print // 0

      const calculator_v2 = new Calculator()
      calculator_v2
            .multiply(3)
            .add(10)
            .divide(2)
            .substract(4)
            .print // 1
            .clear()
            .print // 0
4. Write a Function that takes a 2D array and converts it to an object. Each item in the array contains an array of only 2 items - the first item is the key and the second is the value

const media_arr = [['media', 'facebook'], ['company', 'github'], ['likes', 58445]]
convertToObject(media_arr)
// { media: 'facebook', company: 'github', likes: 58445 }
5. Write a Function that takes an object and converts it to a 2D array. Each key, value pair in the object should be added to an array - the first item is the key and the second is the value. *Use object and array methods.

const media_obj = { media: 'facebook', company: 'github', likes: 58445 }
convertToArray(media_obj)
// [['media', 'facebook'], ['company', 'github'], ['likes', 58445]]

-------------------------------------------------------------------------------------------------------------------

HOMEWORK-3

Complete all the problems below.

Use ES6 syntax. Make sure you are using let/const properly. Absoultely NO use of var.

Use proper indentation or formatting.

1. Write a function that counts down from 5. Call this funciton only once. It should then the countdown from 5 to 1 and print each number to the console. (30 pts)

countDown(5)
// 5
// 4
// 3
// 2
// 1
2. Write a function that evaluates a letter using Promises. If the letter is lowercase then it resolves. If the letter is uppercase then it rejects. Write another function that takes an array of letters as an argument and uses your Promise function and is able to print the results. (35 pts)

-- If a letter is lowercase it should print: 'this letter was resolved: b' 
-- If a letter was uppercase it should print: 'this letter was rejected: A'

*DO NOT write 26 'if' or 'switch' statements. 
*Meaning NO: if (letter === 'A' || letter === 'B' ... || letter === 'Z')

    const letters = ['A', 'b', 'c', 'D', 'e']
    sortLetters(letters)
    // this letter was rejected: A
    // this letter was resolved: b
3. Write a series of functions that utilize callbacks to determine a word is a palidrome. Each function should call the next in the series. (35 pts)

-- print(): prints the answer to the console. 
-- reverseWord(): reverses the word 
-- compare(): compares the reversed word to the original 

    print('kayak') // true
    print('canoe') // false
Extra Credit. Write a function that is able to call each of the functions in Q1-Q3 and print the answers in order. Hint: You will need to use promises or callbacks in all the previous homework functions in order to achieve this. (15 pts)

*Do not use setTimeout() or setInterval() as a solution for the extra credit. NO credit for setTimeout or setInterval.
