
//Solution I
const getPrimes = function(rangeLimit) {
  // Create your range, starting at two and ending at the given limit.
  // save all numbers in array
  let numbers = [];
  for(let i = 2; i <= rangeLimit ; i++){
    numbers.push(i)
  }
  // console.log(numbers);
  // The algorithm consists of repeating the following over and over:
  
  let primes = [];
  while(numbers.length > 0 ){
    
    let prime = numbers.shift(); // take the next available unmarked number in your list (it is prime)
    primes.push(prime);

    numbers = numbers.filter(function(num){
      // remove all the multiples of that number (they are not prime)
      return (num % prime !== 0);
    });    
  }
    // Repeat until you don't have any possible primes left in your range.
    

  // When the algorithm terminates, all the numbers in the list that have not been removed are prime.
  // loop through all the prime numbers and print them to the console
  for(let i = 0 ; i <= primes.length ; i++){
    console.log(primes[i]);
  }
}

// getPrimes(13);

//Solution II with more than one function

function isPrime(endNum) {
  let array = []
  for (let i = 2; i <= endNum; i++) {
      array.push(i)
  }
  checkPrime(array)
}

function checkPrime(range) {
  let primes = [];
  while (range.length > 0) {
      let prime = range.shift()
      primes.push(prime)

      range = range.filter(function (num) {
          return num % prime !== 0
      })
  }
  console.log(primes)
}

// isPrime(30)