

const countDown = (number, callback) => {
    setInterval(() => {

        if(number === 0)
        {
            clearInterval(countDown)
        }
        else
        {
            console.log(number)
            number--
        }
 
    },700)
    console.log('Question 1')
}

countDown(5)




const letters = ['A', 'b', 'c', 'D', 'e']

const checkLetters = (letters) => {
    return new Promise((resolve, reject) => {
        for(let i= 0 ; i< letters.length ; i++)
        {

           if(letters[i].toLowerCase() === letters[i])
           {
               resolve(`this letter was resolved : ${letters[i]}`)
           }   
           else if(letters[i].toUpperCase() === letters[i])
           {
               reject(`this letter was rejected : ${letters[i]}`)
           }
           
       }
       return ' '
   })
}

const sortLetters = (letters) => {
    const promises = letters.map((n) => {
        return checkLetters(n).catch((err) => {
            return err
        })
    })

    Promise.all(promises)
    .then((value) => {
    	console.log()
        console.log('Question 2')

        for(let j = 0 ; j < value.length ; j++)
        {
            console.log(value[j])
        }
    })


}

setTimeout(() => {
   sortLetters(letters)
}, 5300)



const reverseWord = (str, callback) => {
    setTimeout(() => {

        const value = str.split('')

        const rev_value = value.reverse();

		const concate = rev_value.join('')

        callback(concate)
    })
}


const compare = (value, callback) => {
    reverseWord(value, (compare) => {


        if(value === compare)
        {
            console.log(true)
        }
        else
        {
            console.log(false)

        }

    })
}


const print = () => {

  compare('kayak')
  compare('canoe')
}

setTimeout(() => {
	console.log()
  console.log('Question 3')
  print()
},7000)

