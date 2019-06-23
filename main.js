// const getPrimes = function(rangeLimit) {
//   // Create your range, starting at two and ending at the given limit.

//   // The algorithm consists of repeating the following over and over:

//     // take the next available unmarked number in your list (it is prime)
//     // remove all the multiples of that number (they are not prime)
//     // Repeat until you don't have any possible primes left in your range.

//   // When the algorithm terminates, all the numbers in the list that have not been removed are prime.
//   // loop through all the prime numbers and print them to the console
// }

// getPrimes();
const getPrimes = function(rangeLimit) {
  // Create your range, starting at two and ending at the given limit.
  let numbers = [];
  for(let i = 2; i <= rangeLimit; i++){ 
    //loop start from 2 to given limit
    numbers.push(i); //add the i to array called numbers
  }
  
  // The algorithm consists of repeating the following over and over:
  let primes = [];
  while(numbers.length > 0){
      let prime = numbers.shift(); //2
      numbers = numbers.filter(function(num){
        return num % prime !== 0; //[3,5,7,...,]
      });
      primes.push(prime);
  }
  // console.log(primes);

    // take the next available unmarked number in your list (it is prime)
    // remove all the multiples of that number (they are not prime)
    // Repeat until you don't have any possible primes left in your range.
  for(let i = 0; i < primes.length ; i++){
    console.log(primes[i]);
  }
  // When the algorithm terminates, all the numbers in the list that have not been removed are prime.
  // loop through all the prime numbers and print them to the console
}

getPrimes(120);
